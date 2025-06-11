'use client'

import { Participation } from '@/payload-types'
import { useEffect, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import NextButton from './NextButton'
import { markProgress } from '../_actions/markProgress'
import { Button } from '@/components/ui/button'

export default function QuizModule({
  module,
  participation,
  onCompleted,
}: {
  module: any
  onCompleted: (nextIndex: number) => void
  participation: Participation
}) {
  const [message, setMessage] = useState('')
  const [userAnswers, setUserAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false)
  const [current, setCurrent] = useState(0)

  const letters = [
    { label: 'A', color: 'text-whhite' },
    { label: 'B', color: 'text-blue-800' },
    { label: 'C', color: 'text-red-800' },
    { label: 'A', color: 'text-whhite' },
  ]

  useEffect(() => {
    setEmptyUserAnswers()
  }, [])

  function setEmptyUserAnswers() {
    let temp = []

    temp = module.questions.map((question: any) => {
      return question.answers.map(() => {
        return false
      })
    })

    setUserAnswers(temp)
  }

  function checkAnswer(i: number) {
    let correct = true
    const length = module.questions[i].answers.length

    for (let n = 0; n < length; n++) {
      const val = module.questions[i].answers[n].true ? module.questions[i].answers[n].true : false
      console.log('answer', i, val, userAnswers[i][n])
      if (val !== userAnswers[i][n]) {
        correct = false
      }
    }
    return correct
  }

  function checkAllAnswers() {
    for (let i = 0; i < module.questions.length; i++) {
      if (!checkAnswer(i)) {
        return false
      }
    }
    return true
  }

  async function handleNextModule() {
    setLoading(true)
    try {
      const updatedParticipation = await markProgress(participation)
      if (updatedParticipation && updatedParticipation.progress) {
        onCompleted(updatedParticipation.progress)
      } else {
        console.error('Failed to update participation progress')
      }
    } catch (error) {
      console.error('Error marking progress:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleNextQuestion() {
    setLoading(true)
    try {
      const lnt = module?.questions?.length - 1
      if (current < lnt) {
        setCurrent(current + 1)
      } else {
        setCurrent(0)
      }
    } catch (error) {
      console.error('Error moving next:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <h2 className="text-2xl font-bold">{module.title}</h2>
      <div>
        {module.questions.map((question: any, i: number) => {
          return (
            <div
              key={i}
              className={`flex flex-col gap-3 bg-[#002157] py-6 px-12 mx-6 md:mx-36 text-gray-300 pb-14 mt-3 ${current == i ? '' : 'hidden'}`}
            >
              <p className={`font-bold`}>
                {i + 1}. {question.question}
              </p>
              {question.answers.map((answer: any, index: number) => {
                return (
                  <div className="flex items-center cursor-pointer" key={`${i}-${index}-${answer}`}>
                    <input
                      id={'default-checkbox' + index}
                      type="checkbox"
                      onClick={(e: any) => {
                        setMessage('')
                        const tempAns = JSON.parse(JSON.stringify(userAnswers))

                        tempAns[i][index] = e.target.checked
                        setUserAnswers(tempAns)
                      }}
                      className={`h-4 w-4 text-teal-500 bg-gray-100 border-gray-300 rounded-full focus:ring-teal-400  focus:ring-2`}
                    />
                    <label
                      htmlFor={'default-checkbox' + index}
                      className={`ml-4 cursor-pointer font-medium text-white text-2xl`}
                    >
                      <strong
                        className={`${letters[index].color}`}
                      >{`[${letters[index].label}]`}</strong>{' '}
                      {answer.answer}
                    </label>
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className="flex justify-center items-center">
          <Button
            onClick={handleNextQuestion}
            className="py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] hover:bg-[#0021578f] mt-2 cursor-pointer"
          >
            Suivant
          </Button>
        </div>
      </div>

      {message && <div className={`text-red-500 p-2 text-end fond-bold `}>{message}</div>}
      <div className="flex flex-col gap-4 justify-start">
        <div className="flex">
          {allAnswersCorrect ? (
            <NextButton loading={loading} text="Section suivante" onClick={handleNextModule} />
          ) : (
            <button
              disabled={allAnswersCorrect}
              className={`${allAnswersCorrect ? 'btn-primary-outline' : 'btn-primary'}`}
              onClick={() => {
                console.log('userAnswers', userAnswers)
                if (checkAllAnswers()) {
                  setUserAnswers([])
                  setAllAnswersCorrect(true)
                } else {
                  setMessage(
                    'Toutes les réponses ne sont pas correctes. Veuillez vérifier vos réponses. Plusieurs réponses peuvent être correctes.',
                  )
                }
              }}
            >
              <div className="flex gap-2 items-center cursor-pointer">
                <span>Vérifier les réponses</span>
                <HiArrowRight className="h-4 w-4" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
