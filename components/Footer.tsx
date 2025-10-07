export default function Footer() {
  return (
    <footer className="py-12 bg-bg border-t border-ink/10">
      <div className="max-width section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gold mb-4">PhilsPhabulousPhinds</h3>
            <p className="text-sm text-muted">
              Trusted appraisals, remarkable finds.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted">
              <p>Phone: 555-0123</p>
              <p>Email: info@philsphabulousphinds.com</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-ink transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted hover:text-ink transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted hover:text-ink transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-ink/10 text-center text-sm text-muted">
          <p>© 2024 PhilsPhabulousPhinds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}