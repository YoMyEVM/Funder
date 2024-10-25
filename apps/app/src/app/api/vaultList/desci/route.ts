import desciVaultList from '@vaultLists/desci'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(desciVaultList, { status: 200 })
}
