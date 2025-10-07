'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'How much does an appraisal cost?',
    answer: 'Appraisal fees vary based on the item and service type. Virtual appraisals start at $75, while in-person evaluations begin at $150.',
  },
  {
    question: 'How long does the appraisal process take?',
    answer: 'Virtual appraisals typically complete within 48 hours. In-person appointments are scheduled within one week.',
  },
  {
    question: 'Do you purchase items directly?',
    answer: 'Yes, we selectively purchase exceptional pieces for our collection. We\'ll make an offer if interested.',
  },
  {
    question: 'What types of items do you appraise?',
    answer: 'We specialize in antiques, fine art, jewelry, furniture, textiles, and collectibles from all periods.',
  },
  {
    question: 'Is my appraisal certificate accepted for insurance?',
    answer: 'Yes, our certified appraisals are accepted by all major insurance companies.',
  },
  {
    question: 'Can I get an appraisal from just photos?',
    answer: 'Yes, we offer preliminary evaluations from photos, though some items may require in-person inspection.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-bg/50">
      <div className="max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-ink/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg/50 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-accent">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-muted">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}