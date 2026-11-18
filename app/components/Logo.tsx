type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Tether USDT logo"
    >
      <defs>
        <radialGradient
          id="tethr-grad"
          cx="50%"
          cy="42%"
          r="65%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4dd9a8" />
          <stop offset="55%" stopColor="#26a69a" />
          <stop offset="100%" stopColor="#14856b" />
        </radialGradient>
      </defs>

      {/* Circle background */}
      <circle cx="100" cy="100" r="96" fill="url(#tethr-grad)" />
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.08"
        strokeWidth="2"
      />

      {/* The T */}
      <g fill="#ffffff">
        {/* Top bar of T */}
        <rect x="46" y="56" width="108" height="26" rx="3" />
        {/* Stem of T */}
        <rect x="86" y="56" width="28" height="92" rx="3" />
      </g>

      {/* Ring around the stem (elliptical, 3D-like) */}
      <g transform="translate(100 112)">
        <ellipse
          cx="0"
          cy="0"
          rx="62"
          ry="16"
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* subtle inner highlight on ring */}
        <ellipse
          cx="0"
          cy="-3"
          rx="58"
          ry="12"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
