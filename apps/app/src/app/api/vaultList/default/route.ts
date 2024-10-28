import defaultVaultList from '@vaultLists/yieldlotto'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(defaultVaultList, { status: 200 })
}
