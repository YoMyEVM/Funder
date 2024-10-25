import creatorsVaultList from '@vaultLists/creators'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(creatorsVaultList, { status: 200 })
}
