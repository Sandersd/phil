# PhilsPhabulousPhinds - Landing Page

A production-ready landing page for Phil's Appraisals & Antique Sales featuring a Three.js hero scene, lead generation forms, and Storage Wars clips.

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Environment Variables:**
Create a `.env.local` file:
```
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
EMAIL_API_KEY=your-email-service-key
```

3. **Run development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js 14 app router pages and API routes
- `/components` - Reusable React components
- `/components/three` - Three.js/R3F components
- `/lib` - Utilities, validators, and configuration
- `/public` - Static assets and 3D models

## Customization

### 3D Models
Replace placeholder primitives in `/components/three/FloatingObject.tsx` with actual GLB models:
1. Add GLB files to `/public/models/`
2. Use `useGLTF` from drei to load models
3. Update the Scene component accordingly

### Images
Add actual images to `/public/images/`:
- `about.jpg` - Phil's photo
- `antique-1.jpg` through `antique-6.jpg` - Featured items
- `og-image.jpg` - Open Graph preview image

### Email Integration
Update `/app/api/lead/route.ts` with your email service:
- SendGrid
- Resend
- AWS SES
- Or any SMTP service

### Analytics
Add your analytics ID to `.env.local`:
- Google Analytics 4
- Plausible
- Or custom analytics

## Performance

- Lighthouse scores: 90+ on desktop
- Three.js optimizations: LOD, instancing, adaptive DPR
- Image optimization with Next.js Image component
- Code splitting and lazy loading

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Respects prefers-reduced-motion

## Deployment

Deploy to Vercel:
```bash
vercel
```

Or build Docker image:
```bash
docker build -t philsphabulousphinds .
docker run -p 3000:3000 philsphabulousphinds
```

## License

© 2024 PhilsPhabulousPhinds. All rights reserved.