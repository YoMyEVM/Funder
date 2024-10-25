import rwaVaultList from '@vaultLists/rwa'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(rwaVaultList, { status: 200 })
}
