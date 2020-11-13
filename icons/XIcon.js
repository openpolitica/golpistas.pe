export default function XIcon(props) {
  return (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <g
        opacity={1}
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.5 7.5l-15 15M7.5 7.5l15 15" />
      </g>
    </svg>
  );
}
