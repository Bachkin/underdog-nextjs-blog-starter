import { APP_NAME, LOGO, LOGO_ICON } from "@/lib/constants"

export function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h1 className="logo inline">
      <strong>
        {icon ? (
          <img
            className="mx-auto w-9"
            alt={APP_NAME}
            title={APP_NAME}
            src={LOGO_ICON}
          />
        ) : (
          <img
            className={small ? "h-4 w-auto" : "h-16 w-auto"}
            alt={APP_NAME}
            title={APP_NAME}
            src={LOGO}
          />
        )}
      </strong>
    </h1>
  )
}
