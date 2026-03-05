export function HeroClinicSvg() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="heroWindow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8f0eb" />
          <stop offset="100%" stopColor="#d4e6d9" />
        </linearGradient>
        <linearGradient id="heroPrimary" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d5a3d" />
          <stop offset="100%" stopColor="#234a32" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="#f9fafb" />
      <rect x="0" y="200" width="800" height="300" fill="#f0ede8" />
      <rect x="80" y="80" width="640" height="320" rx="16" fill="url(#heroWindow)" stroke="#e5e2dd" strokeWidth="2" />
      <rect x="100" y="100" width="600" height="180" fill="#ffffff" opacity="0.9" />
      <rect x="120" y="300" width="200" height="80" rx="8" fill="url(#heroPrimary)" />
      <rect x="340" y="300" width="120" height="80" rx="8" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <rect x="480" y="300" width="220" height="80" rx="8" fill="#ffffff" stroke="#e5e2dd" strokeWidth="1" />
      <circle cx="180" cy="340" r="20" fill="#2d5a3d" opacity="0.3" />
      <path d="M100 380 L150 340 L200 380 L250 340 L300 380" stroke="#2d5a3d" strokeWidth="2" fill="none" opacity="0.5" />
      <ellipse cx="600" cy="200" rx="60" ry="40" fill="#e8f0eb" />
      <circle cx="580" cy="195" r="8" fill="#4b5563" />
      <circle cx="620" cy="195" r="8" fill="#4b5563" />
      <path d="M575 215 Q600 225 625 215" stroke="#4b5563" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="560" y="230" width="80" height="40" rx="4" fill="#2d5a3d" />
      <rect x="120" y="120" width="80" height="60" rx="4" fill="#6b5344" opacity="0.3" />
      <rect x="220" y="130" width="100" height="40" rx="4" fill="#e5e2dd" />
      <rect x="550" y="130" width="120" height="50" rx="4" fill="#e5e2dd" />
    </svg>
  );
}
