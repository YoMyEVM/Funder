import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json({ vaultLists: ['default', 'meme','desci','rwa','rehab','refi','projects','opensource','nsfw','nfts','ethdenver','creators','causes','artists'] }, { status: 200 })
}
