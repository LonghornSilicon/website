import { cn } from "@/lib/cn";

type ChipDieProps = {
  className?: string;
};

export function ChipDie({ className }: ChipDieProps) {
  return (
    <svg
      className={cn(
        "h-auto w-[min(560px,85vw)] [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.5))]",
        className,
      )}
      viewBox="0 0 560 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="iridescent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4a84a" />
          <stop offset="18%" stopColor="#8fa862" />
          <stop offset="35%" stopColor="#5aa88f" />
          <stop offset="52%" stopColor="#6a8fb5" />
          <stop offset="68%" stopColor="#a77fb0" />
          <stop offset="82%" stopColor="#c27a6a" />
          <stop offset="100%" stopColor="#b8954a" />
        </linearGradient>

        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>

        <radialGradient id="warmGlow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ffb76a" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#bf5700" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        <pattern
          id="metal1"
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
            stroke="#000"
            strokeWidth="0.25"
            opacity="0.35"
          />
        </pattern>
        <pattern
          id="metal2"
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
            stroke="#000"
            strokeWidth="0.25"
            opacity="0.3"
          />
        </pattern>
      </defs>

      <ellipse cx="280" cy="150" rx="280" ry="140" fill="url(#warmGlow)" />

      <g>
        <rect x="80" y="55" width="400" height="210" rx="3" fill="url(#iridescent)" />
        <rect x="80" y="55" width="400" height="210" rx="3" fill="url(#metal1)" />
        <rect x="80" y="55" width="400" height="210" rx="3" fill="url(#metal2)" />

        <g opacity="0.55">
          <rect x="92" y="67" width="182" height="90" fill="#000" opacity="0.18" />
          <rect x="286" y="67" width="182" height="90" fill="#000" opacity="0.18" />
          <rect x="92" y="167" width="120" height="86" fill="#000" opacity="0.22" />
          <rect x="220" y="167" width="120" height="86" fill="#000" opacity="0.22" />
          <rect x="348" y="167" width="120" height="86" fill="#000" opacity="0.22" />
        </g>

        <g stroke="#2a1a00" strokeWidth="0.3" opacity="0.5">
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

        <g
          stroke="#1a0f00"
          strokeWidth="0.3"
          opacity="0.55"
          fill="none"
        >
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

        <g opacity="0.55">
          <rect x="107" y="82" width="10" height="12" fill="#ffd56a" />
          <rect x="152" y="112" width="8" height="10" fill="#ffb76a" />
          <rect x="195" y="88" width="12" height="8" fill="#ff9a3c" />
          <rect x="240" y="138" width="9" height="11" fill="#ffd56a" />
          <rect x="300" y="112" width="11" height="8" fill="#ff9a3c" />
          <rect x="345" y="80" width="8" height="12" fill="#ffb76a" />
          <rect x="388" y="138" width="14" height="7" fill="#ffd56a" />
          <rect x="430" y="115" width="8" height="10" fill="#ff7a1a" />
        </g>

        <rect x="80" y="158" width="400" height="5" fill="#000" opacity="0.35" />
        <rect x="80" y="159" width="400" height="1.5" fill="#ffcc88" opacity="0.6" />

        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="url(#sheen)"
          opacity="0.6"
        />

        <rect
          x="80"
          y="55"
          width="400"
          height="210"
          rx="3"
          fill="none"
          stroke="#1a0f00"
          strokeWidth="0.8"
          opacity="0.8"
        />
        <rect
          x="81"
          y="56"
          width="398"
          height="208"
          rx="2"
          fill="none"
          stroke="#ffe4a0"
          strokeWidth="0.4"
          opacity="0.35"
        />

        <text
          x="280"
          y="162"
          textAnchor="middle"
          fontFamily='"JetBrains Mono", ui-monospace, monospace'
          fontSize="5"
          fontWeight="500"
          fill="#1a0f00"
          opacity="0.55"
          letterSpacing="1"
        >
          LHS · 01
        </text>
      </g>
    </svg>
  );
}
