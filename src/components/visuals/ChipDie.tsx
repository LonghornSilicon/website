import { cn } from "@/lib/cn";

type ChipDieProps = {
  className?: string;
};

export function ChipDie({ className }: ChipDieProps) {
  return (
    <svg
      className={cn(
        "h-auto w-[min(560px,85vw)] [filter:drop-shadow(0_12px_32px_rgba(191,87,0,0.2))]",
        className,
      )}
      viewBox="0 0 560 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="dieFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d96a15" />
          <stop offset="45%" stopColor="#bf5700" />
          <stop offset="100%" stopColor="#5c2a00" />
        </linearGradient>

        <linearGradient id="dieSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="58%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>

        <radialGradient id="dieGlow" cx="0.45" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#ffb76a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#bf5700" stopOpacity="0" />
        </radialGradient>

        <pattern
          id="dieMetalH"
          x="0"
          y="0"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <rect width="4" height="4" fill="transparent" />
          <line
            x1="0"
            y1="2"
            x2="4"
            y2="2"
            stroke="#ffffff"
            strokeWidth="0.35"
            opacity="0.2"
          />
        </pattern>
        <pattern
          id="dieMetalV"
          x="0"
          y="0"
          width="3"
          height="3"
          patternUnits="userSpaceOnUse"
        >
          <rect width="3" height="3" fill="transparent" />
          <line
            x1="1.5"
            y1="0"
            x2="1.5"
            y2="3"
            stroke="#ffffff"
            strokeWidth="0.3"
            opacity="0.18"
          />
        </pattern>
      </defs>

      <ellipse cx="280" cy="150" rx="280" ry="140" fill="url(#dieGlow)" />

      <g>
        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="url(#dieFace)"
        />
        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="url(#dieMetalH)"
        />
        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="url(#dieMetalV)"
        />

        <g opacity="0.35">
          <rect
            x="92"
            y="67"
            width="182"
            height="90"
            fill="#ffffff"
            opacity="0.12"
          />
          <rect
            x="286"
            y="67"
            width="182"
            height="90"
            fill="#ffffff"
            opacity="0.12"
          />
          <rect
            x="92"
            y="167"
            width="120"
            height="86"
            fill="#ffffff"
            opacity="0.14"
          />
          <rect
            x="220"
            y="167"
            width="120"
            height="86"
            fill="#ffffff"
            opacity="0.14"
          />
          <rect
            x="348"
            y="167"
            width="120"
            height="86"
            fill="#ffffff"
            opacity="0.14"
          />
        </g>

        <g stroke="#ffffff" strokeWidth="0.35" opacity="0.45">
          <line x1="92" y1="178" x2="212" y2="178" />
          <line x1="92" y1="189" x2="212" y2="189" />
          <line x1="92" y1="200" x2="212" y2="200" />
          <line x1="92" y1="211" x2="212" y2="211" />
          <line x1="92" y1="222" x2="212" y2="222" />
          <line x1="92" y1="233" x2="212" y2="233" />
          <line x1="92" y1="244" x2="212" y2="244" />
          <line x1="220" y1="178" x2="340" y2="178" />
          <line x1="220" y1="189" x2="340" y2="189" />
          <line x1="220" y1="200" x2="340" y2="200" />
          <line x1="220" y1="211" x2="340" y2="211" />
          <line x1="220" y1="222" x2="340" y2="222" />
          <line x1="220" y1="233" x2="340" y2="233" />
          <line x1="220" y1="244" x2="340" y2="244" />
          <line x1="348" y1="178" x2="468" y2="178" />
          <line x1="348" y1="189" x2="468" y2="189" />
          <line x1="348" y1="200" x2="468" y2="200" />
          <line x1="348" y1="211" x2="468" y2="211" />
          <line x1="348" y1="222" x2="468" y2="222" />
          <line x1="348" y1="233" x2="468" y2="233" />
          <line x1="348" y1="244" x2="468" y2="244" />
        </g>

        <g stroke="#ffffff" strokeWidth="0.3" opacity="0.5" fill="none">
          <rect x="98" y="73" width="42" height="28" />
          <rect x="142" y="73" width="42" height="28" />
          <rect x="186" y="73" width="42" height="28" />
          <rect x="230" y="73" width="42" height="28" />
          <rect x="98" y="103" width="42" height="28" />
          <rect x="142" y="103" width="42" height="28" />
          <rect x="186" y="103" width="42" height="28" />
          <rect x="230" y="103" width="42" height="28" />
          <rect x="98" y="133" width="42" height="24" />
          <rect x="142" y="133" width="42" height="24" />
          <rect x="186" y="133" width="42" height="24" />
          <rect x="230" y="133" width="42" height="24" />
          <rect x="292" y="73" width="42" height="28" />
          <rect x="336" y="73" width="42" height="28" />
          <rect x="380" y="73" width="42" height="28" />
          <rect x="424" y="73" width="42" height="28" />
          <rect x="292" y="103" width="42" height="28" />
          <rect x="336" y="103" width="42" height="28" />
          <rect x="380" y="103" width="42" height="28" />
          <rect x="424" y="103" width="42" height="28" />
          <rect x="292" y="133" width="42" height="24" />
          <rect x="336" y="133" width="42" height="24" />
          <rect x="380" y="133" width="42" height="24" />
          <rect x="424" y="133" width="42" height="24" />
        </g>

        <g opacity="0.5">
          <rect x="107" y="82" width="10" height="12" fill="#ffffff" />
          <rect x="152" y="112" width="8" height="10" fill="#ffffff" />
          <rect x="195" y="88" width="12" height="8" fill="#ffffff" />
          <rect x="240" y="138" width="9" height="11" fill="#ffffff" />
          <rect x="300" y="112" width="11" height="8" fill="#ffffff" />
          <rect x="345" y="80" width="8" height="12" fill="#ffffff" />
          <rect x="388" y="138" width="14" height="7" fill="#ffffff" />
          <rect x="430" y="115" width="8" height="10" fill="#ffffff" />
        </g>

        <rect
          x="80"
          y="158"
          width="400"
          height="5"
          fill="#000000"
          opacity="0.2"
        />
        <rect
          x="80"
          y="159"
          width="400"
          height="1.5"
          fill="#ffffff"
          opacity="0.45"
        />

        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="url(#dieSheen)"
          opacity="0.55"
        />

        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.85"
          opacity="0.55"
        />
        <rect
          x="81"
          y="56"
          width="398"
          height="208"
          rx="2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.35"
          opacity="0.25"
        />

        <text
          x="280"
          y="162"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="5"
          fontWeight="500"
          fill="#ffffff"
          opacity="0.65"
          letterSpacing="1"
        >
          LHS · 01
        </text>
      </g>
    </svg>
  );
}
