import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal, WalletIcon } from "@solana/wallet-adapter-react-ui"

import { Button, ButtonProps } from "../Button"
import { ConnectedWalletDropdown } from "./ConnectedWalletDropdown"

type ConnectWalletButtonProps = ButtonProps

export function ConnectWalletButton({
  children,
  type,
  ...buttonProps
}: ConnectWalletButtonProps) {
  const { wallet, connect, publicKey } = useWallet()
  const { setVisible } = useWalletModal()

  if (!wallet) {
    return (
      <Button type={type} onClick={() => setVisible(true)} {...buttonProps}>
        {children || "Select a Wallet"}
      </Button>
    )
  }

  if (!publicKey) {
    return (
      <Button type={type} onClick={connect} {...buttonProps}>
        <div className="flex items-center space-x-2">
          <WalletIcon wallet={wallet} className="h-5 w-5" />
          <span>Connect Wallet</span>
        </div>
      </Button>
    )
  }

  return <ConnectedWalletDropdown type={type} />
}
