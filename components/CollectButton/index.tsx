import { useNfts } from "@/hooks/useNfts"
import { viewTokenOnSolScan } from "@/lib/web3"
import { Entry } from "@/types"
import { useWallet } from "@solana/wallet-adapter-react"
import axios from "axios"
import { Button, ButtonProps } from "../Button"
import { ConnectWalletButton } from "../ConnectWalletButton"
import { HiCheck } from "react-icons/hi2"
import { useToggle } from "@/hooks/useToggle"

type CollectButtonProps = {
  entry: Entry
} & Pick<ButtonProps, "block">

export function CollectButton({ entry, ...buttonProps }: CollectButtonProps) {
  const { publicKey } = useWallet()
  const { nfts, loading, refreshNfts } = useNfts(entry.collectionAddress)
  const [collecting, toggleCollecting] = useToggle()

  if (!publicKey) {
    return (
      <ConnectWalletButton block type="secondary">
        Connect a Wallet to Collect
      </ConnectWalletButton>
    )
  }

  if (!nfts || loading) {
    return (
      <Button block type="secondary" disabled>
        <span>Loading...</span>
      </Button>
    )
  }

  if (nfts && nfts.length > 0) {
    return (
      <Button
        block
        type="secondary"
        onClick={() => viewTokenOnSolScan(nfts[0].mintAddress)}
        className="space-x-1"
      >
        <HiCheck />
        <span>Collected</span>
      </Button>
    )
  }

  const handleCollect = async () => {
    if (publicKey) {
      toggleCollecting()
      await axios.post("/api/nfts", {
        name: entry.title,
        description: entry.description,
        collectionAddress: entry.collectionAddress,
        ownerAddress: publicKey?.toString(),
      })
      await refreshNfts()
      toggleCollecting()
    }
  }

  return (
    <Button
      type="primary"
      onClick={handleCollect}
      {...buttonProps}
      disabled={collecting}
    >
      {collecting ? "Collecting..." : "Collect"}
    </Button>
  )
}
