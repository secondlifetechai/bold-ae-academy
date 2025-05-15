'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-[#002157]">
      <div className="p-4 font-[sans-serif] py-6">
        <div className="max-w-screen-xl mx-auto border border-blue-950 p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6 }}
              className="lg:flex lg:items-center"
            >
              <Link href="/">
                <img src={'/logos/logo.png'} alt="logo" className="w-24" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.7, delay: 0.7 }}
              className="lg:flex lg:items-center"
            >
              <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <li>
                  <Link href={''}>
                    <FaFacebookSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                  </Link>
                </li>

                <li>
                  <Link href={''}>
                    <BsLinkedin className="fill-gray-300 hover:fill-white w-7 h-7" />
                  </Link>
                </li>

                <li>
                  <Link href={''}>
                    <FaTwitterSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                  </Link>
                </li>

                <li>
                  <Link href={''}>
                    <FaInstagramSquare className="fill-gray-300 hover:fill-white w-7 h-7" />
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.8 }}
            >
              <h4 className="text-lg mb-6 text-white">PAGES</h4>
              <ul className="space-y-4 pl-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                    À propos de nous
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-white text-sm">
                    Contactez-nous
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9, delay: 0.9 }}
            >
              <h4 className="text-lg mb-6 text-white">Information</h4>
              <ul className="space-y-4 pl-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                    À propos de nous
                  </Link>
                </li>
                <li>
                  <Link href="/#blog" className="text-gray-300 hover:text-white text-sm">
                    Articles de blog
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
