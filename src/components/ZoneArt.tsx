import type { Zone } from "@/lib/zones";

type ZoneArtProps = {
  variant: Zone["art"];
  className?: string;
};

/**
 * Flat, woodblock-print-style folk illustrations (Đông Hồ idiom: bold color
 * blocks, thick outlines, no sketchy/hand-drawn linework) — one per zone,
 * matching the mural the QR tag is stuck next to.
 */
export function ZoneArt({ variant, className }: ZoneArtProps) {
  const art = ART_BY_VARIANT[variant];
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={art.label}
    >
      {art.render()}
    </svg>
  );
}

const ART_BY_VARIANT: Record<Zone["art"], { label: string; render: () => React.ReactNode }> = {
  nghe: {
    label: "Con Nghê canh cổng",
    render: () => (
      <>
        <ellipse cx="100" cy="115" rx="78" ry="70" fill="#F0CD4A" />
        <path d="M30 90 C10 60 30 20 75 25 C70 45 65 60 30 90Z" fill="#C8402E" />
        <path d="M170 90 C190 60 170 20 125 25 C130 45 135 60 170 90Z" fill="#C8402E" />
        <path d="M55 35 C70 15 130 15 145 35 C130 55 70 55 55 35Z" fill="#5C6B3B" />
        <circle cx="70" cy="105" r="16" fill="#FBF3DE" />
        <circle cx="130" cy="105" r="16" fill="#FBF3DE" />
        <circle cx="70" cy="108" r="8" fill="#3A2A1A" />
        <circle cx="130" cy="108" r="8" fill="#3A2A1A" />
        <circle cx="67" cy="105" r="2.5" fill="#FBF3DE" />
        <circle cx="127" cy="105" r="2.5" fill="#FBF3DE" />
        <path d="M85 130 Q100 145 115 130 Q100 150 85 130Z" fill="#C8402E" />
        <path
          d="M70 138 Q100 160 130 138"
          stroke="#A52E1F"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="50" cy="80" r="9" fill="#C8402E" />
        <circle cx="150" cy="80" r="9" fill="#C8402E" />
        <path
          d="M40 150 Q60 175 100 178 Q140 175 160 150"
          stroke="#5C6B3B"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      </>
    ),
  },
  "ngua-go": {
    label: "Ngựa gỗ trên đu quay",
    render: () => (
      <>
        <ellipse cx="100" cy="178" rx="60" ry="8" fill="#A52E1F" opacity="0.25" />
        <path
          d="M55 175 L70 90 Q60 60 85 40 Q100 28 122 35 Q140 40 145 60 L150 80 L135 82 L130 65 Q126 52 112 50 Q98 48 92 60 Q86 72 96 85 L118 110 L128 175 L108 175 L98 120 L88 175 Z"
          fill="#D9A441"
        />
        <path
          d="M85 40 Q100 25 122 33 Q112 30 100 38 Q90 44 92 60 Q80 52 85 40Z"
          fill="#C8402E"
        />
        <path
          d="M96 52 Q108 46 120 52 Q108 56 96 58Z"
          fill="#5C6B3B"
        />
        <circle cx="118" cy="55" r="4" fill="#3A2A1A" />
        <path
          d="M70 90 Q95 80 130 85"
          stroke="#C8402E"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M75 100 Q95 92 125 96"
          stroke="#5C6B3B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <rect x="96" y="170" width="8" height="20" rx="4" fill="#5C6B3B" />
        <circle cx="100" cy="188" r="7" fill="#A52E1F" />
      </>
    ),
  },
  "chu-teu": {
    label: "Chú Tễu cầm bút vẽ",
    render: () => (
      <>
        <circle cx="100" cy="105" r="72" fill="#F0CD4A" />
        <path
          d="M50 65 Q100 25 150 65 Q140 45 100 42 Q60 45 50 65Z"
          fill="#C8402E"
        />
        <circle cx="100" cy="40" r="8" fill="#D9A441" />
        <circle cx="72" cy="110" r="15" fill="#FBF3DE" />
        <circle cx="128" cy="110" r="15" fill="#FBF3DE" />
        <circle cx="72" cy="112" r="7" fill="#3A2A1A" />
        <circle cx="128" cy="112" r="7" fill="#3A2A1A" />
        <circle cx="55" cy="120" r="10" fill="#C8402E" opacity="0.85" />
        <circle cx="145" cy="120" r="10" fill="#C8402E" opacity="0.85" />
        <path
          d="M78 145 Q100 162 122 145 Q100 155 78 145Z"
          fill="#A52E1F"
        />
        <path
          d="M138 150 L165 178"
          stroke="#5C6B3B"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path d="M158 172 L172 188 L164 194 L152 178Z" fill="#3A2A1A" />
        <circle cx="120" cy="175" r="6" fill="#C8402E" />
        <circle cx="132" cy="182" r="6" fill="#D9A441" />
        <circle cx="108" cy="180" r="6" fill="#5C6B3B" />
      </>
    ),
  },
  "hoa-sen": {
    label: "Hoa sen trong đầm",
    render: () => (
      <>
        <ellipse cx="100" cy="175" rx="70" ry="10" fill="#5C6B3B" opacity="0.35" />
        <path d="M100 175 Q60 150 65 105 Q80 130 100 140 Z" fill="#5C6B3B" />
        <path d="M100 175 Q140 150 135 105 Q120 130 100 140 Z" fill="#5C6B3B" />
        <path d="M100 150 Q70 110 85 65 Q100 95 100 125Z" fill="#C8402E" />
        <path d="M100 150 Q130 110 115 65 Q100 95 100 125Z" fill="#C8402E" />
        <path d="M100 150 Q78 100 100 55 Q122 100 100 150Z" fill="#D9A441" />
        <path d="M100 148 Q88 108 100 75 Q112 108 100 148Z" fill="#F0CD4A" />
        <circle cx="100" cy="140" r="10" fill="#A52E1F" />
      </>
    ),
  },
  "cong-tam-quan": {
    label: "Cổng tam quan sân chơi",
    render: () => (
      <>
        <rect x="45" y="90" width="16" height="90" fill="#A52E1F" />
        <rect x="139" y="90" width="16" height="90" fill="#A52E1F" />
        <rect x="92" y="70" width="16" height="110" fill="#A52E1F" />
        <path
          d="M30 95 Q100 55 170 95 L160 100 Q100 68 40 100 Z"
          fill="#C8402E"
        />
        <path
          d="M20 100 Q60 70 100 78 Q60 82 30 108 Z"
          fill="#5C6B3B"
        />
        <path
          d="M180 100 Q140 70 100 78 Q140 82 170 108 Z"
          fill="#5C6B3B"
        />
        <path
          d="M75 68 Q100 45 125 68 Q112 58 100 58 Q88 58 75 68Z"
          fill="#D9A441"
        />
        <circle cx="100" cy="52" r="6" fill="#F0CD4A" />
        <rect x="55" y="128" width="30" height="42" rx="3" fill="#F0CD4A" opacity="0.9" />
        <rect x="115" y="128" width="30" height="42" rx="3" fill="#F0CD4A" opacity="0.9" />
      </>
    ),
  },
};
