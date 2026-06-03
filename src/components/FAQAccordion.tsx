'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type Item = { q: string; a: string }

type Props = {
  title: string
  subtitle?: string
  items: Item[]
}

const FAQAccordion = ({ title, subtitle, items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 font-headline">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-gray-600 mb-10 max-w-2xl">{subtitle}</p>}

        <ul className="space-y-4 mt-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-light transition-colors duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base md:text-lg text-brand-dark">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default FAQAccordion
