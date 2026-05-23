interface PouchSpinnerProps {
  size?: number;
  className?: string;
}

export default function PouchSpinner({ size = 40, className = "" }: PouchSpinnerProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="로딩 중"
    >
      <svg
        viewBox="0 0 40 44"
        width={size}
        height={size}
        className="animate-pouch-bounce"
        aria-hidden="true"
      >
        {/* Strap loop */}
        <path
          d="M 18 2 Q 18 6 14 7"
          stroke="#d12031"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Pouch body */}
        <rect
          x="6"
          y="7"
          width="28"
          height="32"
          rx="2"
          ry="2"
          fill="#d12031"
        />
        {/* Zipper line */}
        <line x1="8" y1="11" x2="32" y2="11" stroke="#a01a26" strokeWidth="1" />
        {/* BNI text dot */}
        <circle cx="20" cy="28" r="3" fill="#7a121c" />
      </svg>
      <span className="sr-only">로딩 중</span>
    </div>
  );
}
