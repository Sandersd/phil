'use client'

import { motion } from 'framer-motion'

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 bg-bg/50 border-y border-ink/10"
    >
      <div className="max-width section-padding">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <p className="text-muted">As seen on</p>
          <p className="text-2xl font-bold text-gold">Storage Wars</p>
          <p className="text-muted">Trusted by thousands since 1998</p>
        </div>
      </div>
    </motion.section>
  )
}