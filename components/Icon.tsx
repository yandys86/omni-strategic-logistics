type Props = { name: string; className?: string };

export default function Icon({ name, className = "size-7" }: Props) {
  switch (name) {
    case "construction":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 21 L12 4 L21 21" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14 L17 14 M5 18 L19 18" strokeLinecap="round" />
        </svg>
      );
    case "roof":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 12 L12 4 L21 12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 11 L5 20 L19 20 L19 11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20 L10 14 L14 14 L14 20" />
        </svg>
      );
    case "tree":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3 C 8 5 6 9 8 12 C 5 12 4 16 7 18 L 17 18 C 20 16 19 12 16 12 C 18 9 16 5 12 3 Z" strokeLinejoin="round" />
          <path d="M12 18 L12 22" strokeLinecap="round" />
        </svg>
      );
    case "fire":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3 C 14 6 17 8 17 13 C 17 17 14 20 12 20 C 10 20 7 17 7 13 C 7 10 9 9 10 7 C 10 9 11 10 12 10 C 12 8 12 5 12 3 Z" strokeLinejoin="round" />
        </svg>
      );
    case "stump":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="12" cy="10" rx="7" ry="3" />
          <path d="M5 10 L5 14 C 5 16 8 17 12 17 C 16 17 19 16 19 14 L 19 10" strokeLinecap="round" />
          <circle cx="12" cy="10" r="3" />
          <path d="M10 10 L10 9 M14 10 L14 9" strokeLinecap="round" />
        </svg>
      );
    case "car":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 14 L4 18 L20 18 L20 14 L18 9 L6 9 Z" strokeLinejoin="round" />
          <circle cx="8" cy="18" r="1.6" />
          <circle cx="16" cy="18" r="1.6" />
          <path d="M6 14 L18 14" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3 L20 6 L20 12 C 20 17 16 20 12 21 C 8 20 4 17 4 12 L 4 6 Z" strokeLinejoin="round" />
          <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12 L11 15 L16 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 12 L7 12 L12 16 L13 15 L9 11 L11 9 L15 13 L17 12 L21 12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10 L3 14 M21 10 L21 14" strokeLinecap="round" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 7 L14 7 L14 17 L3 17 Z M14 10 L18 10 L21 13 L21 17 L14 17" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12 L21 12 M4.5 7.5 L19.5 7.5 M4.5 16.5 L19.5 16.5" />
        </svg>
      );
    case "grain":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3 L12 21 M12 6 C 9 7 8 9 8 12 C 11 11 12 9 12 6 Z M12 6 C 15 7 16 9 16 12 C 13 11 12 9 12 6 Z M12 11 C 9 12 8 14 8 17 C 11 16 12 14 12 11 Z M12 11 C 15 12 16 14 16 17 C 13 16 12 14 12 11 Z" strokeLinejoin="round" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 20 L20 20 M4 20 L4 6" strokeLinecap="round" />
          <path d="M4 16 L9 11 L13 14 L20 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 6 L20 6 L20 10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7 L9 5 C 9 4 10 3 11 3 L 13 3 C 14 3 15 4 15 5 L 15 7" strokeLinejoin="round" />
          <path d="M3 12 L21 12" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 3 L14 3 L19 8 L19 21 L6 21 Z" strokeLinejoin="round" />
          <path d="M14 3 L14 8 L19 8" strokeLinejoin="round" />
          <path d="M9 13 L16 13 M9 16 L16 16" strokeLinecap="round" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M9 18 L9 20 C 9 21 10 21 10 21 L 14 21 C 14 21 15 21 15 20 L 15 18" strokeLinejoin="round" />
          <path d="M8 15 C 6 13 5 11 5 9 C 5 5.5 8 3 12 3 C 16 3 19 5.5 19 9 C 19 11 18 13 16 15 L 16 18 L 8 18 Z" strokeLinejoin="round" />
        </svg>
      );
    case "blocks":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </svg>
      );
    case "store":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 8 L4 4 L20 4 L21 8 C 21 10 19 11 17 10 C 17 11 15 11 14 10 C 14 11 12 11 12 10 C 12 11 10 11 10 10 C 10 11 8 11 7 10 C 5 11 3 10 3 8 Z" strokeLinejoin="round" />
          <path d="M5 10 L5 20 L19 20 L19 10" strokeLinejoin="round" />
          <path d="M10 20 L10 14 L14 14 L14 20" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 4 L5 4 L7 16 L18 16 L20 7 L7 7" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="17" cy="20" r="1.4" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.59 5.93L.07 24l6.36-1.66a11.87 11.87 0 0 0 5.62 1.43h.01c6.55 0 11.88-5.32 11.88-11.87a11.8 11.8 0 0 0-3.42-8.42zM12.06 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.89 9.9z" />
        </svg>
      );
    default:
      return null;
  }
}
