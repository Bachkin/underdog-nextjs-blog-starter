import { UNDERDOG_API_KEY, UNDERDOG_API_URL } from "@/lib/constants"
import { metadataImageUrl } from "@/lib/underdog"
import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const response = await axios.get(
        `${UNDERDOG_API_URL}/v1/nfts?ownerAddress=${req.query.ownerAddress}&collectionAddress=${req.query.collectionAddress}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UNDERDOG_API_KEY}`,
          },
        }
      )

      res.status(200).json(response.data)
    }

    if (req.method === "POST") {
      const response = await axios.post(
        `${UNDERDOG_API_URL}/v1/nfts`,
        {
          name: req.body.name,
          description: req.body.description,
          image: metadataImageUrl(req.body.collectionAddress),
          collectionAddress: req.body.collectionAddress,
          ownerAddress: req.body.ownerAddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${UNDERDOG_API_KEY}`,
          },
        }
      )

      res.status(200).json(response.data)
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
