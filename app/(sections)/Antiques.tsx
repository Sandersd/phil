'use client'

import { motion } from 'framer-motion'

const antiques = [
  { id: 1, name: 'Victorian Dresser', category: 'Furniture', image: '/images/antique-1.jpg' },
  { id: 2, name: 'Art Deco Lamp', category: 'Lighting', image: '/images/antique-2.jpg' },
  { id: 3, name: 'Persian Rug', category: 'Textiles', image: '/images/antique-3.jpg' },
  { id: 4, name: 'Tiffany Brooch', category: 'Jewelry', image: '/images/antique-4.jpg' },
  { id: 5, name: 'Ming Vase', category: 'Ceramics', image: '/images/antique-5.jpg' },
  { id: 6, name: 'Oil Painting', category: 'Art', image: '/images/antique-6.jpg' },
]

export default function Antiques() {
  return (
    <section id="antiques" className="py-20 bg-bg/50">
      <div className="max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Antiques</h2>
          <p className="text-muted text-lg">Remarkable finds from our collection</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {antiques.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 bg-bg rounded-lg overflow-hidden mb-4 border border-ink/10 group-hover:-translate-y-1 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-muted">{item.category}</p>
                </div>
              </div>
              <p className="text-gold font-medium">Price on request</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}