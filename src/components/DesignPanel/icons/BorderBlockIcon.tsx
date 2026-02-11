interface BorderBlockIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function BorderBlockIcon({ size = 16, className, ...props }: BorderBlockIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 14.5H1V9.5H15V14.5ZM2.5 13H13.5V11H2.5V13ZM15 8.5H1V4.5H15V8.5ZM2.5 7H13.5V6H2.5V7ZM15 3.5H1V2H15V3.5Z" />
    </svg>
  );
}
