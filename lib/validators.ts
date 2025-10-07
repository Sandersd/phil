import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  itemCategory: z.enum(['jewelry', 'furniture', 'art', 'textiles', 'memorabilia', 'other']),
  description: z.string().min(10, 'Please provide more details about your item'),
  preferredType: z.enum(['in-person', 'virtual']),
  honeypot: z.string().max(0, 'Bot detected'),
})

export type LeadFormData = z.infer<typeof leadFormSchema>