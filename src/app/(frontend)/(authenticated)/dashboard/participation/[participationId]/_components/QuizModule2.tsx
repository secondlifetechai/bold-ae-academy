'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function QuizModule({ quizes }: { quizes: any }) {
  const [message, setMessage] = useState('')
  const [userAnswers, setUserAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false)
  const [current, setCurrent] = useState(0)

  const letters = [
    { label: 'A', color: 'text-whhite' },
    { label: 'B', color: 'text-blue-800' },
    { label: 'C', color: 'text-red-800' },
    { label: 'D', color: 'text-green-800' },
  ]

  useEffect(() => {
    setEmptyUserAnswers()
  }, [])

  function setEmptyUserAnswers() {
    let temp = []

    temp = quizes?.questions?.map((question: any) => {
      return question.answers.map(() => {
        return false
      })
    })

    setUserAnswers(temp)
  }

  function checkAnswer(i: number) {
    let correct = true
    const length = quizes?.questions[i].answers.length

    for (let n = 0; n < length; n++) {
      const val = quizes?.questions[i].answers[n].true
        ? quizes?.questions[i].answers[n].true
        : false
      console.log('answer', i, val, userAnswers[i][n])
      if (val !== userAnswers[i][n]) {
        correct = false
      }
    }
    return correct
  }

  function checkAllAnswers() {
    for (let i = 0; i < quizes.questions.length; i++) {
      if (!checkAnswer(i)) {
        return false
      }
    }
    return true
  }

  async function handleNextQuestion() {
    setLoading(true)
    try {
      const lnt = quizes?.questions?.length - 1
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
    <>
      {quizes?.questions?.map((question: any, i: number) => {
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

                      tempAns[i][index] = e?.target?.checked
                      setUserAnswers(tempAns)
                    }}
                    className={`h-4 w-4 text-teal-500 bg-gray-100 border-gray-300 rounded-full focus:ring-teal-400  focus:ring-2`}
                  />
                  <label
                    htmlFor={'default-checkbox' + index}
                    className={`ml-4 cursor-pointer font-medium text-white text-xl`}
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
    </>
  )
}
