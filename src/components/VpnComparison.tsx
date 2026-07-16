import { vpnServices, type VpnBadge } from '../data/vpnData'
import './VpnComparison.css'

const criteria = ['Speed', 'Privacy', 'Streaming'] as const

const scores: Record<string, Record<(typeof criteria)[number], string>> = {
  NordVPN: { Speed: 'Excellent', Privacy: 'Excellent', Streaming: 'Excellent' },
  ExpressVPN: { Speed: 'Excellent', Privacy: 'Excellent', Streaming: 'Excellent' },
  Surfshark: { Speed: 'Great', Privacy: 'Excellent', Streaming: 'Great' },
  CyberGhost: { Speed: 'Great', Privacy: 'Good', Streaming: 'Excellent' },
  'Proton VPN': { Speed: 'Good', Privacy: 'Excellent', Streaming: 'Good' },
}

const badgeLabels: Record<VpnBadge, string> = {
  'editors-choice': "★ Editor's Choice",
  'best-value': '✓ Best Value',
}

function CheckIcon() {
  return (
    <svg className="vpn-compare__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
      <path
        d="M4.5 8.2L6.8 10.5L11.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function VpnLogo({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="vpn-compare__logo" style={{ backgroundColor: color }} aria-hidden="true">
      {initials}
    </div>
  )
}

function scoreClass(score: string): string {
  if (score === 'Excellent') return 'vpn-compare__score-cell--excellent'
  if (score === 'Great') return 'vpn-compare__score-cell--great'
  return 'vpn-compare__score-cell--good'
}

export function VpnComparison() {
  return (
    <section id="rankings" className="section vpn-compare">
      {/*
        Desktop: high-conversion comparison table directly below Hero.
        Mobile: table hidden; stacked cards with logo, score, 3 checkmark bullets, thumb-friendly CTA.
      */}
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Top VPN Services — July 2026</h2>
          <p className="section__subtitle">
            Compare our top picks side-by-side. Ranked by independent testing — prices
            shown for 2-year plans.
          </p>
        </header>

        {/* Desktop: comparison table */}
        <div className="vpn-compare__table-wrap">
          <table className="vpn-compare__table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">VPN Provider</th>
                <th scope="col">Score</th>
                {criteria.map((c) => (
                  <th key={c} scope="col">{c}</th>
                ))}
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {vpnServices.map((vpn) => (
                <tr
                  key={vpn.name}
                  className={vpn.badge === 'editors-choice' ? 'vpn-compare__row--featured' : ''}
                >
                  <td className="vpn-compare__rank">#{vpn.rank}</td>
                  <td>
                    <div className="vpn-compare__provider">
                      <VpnLogo initials={vpn.logoInitials} color={vpn.logoColor} />
                      <div>
                        <span className="vpn-compare__name">{vpn.name}</span>
                        {vpn.badge && (
                          <span className={`card__badge card__badge--${vpn.badge} vpn-compare__tag`}>
                            {badgeLabels[vpn.badge]}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="vpn-compare__rating">{vpn.rating}</span>
                    <span className="vpn-compare__rating-max">/10</span>
                  </td>
                  {criteria.map((c) => {
                    const score = scores[vpn.name]?.[c] ?? 'Good'
                    return (
                      <td key={c} className={scoreClass(score)}>{score}</td>
                    )
                  })}
                  <td className="vpn-compare__price">{vpn.price}</td>
                  <td>
                    <a
                      href="#"
                      className="btn btn--cta"
                      aria-label={`Get deal for ${vpn.name}`}
                    >
                      Get Deal →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="vpn-compare__cards">
          {vpnServices.map((vpn) => (
            <article
              key={vpn.name}
              className={`card vpn-compare__card ${vpn.badge === 'editors-choice' ? 'card--featured' : ''}`}
            >
              <div className="vpn-compare__card-top">
                <VpnLogo initials={vpn.logoInitials} color={vpn.logoColor} />
                <div className="vpn-compare__card-info">
                  <h3 className="vpn-compare__card-name">{vpn.name}</h3>
                  {vpn.badge && (
                    <span className={`card__badge card__badge--${vpn.badge}`}>
                      {badgeLabels[vpn.badge]}
                    </span>
                  )}
                </div>
                <div className="vpn-compare__card-score" aria-label={`Score ${vpn.rating} out of 10`}>
                  <span className="vpn-compare__rating">{vpn.rating}</span>
                  <span className="vpn-compare__rating-max">/10</span>
                </div>
              </div>

              <ul className="vpn-compare__highlights">
                {vpn.features.slice(0, 3).map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="btn btn--cta btn--cta-lg btn--block"
                aria-label={`Get deal for ${vpn.name}`}
              >
                Get {vpn.name} — {vpn.price}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
