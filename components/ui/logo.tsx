import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 group" aria-label="Cordoba AI">
      <Image
        src="/images/logo-01.svg"
        alt="Cordoba AI Logo"
        width={32}
        height={32}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
        Cordoba AI
      </span>
    </Link>
  );
}
