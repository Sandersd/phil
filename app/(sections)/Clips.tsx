'use client'

import { motion } from 'framer-motion'

const videos = [
  {
    id: 'h08WBl1YnkY',
    title: 'Storage Wars: Phil\'s Expert Eye',
    description: 'Watch Phil identify a rare antique worth thousands',
  },
  {
    id: 'WJ4kO1QD-RQ',
    title: 'Hidden Treasures Revealed',
    description: 'Phil uncovers valuable items others missed',
  },
  {
    id: 'r4fc2IGVb-k',
    title: 'The Art of Appraisal',
    description: 'Phil shares his expertise on Storage Wars',
  },
]

export default function Clips() {
  return (
    <section id="clips" className="py-20 bg-bg">
      <div className="max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">As Seen on TV</h2>
          <p className="text-muted text-lg">Phil&apos;s appearances on Storage Wars</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-video bg-bg rounded-lg overflow-hidden border border-ink/10">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="font-semibold text-lg">{video.title}</h3>
              <p className="text-sm text-muted">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}