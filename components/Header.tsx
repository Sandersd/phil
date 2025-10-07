'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#appraisals', label: 'Appraisals' },
  { href: '#antiques', label: 'Antiques' },
  { href: '#clips', label: 'Clips' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
    )}>
      <nav className="max-width section-padding py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-gold">
          PhilsPhabulousPhinds
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}