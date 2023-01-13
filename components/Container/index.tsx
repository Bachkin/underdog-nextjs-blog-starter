import clsx from "clsx"
import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  const containerClassName = clsx("w-full px-4 mx-auto max-w-7xl", className)
  return <div className={containerClassName}>{children}</div>
}
