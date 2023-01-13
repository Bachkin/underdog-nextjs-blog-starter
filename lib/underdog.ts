import { UNDERDOG_METADATA_URL } from "./constants"

export const metadataImageUrl = (mintAddress: string) =>
  `${UNDERDOG_METADATA_URL}/${mintAddress}/image.png`
