import nsfwVaultList from '@vaultLists/nsfw'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(nsfwVaultList, { status: 200 })
}
