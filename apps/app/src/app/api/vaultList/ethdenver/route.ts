import ethdenverVaultList from '@vaultLists/ethdenver'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(ethdenverVaultList, { status: 200 })
}
