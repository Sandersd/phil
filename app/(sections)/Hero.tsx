'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'

const Scene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-bg" />
})

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Scene />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl section-padding"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Appraisals you can trust.
            <br />
            <span className="text-gold">Finds you'll love.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8">
            Phil brings decades of expertise to antiques, estates, and rare collectibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToElement('contact')}
              className="btn btn-primary"
            >
              Get an Appraisal
            </button>
            <button
              onClick={() => scrollToElement('antiques')}
              className="btn btn-secondary"
            >
              See Antiques
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}