import clsx from "clsx"
import { forwardRef, MouseEventHandler, ReactNode } from "react"

const typeClassNames = {
  primary:
    "text-white bg-primary border-primary hover:bg-primary-dark disabled:bg-primary hover:border-primary-dark disabled:border-primary",
  secondary:
    "text-primary border-primary text-primary-dark hover:bg-primary/25",
  link: "border-transparent hover:opacity-75",
  default: "text-light bg-dark-light border-dark-400",
}

export type ButtonType = keyof typeof typeClassNames

export type ButtonProps = {
  type?: ButtonType
  children?: ReactNode
  htmlType?: "submit" | "button"
  className?: string
  loading?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  block?: boolean
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      type = "default",
      children,
      htmlType = "button",
      className,
      loading,
      disabled,
      onClick,
      block,
    },
    ref
  ) {
    const typeClassName = typeClassNames[type]
    const disabledClassName = "opacity-50 cursor-not-allowed"
    const blockClassName = "w-full inline-block"

    const buttonClassName = clsx(
      "inline-flex items-center justify-center focus:outline-none rounded-t-md rounded-br-md border space-x-2 py-2 px-3",
      typeClassName,
      disabled ? disabledClassName : "",
      block ? blockClassName : "",
      className
    )

    return (
      <button
        ref={ref}
        type={htmlType}
        className={buttonClassName}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
)
