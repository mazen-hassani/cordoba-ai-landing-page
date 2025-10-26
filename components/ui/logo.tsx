import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Cordoba AI">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        {/* Inspired by Al-Andalus geometric patterns */}
        <g>
          {/* Outer octagon - representing the bridge between past and future */}
          <path
            d="M16 2 L22 5 L27 10 L30 16 L27 22 L22 27 L16 30 L10 27 L5 22 L2 16 L5 10 L10 5 Z"
            fill="#34D1BF"
            opacity="0.2"
          />
          {/* Inner geometric star pattern */}
          <path
            d="M16 6 L18.5 11 L24 11.5 L19.5 15.5 L21 21 L16 18 L11 21 L12.5 15.5 L8 11.5 L13.5 11 Z"
            fill="#C6A770"
          />
          {/* Center point - AI core */}
          <circle cx="16" cy="16" r="3" fill="#0A0F1F" />
          <circle cx="16" cy="16" r="1.5" fill="#34D1BF" />
        </g>
      </svg>
      <span className="text-lg font-bold text-[#0A0F1F]">Cordoba AI</span>
    </Link>
  );
}
