export const generateSolScanTokenUrl = (address: string) => {
  return `https://solscan.io/token/${address}`
}

export const viewTokenOnSolScan = (address: string) => {
  window.open(generateSolScanTokenUrl(address))
}

export const shortenAddress = (address?: string, chars = 4) => {
  return `${address?.slice(0, chars)}...${address?.slice(-chars)}`
}
