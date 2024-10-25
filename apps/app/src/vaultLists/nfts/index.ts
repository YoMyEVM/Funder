import { VaultList } from '@shared/types'
import { DOMAINS } from '@shared/utilities'
import { arbitrumVaults } from './arbitrum'
import { baseVaults } from './base'
import { gnosisVaults } from './gnosis'
import { mainnetVaults } from './mainnet'
import { optimismVaults } from './optimism'
import { scrollVaults } from './scroll'

const nftsVaultList: VaultList = {
  name: 'NFTs Vault List',
  keywords: [
    'ethereum',
    'optimism',
    'base',
    'arbitrum',
    'scroll',
    'gnosis'
  ],
  version: { major: 2, minor: 15, patch: 3 },
  timestamp: '2024-10-18T18:09:44Z',
  logoURI: `${DOMAINS.app}/favicon.png`,
  tokens: [
    ...mainnetVaults,
    ...optimismVaults,
    ...baseVaults,
    ...arbitrumVaults,
    ...scrollVaults,
    ...gnosisVaults,
  ]
}

export default nftsVaultList
