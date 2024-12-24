"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 600"
        className="w-[1000px] h-[500px]"
      >
        <rect width="1200" height="600" fill="#000000" />

        <g>
          {[...Array(15)].map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M0 ${30 + i * 40} L1200 ${30 + i * 40}`}
              stroke="#3B82F6"
              strokeWidth="0.5"
              opacity="0.35"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.45;0.25"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
            </path>
          ))}
        </g>

        <g>
          {[...Array(15)].map((_, i) => (
            <path
              key={`v-${i}`}
              d={`M${60 + i * 80} 0 L${60 + i * 80} 600`}
              stroke="#3B82F6"
              strokeWidth="0.5"
              opacity="0.35"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.45;0.25"
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
            </path>
          ))}
        </g>

        <circle cx="600" cy="300" r="200" fill="url(#glow)" opacity="0.1">
          <animate
            attributeName="r"
            values="200;220;200"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <g transform="translate(375, 180)">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }}>
                <animate
                  attributeName="stop-color"
                  values="#3B82F6;#60A5FA;#3B82F6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" style={{ stopColor: "#60A5FA" }}>
                <animate
                  attributeName="stop-color"
                  values="#60A5FA;#3B82F6;#60A5FA"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <text
            x="0"
            y="100"
            fontFamily="Arial"
            fontSize="160"
            fontWeight="bold"
            fill="url(#textGradient)"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="1s"
              fill="freeze"
            />
            AE
          </text>

          <text
            x="75"
            y="180"
            fontFamily="Arial"
            fontSize="54"
            fontWeight="light"
            fill="#ffffff"
            letterSpacing="5"
          >
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              dur="1s"
              fill="freeze"
              begin="0.5s"
            />
            TECH SOLUTIONS
          </text>
        </g>

        <g>
          {[
            { cx: 300, cy: 300, delay: "0s" },
            { cx: 900, cy: 300, delay: "1s" },
          ].map((dot, index) => (
            <circle key={index} cx={dot.cx} cy={dot.cy} r="8" fill="#3B82F6">
              <animate
                attributeName="r"
                values="5;9;5"
                dur="2s"
                repeatCount="indefinite"
                begin={dot.delay}
              />
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2s"
                repeatCount="indefinite"
                begin={dot.delay}
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Loader;
