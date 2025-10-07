import { NextRequest, NextResponse } from 'next/server'
import { leadFormSchema } from '@/lib/validators'

const rateLimitMap = new Map<string, number>()

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    
    // Basic rate limiting
    const now = Date.now()
    const lastRequest = rateLimitMap.get(ip) || 0
    if (now - lastRequest < 5000) { // 5 seconds between requests
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }
    rateLimitMap.set(ip, now)
    
    const body = await request.json()
    
    // Validate with Zod
    const validatedData = leadFormSchema.parse(body)
    
    // Here you would normally send an email or save to database
    console.log('New lead submission:', validatedData)
    
    // For production, integrate with email service like SendGrid, Resend, etc.
    // Example:
    // await sendEmail({
    //   to: 'phil@philsphabulousphinds.com',
    //   subject: 'New Appraisal Request',
    //   body: formatLeadEmail(validatedData)
    // })
    
    return NextResponse.json(
      { message: 'Lead submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Invalid submission' },
      { status: 400 }
    )
  }
}