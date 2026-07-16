import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Top VPN 2026</span>
          <p className="footer__tagline">
            Independent VPN reviews for a global audience. We may earn a
            commission when you purchase through our links — at no extra cost
            to you.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <div className="footer__col">
            <h4>Reviews</h4>
            <a href="#rankings">Top Rankings</a>
            <a href="#rankings">Compare VPNs</a>
            <a href="#methodology">Methodology</a>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Affiliate Disclosure</a>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Top VPN Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
