import { shortenAddress } from "@/lib/web3"
import { Menu } from "@headlessui/react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletIcon } from "@solana/wallet-adapter-react-ui"
import clsx from "clsx"

import { Button, ButtonProps } from "../../Button"

export function ConnectedWalletDropdown({ type }: ButtonProps) {
  const { publicKey, wallet, disconnect } = useWallet()

  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <Menu.Button as={Button} type={type}>
        <div className="flex items-center space-x-2">
          <WalletIcon wallet={wallet} className="h-5 w-5" />
          <span>{shortenAddress(publicKey!.toString())}</span>
        </div>
      </Menu.Button>

      <Menu.Items className="border-dark-accent bg-dark absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md border focus:outline-none">
        <div className="z-30 px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={clsx(
                  active && "hover:bg-dark",
                  "text-light group flex w-full items-center rounded-md px-2 py-2 text-sm"
                )}
                onClick={disconnect}
              >
                Disconnect
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}
