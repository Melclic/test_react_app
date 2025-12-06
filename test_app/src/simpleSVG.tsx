type SimpleSvgProps = {
  width?: number;
  height?: number;
};

export function SimpleSVG({
  width = 200,
  height = 200
}: SimpleSvgProps ) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      style={{ border: "1px solid #ccc" }}
    >
      {/* Background rectangle */}
      <rect x="0" y="0" width="200" height="200" fill="#f5f5f5" />

      {/* Blue circle */}
      <circle cx="100" cy="80" r="40" fill="#4a90e2" />

      {/* Red rectangle */}
      <rect x="50" y="120" width="100" height="40" fill="#e94e77" />

      {/* Label text */}
      <text
        x="100"
        y="190"
        textAnchor="middle"
        fontSize="14"
        fill="#333"
      >
        Simple SVG in React
      </text>
    </svg>
  );
};