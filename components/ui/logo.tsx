import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 group" aria-label="Cordoba AI">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="transition-transform duration-300 group-hover:scale-110">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Modern, minimal geometric logo */}
        <g>
          {/* Main shape - abstract C */}
          <path
            d="M16 4 C9.373 4 4 9.373 4 16 C4 22.627 9.373 28 16 28 C18.5 28 20.8 27.2 22.7 25.8 L20.5 22.8 C19.2 23.6 17.6 24 16 24 C11.582 24 8 20.418 8 16 C8 11.582 11.582 8 16 8 C17.6 8 19.2 8.4 20.5 9.2 L22.7 6.2 C20.8 4.8 18.5 4 16 4 Z"
            fill="url(#logoGradient)"
            className="transition-all duration-300"
          />
          {/* Accent element */}
          <circle cx="24" cy="16" r="2.5" fill="#8B5CF6" opacity="0.8" className="animate-pulse" />
        </g>
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
        Cordoba AI
      </span>
    </Link>
  );
}
