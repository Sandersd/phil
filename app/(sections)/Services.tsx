'use client'

import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'

const services = [
  'In-person or virtual appraisals',
  'Estate & insurance valuations',
  'Jewelry, furniture, art expertise',
  'Textiles & memorabilia assessment',
]

const steps = [
  { number: '1', title: 'Submit', desc: 'Share photos and details' },
  { number: '2', title: 'Review', desc: 'Expert evaluation' },
  { number: '3', title: 'Report', desc: 'Detailed valuation' },
]

export default function Services() {
  return (
    <section id="appraisals" className="py-20 bg-bg">
      <div className="max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Appraisals</h2>
          <p className="text-muted text-lg">Expert valuations you can trust</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gold">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gold">How It Works</h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent/20 text-accent rounded-full flex items-center justify-center font-bold mr-4">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => scrollToElement('contact')}
            className="btn btn-primary"
          >
            Get Your Appraisal
          </button>
        </motion.div>
      </div>
    </section>
  )
}