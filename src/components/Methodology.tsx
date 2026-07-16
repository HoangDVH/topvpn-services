import { methodologyPoints } from '../data/vpnData'
import './Methodology.css'

export function Methodology() {
  return (
    <section id="methodology" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">How We Test VPNs</h2>
          <p className="section__subtitle">
            Transparency builds trust. Here's exactly how we evaluate every
            service before it appears in our rankings.
          </p>
        </header>

        <div className="methodology__grid">
          {methodologyPoints.map((point, index) => (
            <div key={point.title} className="card methodology__card">
              <span className="methodology__step" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="methodology__title">{point.title}</h3>
              <p className="methodology__desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
