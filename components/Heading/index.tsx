import clsx from "clsx"
import { useRef } from "react"
import { Anchor } from "../Anchor"

export type HeadingProps = {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  id?: string
  tag?: string
  label?: string
  anchor?: boolean
}

export function Heading({
  level = 2,
  className,
  children,
  id,
  tag,
  label,
  anchor = true,
  ...props
}: HeadingProps) {
  const Component: any = `h${level}`
  const ref = useRef()

  return (
    <Component
      ref={ref}
      id={anchor ? id : undefined}
      className={clsx(
        tag || label ? "mt-2 scroll-mt-32" : "scroll-mt-24",
        className
      )}
      {...props}
    >
      {anchor && id ? <Anchor id={id}>{children}</Anchor> : children}
    </Component>
  )
}
