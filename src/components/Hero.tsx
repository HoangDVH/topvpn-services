import { trustStats } from '../data/vpnData'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      {/*
        Hero uses a dark gradient to immediately signal security/trust.
        Primary CTA is placed above the fold, left-aligned on desktop
        so the eye follows headline → subtext → button (F-pattern reading).
      */}
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Independent VPN Reviews · Updated July 2026</span>
          <h1 className="hero__title">
            Find the Best VPN for Your Privacy in 2026
          </h1>
          <p className="hero__subtitle">
            We tested 47 VPN services so you don't have to. Compare speed,
            security, and value — then choose with confidence.
          </p>
          <div className="hero__actions">
            <a href="#rankings" className="btn btn--primary btn--lg">
              View Top 5 VPNs
            </a>
            <a href="#methodology" className="btn btn--ghost btn--lg">
              How We Test
            </a>
          </div>
        </div>

        <div className="hero__stats" aria-label="Review statistics">
          {trustStats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
