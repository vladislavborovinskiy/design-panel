interface BorderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function BorderIcon({ size = 16, className, ...props }: BorderIconProps) {
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
      <path d="M3.60938 13.25H4.00977V14.75H2.10938V13H3.60938V13.25ZM7.46094 14.75H5.16016V13.25H7.46094V14.75ZM10.9121 14.75H8.61133V13.25H10.9121V14.75ZM13.9619 14.75H12.0615V13.25H12.4619V13H13.9619V14.75ZM3.60938 12H2.10938V10H3.60938V12ZM13.9629 12H12.4629V10H13.9629V12ZM3.60938 9H2.10938V7H3.60938V9ZM13.9629 9H12.4629V7H13.9629V9ZM15 6H1V2H15V6ZM2.5 4.5H13.5V3.5H2.5V4.5Z" />
    </svg>
  );
}
