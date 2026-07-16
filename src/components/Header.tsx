import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo" aria-label="Top VPN Services 2026 home">
          <span className="header__logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="currentColor" />
              <path
                d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="14" cy="14" r="2" fill="#fff" />
            </svg>
          </span>
          <span className="header__logo-text">
            Top VPN <strong>2026</strong>
          </span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <a href="#rankings">Rankings</a>
          <a href="#methodology">How We Test</a>
          <a href="#rankings">Compare</a>
        </nav>

        {/* CTA in header: always visible for conversion on scroll */}
        <a href="#rankings" className="btn btn--primary header__cta">
          See Top Picks
        </a>
      </div>
    </header>
  )
}
