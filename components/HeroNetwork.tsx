// Decorative SVG network: 10 nodes joined by faint gold lines,
// each node and line independently pulsing. Pure CSS animations,
// no JS, GPU-friendly opacity tweens.

const NODES: { cx: number; cy: number; r: number; delay: string }[] = [
  { cx: 80,   cy: 120, r: 4, delay: "0s"   },
  { cx: 320,  cy: 70,  r: 3, delay: "0.6s" },
  { cx: 580,  cy: 160, r: 5, delay: "1.2s" },
  { cx: 880,  cy: 90,  r: 3, delay: "0.3s" },
  { cx: 1180, cy: 130, r: 4, delay: "1.5s" },
  { cx: 1360, cy: 60,  r: 3, delay: "0.9s" },
  { cx: 200,  cy: 360, r: 4, delay: "1.8s" },
  { cx: 500,  cy: 420, r: 3, delay: "0.4s" },
  { cx: 820,  cy: 380, r: 5, delay: "1.1s" },
  { cx: 1140, cy: 440, r: 3, delay: "1.7s" },
  { cx: 1320, cy: 360, r: 4, delay: "0.7s" }
];

const LINES: [number, number, string][] = [
  [0, 1, "0s"],   [1, 2, "0.4s"], [2, 3, "0.9s"], [3, 4, "1.3s"], [4, 5, "1.7s"],
  [0, 6, "0.2s"], [1, 7, "0.8s"], [2, 8, "0.5s"], [3, 9, "1.1s"], [4, 10, "1.6s"],
  [6, 7, "0.6s"], [7, 8, "1.0s"], [8, 9, "0.3s"], [9, 10, "1.4s"]
];

export default function HeroNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 540"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#C9A05B" strokeOpacity="0.18" strokeWidth="1" fill="none">
        {LINES.map(([a, b, delay], i) => {
          const A = NODES[a];
          const B = NODES[b];
          return (
            <line
              key={`l-${i}`}
              x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy}
              className="line-pulse"
              style={{ animationDelay: delay }}
            />
          );
        })}
      </g>
      <g>
        {NODES.map((n, i) => (
          <g key={`n-${i}`} className="node-pulse" style={{ animationDelay: n.delay, transformOrigin: `${n.cx}px ${n.cy}px` }}>
            <circle cx={n.cx} cy={n.cy} r={n.r * 4} fill="#C9A05B" fillOpacity="0.08" />
            <circle cx={n.cx} cy={n.cy} r={n.r}     fill="#E3C580" fillOpacity="0.9" />
          </g>
        ))}
      </g>
    </svg>
  );
}
