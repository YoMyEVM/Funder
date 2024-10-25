import projectsVaultList from '@vaultLists/projects'
import { NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(projectsVaultList, { status: 200 })
}
