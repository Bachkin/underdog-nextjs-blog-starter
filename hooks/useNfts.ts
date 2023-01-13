import { Nft } from "@/types"
import { useWallet } from "@solana/wallet-adapter-react"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useToggle } from "./useToggle"

export const useNfts = (collectionAddress: string) => {
  const { publicKey, connecting } = useWallet()
  const [nfts, setNfts] = useState<Nft[]>()
  const [loading, toggleLoading] = useToggle()

  const getNfts = useCallback(async () => {
    const res = await axios.get(
      `/api/nfts?ownerAddress=${publicKey?.toString()}&collectionAddress=${collectionAddress}`
    )
    setNfts(res.data.results)
  }, [publicKey, collectionAddress])

  useEffect(() => {
    if (publicKey && collectionAddress) {
      toggleLoading()
      getNfts().then(toggleLoading)
    }
  }, [collectionAddress, publicKey, getNfts, toggleLoading])

  return { nfts, loading: connecting || loading, refreshNfts: getNfts }
}
