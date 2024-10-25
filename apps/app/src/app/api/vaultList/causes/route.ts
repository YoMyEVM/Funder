import causesVaultList from '@vaultLists/causes'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(causesVaultList, { status: 200 })
}
