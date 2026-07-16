export type VpnBadge = 'editors-choice' | 'best-value'

export interface VpnService {
  rank: number
  name: string
  tagline: string
  rating: number
  price: string
  features: string[]
  badge?: VpnBadge
  logoInitials: string
  logoColor: string
}

export const vpnServices: VpnService[] = [
  {
    rank: 1,
    name: 'NordVPN',
    tagline: 'Best overall for speed, security, and streaming',
    rating: 9.8,
    price: '$3.39/mo',
    features: ['5,500+ servers', 'Threat Protection', 'No-logs audited'],
    badge: 'editors-choice',
    logoInitials: 'NV',
    logoColor: '#4687ff',
  },
  {
    rank: 2,
    name: 'ExpressVPN',
    tagline: 'Premium performance with the widest device support',
    rating: 9.5,
    price: '$6.67/mo',
    features: ['105 countries', 'Lightway protocol', '24/7 live chat'],
    logoInitials: 'EV',
    logoColor: '#da3940',
  },
  {
    rank: 3,
    name: 'Surfshark',
    tagline: 'Unlimited devices on a single affordable plan',
    rating: 9.3,
    price: '$2.19/mo',
    features: ['Unlimited devices', 'CleanWeb blocker', 'Camouflage mode'],
    badge: 'best-value',
    logoInitials: 'SS',
    logoColor: '#1dc4d6',
  },
  {
    rank: 4,
    name: 'CyberGhost',
    tagline: 'Beginner-friendly with dedicated streaming servers',
    rating: 9.0,
    price: '$2.19/mo',
    features: ['9,000+ servers', 'Streaming optimized', '45-day guarantee'],
    logoInitials: 'CG',
    logoColor: '#ffcc00',
  },
  {
    rank: 5,
    name: 'Proton VPN',
    tagline: 'Swiss privacy laws with a generous free tier',
    rating: 8.9,
    price: '$4.99/mo',
    features: ['Secure Core', 'Open source', 'Free plan available'],
    logoInitials: 'PV',
    logoColor: '#6d4aff',
  },
]

export const trustStats = [
  { value: '47', label: 'VPNs tested' },
  { value: '120+', label: 'Hours of research' },
  { value: '15', label: 'Countries reviewed' },
  { value: '2026', label: 'Updated rankings' },
]

export const methodologyPoints = [
  {
    title: 'Independent testing',
    description:
      'We purchase and test every VPN ourselves — no sponsored rankings or pay-to-play placements.',
  },
  {
    title: 'Speed & reliability',
    description:
      'We measure download speeds, latency, and connection stability across multiple global server locations.',
  },
  {
    title: 'Privacy audit',
    description:
      'We review privacy policies, jurisdiction, logging practices, and third-party security audits.',
  },
  {
    title: 'Real-world use cases',
    description:
      'Streaming, torrenting, remote work, and mobile usage are all evaluated before we publish a score.',
  },
]
