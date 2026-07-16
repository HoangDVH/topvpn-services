import './CtaBanner.css'

export function CtaBanner() {
  return (
    <section className="cta-banner">
      {/*
        Final CTA section before footer: last chance to convert visitors
        who scrolled through the full comparison. Centered layout with
        high-contrast background creates a clear visual break.
      */}
      <div className="container cta-banner__inner">
        <h2 className="cta-banner__title">
          Ready to protect your privacy?
        </h2>
        <p className="cta-banner__text">
          Join millions who trust our top-rated VPN. Start with our Editor's
          Choice — NordVPN — and save up to 72% today.
        </p>
        <a href="#rankings" className="btn btn--primary btn--lg">
          Get NordVPN Deal →
        </a>
        <p className="cta-banner__note">30-day money-back guarantee on all top picks</p>
      </div>
    </section>
  )
}
