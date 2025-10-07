'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema, type LeadFormData } from '@/lib/validators'

export default function CTAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-bg">
      <div className="max-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get Your Appraisal</h2>
          <p className="text-muted text-lg mb-8 text-center">
            Submit your item details for a professional evaluation
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-2 bg-bg border border-ink/20 rounded-lg focus:border-accent outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 bg-bg border border-ink/20 rounded-lg focus:border-accent outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-2 bg-bg border border-ink/20 rounded-lg focus:border-accent outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Item Category</label>
                <select
                  {...register('itemCategory')}
                  className="w-full px-4 py-2 bg-bg border border-ink/20 rounded-lg focus:border-accent outline-none transition-colors"
                >
                  <option value="">Select category</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="furniture">Furniture</option>
                  <option value="art">Art</option>
                  <option value="textiles">Textiles</option>
                  <option value="memorabilia">Memorabilia</option>
                  <option value="other">Other</option>
                </select>
                {errors.itemCategory && (
                  <p className="text-red-500 text-sm mt-1">{errors.itemCategory.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-4 py-2 bg-bg border border-ink/20 rounded-lg focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell us about your item..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Appraisal Type</label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    {...register('preferredType')}
                    type="radio"
                    value="in-person"
                    className="mr-2"
                  />
                  In-Person
                </label>
                <label className="flex items-center">
                  <input
                    {...register('preferredType')}
                    type="radio"
                    value="virtual"
                    className="mr-2"
                  />
                  Virtual
                </label>
              </div>
              {errors.preferredType && (
                <p className="text-red-500 text-sm mt-1">{errors.preferredType.message}</p>
              )}
            </div>

            <input
              {...register('honeypot')}
              type="text"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                Thank you! We&apos;ll contact you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Appraisal'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}