import clsx from "clsx"

export interface ProseProps extends React.HTMLAttributes<HTMLElement> {
  as?: any
  className?: string
}

export function Prose({
  as: Component = "div",
  className,
  ...props
}: ProseProps) {
  return (
    <Component className={clsx(className, "prose prose-invert")} {...props} />
  )
}
