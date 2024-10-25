import opensourceVaultList from '@vaultLists/opensource'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(opensourceVaultList, { status: 200 })
}
