'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-bg/50">
      <div className="max-width section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Phil</h2>
            <p className="text-muted">
              Phil has appeared on Storage Wars and has helped thousands understand the true value 
              of their pieces—without the guesswork.
            </p>
            <p className="text-muted">
              With over 25 years in the antiques business, Phil combines deep historical knowledge 
              with current market insights to provide accurate, reliable appraisals.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-gold mr-2">✓</span>
                Certified Appraiser since 1998
              </p>
              <p className="flex items-center">
                <span className="text-gold mr-2">✓</span>
                Storage Wars Expert Consultant
              </p>
              <p className="flex items-center">
                <span className="text-gold mr-2">✓</span>
                10,000+ Items Appraised
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 bg-bg rounded-lg border border-ink/10"
          >
            <div className="absolute inset-0 flex items-center justify-center text-muted">
              [Phil&apos;s Photo]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}