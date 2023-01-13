import Link from "next/link"
import { ConnectWalletButton } from "../ConnectWalletButton"
import { Logo } from "../Logo"

export function Navbar() {
  return (
    <nav className="mx-auto flex w-full items-center justify-center">
      <div className="flex-1">
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>

      <ConnectWalletButton type="primary" />
    </nav>
  )
}
