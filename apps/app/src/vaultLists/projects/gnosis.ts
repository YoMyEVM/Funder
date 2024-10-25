import { VaultList } from '@shared/types'
import { NETWORK } from '@shared/utilities'

export const gnosisVaults: VaultList['tokens'] = [
  {
    chainId: NETWORK.gnosis,
    address: '0x813c1fa57ce3f5e8d622925f6062b34fe89e24b5',
    name: 'Prize 747 Airlines',
    decimals: 18,
    symbol: 'przCRASH',
    extensions: {
      underlyingAsset: {
        address: '0x621E87AF48115122Cd96209F820fE0445C2ea90e',
        symbol: 'CRASH',
        name: '747 Airlines'
      }
    }
  }
]
