import nftsVaultList from '@vaultLists/nfts'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(nftsVaultList, { status: 200 })
}
