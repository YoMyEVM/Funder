import artistsVaultList from '@vaultLists/artists'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(artistsVaultList, { status: 200 })
}
