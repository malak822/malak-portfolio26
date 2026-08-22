export default function GirlIllustration({ size = 300 }) {
  return (
    <svg width={size} height={size * 1.13} viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="345" rx="90" ry="12" fill="#000" opacity="0.25" />

      <defs>
        <linearGradient id="hoodieShade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      <path d="M95 360 L95 250 Q95 195 160 195 Q225 195 225 250 L225 360 Z" fill="url(#hoodieShade)" />
      <path d="M120 300 Q160 320 200 300 L200 335 Q160 350 120 335 Z" fill="#c2410c" opacity="0.9" />
      <path d="M120 205 Q160 235 200 205 L200 225 Q160 250 120 225 Z" fill="#c2410c" />
      <rect x="145" y="175" width="30" height="30" rx="10" fill="#f2b98c" />

      <g transform="translate(108,268)">
        <rect x="0" y="18" width="104" height="8" rx="3" fill="#cbd5e1" />
        <rect x="8" y="-30" width="88" height="50" rx="6" fill="#e2e8f0" />
        <rect x="14" y="-24" width="76" height="38" rx="3" fill="#1e293b" />
        <rect x="30" y="6" width="44" height="10" rx="2" fill="#f97316" />
      </g>

      <circle cx="160" cy="130" r="58" fill="#f6c396" />
      <circle cx="103" cy="132" r="10" fill="#f2b98c" />
      <circle cx="217" cy="132" r="10" fill="#f2b98c" />

      <path d="M96 118 Q90 210 130 225 L135 150 Q100 145 96 118 Z" fill="#2b2118" />
      <path d="M224 118 Q230 210 190 225 L185 150 Q220 145 224 118 Z" fill="#2b2118" />

      <path d="M100 120 Q94 55 160 48 Q226 55 220 120 Q214 78 160 78 Q106 78 100 120 Z" fill="#33261a" />
      <path d="M100 118 Q98 92 118 82 Q108 100 112 118 Z" fill="#33261a" />
      <path d="M220 118 Q222 92 202 82 Q212 100 208 118 Z" fill="#33261a" />

      <ellipse cx="127" cy="150" rx="10" ry="6" fill="#f6926b" opacity="0.5" />
      <ellipse cx="193" cy="150" rx="10" ry="6" fill="#f6926b" opacity="0.5" />

      <g stroke="#2b2118" strokeWidth="4" fill="none">
        <rect x="112" y="120" width="38" height="30" rx="10" />
        <rect x="170" y="120" width="38" height="30" rx="10" />
        <line x1="150" y1="132" x2="170" y2="132" />
        <line x1="108" y1="128" x2="96" y2="122" />
        <line x1="212" y1="128" x2="224" y2="122" />
      </g>
      <rect x="115" y="123" width="32" height="24" rx="8" fill="#dbeafe" opacity="0.35" />
      <rect x="173" y="123" width="32" height="24" rx="8" fill="#dbeafe" opacity="0.35" />

      <circle cx="131" cy="135" r="4" fill="#2b2118" />
      <circle cx="189" cy="135" r="4" fill="#2b2118" />

      <path d="M120 116 Q131 110 142 116" stroke="#2b2118" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M178 116 Q189 110 200 116" stroke="#2b2118" strokeWidth="3" fill="none" strokeLinecap="round" />

      <path d="M158 145 Q160 152 165 152" stroke="#e0a877" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M143 162 Q160 174 177 162" stroke="#8b4a2b" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      <path d="M118 90 Q130 108 122 122 Q112 108 118 90 Z" fill="#33261a" />
      <path d="M202 90 Q190 108 198 122 Q208 108 202 90 Z" fill="#33261a" />
    </svg>
  )
}
