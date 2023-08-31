import { VaultList } from '@shared/types'
import { JSONSchemaType } from 'ajv'
import { Address } from 'viem'

/**
 * Network IDs
 */
export enum NETWORK {
  'mainnet' = 1,
  'goerli' = 5,
  'sepolia' = 11155111,
  'bsc' = 56,
  'bsc-testnet' = 97,
  'xdai' = 100,
  'polygon' = 137,
  'mumbai' = 80001,
  'optimism' = 10,
  'optimism-goerli' = 420,
  'avalanche' = 43114,
  'fuji' = 43113,
  'celo' = 42220,
  'celo-testnet' = 44787,
  'arbitrum' = 42161,
  'arbitrum-goerli' = 421613
}
export type NETWORK_NAME = keyof typeof NETWORK

/**
 * POOL token addresses
 */
export const POOL_TOKEN_ADDRESSES = {
  [NETWORK.mainnet]: '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e',
  [NETWORK.polygon]: '0x25788a1a171ec66Da6502f9975a15B609fF54CF6',
  [NETWORK.optimism]: '0x395ae52bb17aef68c2888d941736a71dc6d4e125',
  [NETWORK['optimism-goerli']]: '0x20524C0a56ec85A1aF9b0989202C5bDc1B649Def'
} as const

/**
 * USDC token addresses
 *
 * NOTE: All addresses are lowercase
 */
export const USDC_TOKEN_ADDRESSES: { [chainId: number]: Lowercase<Address> } = {
  [NETWORK.mainnet]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [NETWORK.polygon]: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  [NETWORK.optimism]: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
  [NETWORK['optimism-goerli']]: '0x2c75541abd0e0025ca13d0dd5ee5c9a697dd3802'
}

/**
 * Second constants
 */
export const SECONDS_PER_MINUTE = 60
export const SECONDS_PER_HOUR = 3_600
export const SECONDS_PER_DAY = 86_400
export const SECONDS_PER_WEEK = 604_800
export const SECONDS_PER_MONTH = 2_628_000
export const SECONDS_PER_YEAR = 31_536_000

/**
 * Minute constants
 */
export const MINUTES_PER_HOUR = 60
export const MINUTES_PER_DAY = 1_440

/**
 * CoinGecko API URL
 */
export const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'

/**
 * Token Prices API URL
 */
export const TOKEN_PRICES_API_URL = 'https://token-prices.api.cabana.fi'

/**
 * Prize Pools
 */
export const PRIZE_POOLS: {
  chainId: NETWORK
  address: Address
  options: { prizeTokenAddress: Address; drawPeriodInSeconds: number; tierShares: number }
}[] = [
  {
    chainId: NETWORK.optimism,
    address: '0x8CFFFfFa42407DB9DCB974C2C744425c3e58d832',
    options: {
      prizeTokenAddress: '0x395ae52bb17aef68c2888d941736a71dc6d4e125',
      drawPeriodInSeconds: 86_400,
      tierShares: 100
    }
  },
  {
    chainId: NETWORK['optimism-goerli'],
    address: '0xC64bb8Fe4f023B650940D05E79c35454e12A111F',
    options: {
      prizeTokenAddress: '0x20524C0a56ec85A1aF9b0989202C5bDc1B649Def',
      drawPeriodInSeconds: 3_600,
      tierShares: 100
    }
  }
]

/**
 * Prize Pool Graph API URLs
 */
export const PRIZE_POOL_GRAPH_API_URLS = Object.freeze({
  [NETWORK.optimism]:
    'https://api.studio.thegraph.com/query/41211/pt-v5-optimism-prize-pool/v0.0.1',
  [NETWORK['optimism-goerli']]:
    'https://api.studio.thegraph.com/query/41211/pt-v5-op-goerli-prize-pool/v0.0.2'
})

/**
 * TWAB Graph API URLs
 */
export const TWAB_GRAPH_API_URLS = Object.freeze({
  [NETWORK.optimism]:
    'https://api.studio.thegraph.com/query/41211/pt-v5-optimism-twab-controller/v0.0.1',
  [NETWORK['optimism-goerli']]:
    'https://api.studio.thegraph.com/query/41211/pt-v5-op-goerli-twab-control/v0.0.2'
})

/**
 * CoinGecko platform IDs
 */
export const COINGECKO_PLATFORMS = Object.freeze({
  [NETWORK.mainnet]: 'ethereum',
  [NETWORK.bsc]: 'binance-smart-chain',
  [NETWORK.xdai]: 'xdai',
  [NETWORK.polygon]: 'polygon-pos',
  [NETWORK.optimism]: 'optimistic-ethereum',
  [NETWORK.avalanche]: 'avalanche',
  [NETWORK.celo]: 'celo',
  [NETWORK.arbitrum]: 'arbitrum-one'
})
export type COINGECKO_PLATFORM = keyof typeof COINGECKO_PLATFORMS

/**
 * CoinGecko native token IDs
 */
export const COINGECKO_NATIVE_TOKEN_IDS: Record<NETWORK, string> = Object.freeze({
  [NETWORK.mainnet]: 'ethereum',
  [NETWORK.goerli]: 'ethereum',
  [NETWORK.sepolia]: 'ethereum',
  [NETWORK.bsc]: 'binancecoin',
  [NETWORK['bsc-testnet']]: 'binancecoin',
  [NETWORK.xdai]: 'xdai',
  [NETWORK.polygon]: 'matic-network',
  [NETWORK.mumbai]: 'matic-network',
  [NETWORK.optimism]: 'ethereum',
  [NETWORK['optimism-goerli']]: 'ethereum',
  [NETWORK.avalanche]: 'avalanche-2',
  [NETWORK.fuji]: 'avalanche-2',
  [NETWORK.celo]: 'celo',
  [NETWORK['celo-testnet']]: 'celo',
  [NETWORK.arbitrum]: 'ethereum',
  [NETWORK['arbitrum-goerli']]: 'ethereum'
})

/**
 * PoolTogether API URL
 */
export const POOLTOGETHER_API_URL = 'https://pooltogether-api.com'

/**
 * Block explorer mapping
 */
export const BLOCK_EXPLORERS: Record<NETWORK, { name: string; url: string }> = Object.freeze({
  [NETWORK.mainnet]: { name: 'Etherscan', url: 'https://etherscan.io/' },
  [NETWORK.goerli]: { name: 'Etherscan', url: 'https://goerli.etherscan.io/' },
  [NETWORK.sepolia]: { name: 'Etherscan', url: 'https://sepolia.etherscan.io/' },
  [NETWORK.bsc]: { name: 'BscScan', url: 'https://bscscan.com/' },
  [NETWORK['bsc-testnet']]: { name: 'BscScan', url: 'https://testnet.bscscan.com/' },
  [NETWORK.xdai]: { name: 'GnosisScan', url: 'https://gnosisscan.io/' },
  [NETWORK.polygon]: { name: 'PolygonScan', url: 'https://polygonscan.com/' },
  [NETWORK.mumbai]: { name: 'PolygonScan', url: 'https://mumbai.polygonscan.com/' },
  [NETWORK.optimism]: { name: 'Etherscan', url: 'https://optimistic.etherscan.io/' },
  [NETWORK['optimism-goerli']]: { name: 'Etherscan', url: 'https://goerli-optimism.etherscan.io/' },
  [NETWORK.avalanche]: { name: 'Snowtrace', url: 'https://snowtrace.io/' },
  [NETWORK.fuji]: { name: 'Snowtrace', url: 'https://testnet.snowtrace.io/' },
  [NETWORK.celo]: { name: 'CeloScan', url: 'https://celoscan.io/' },
  [NETWORK['celo-testnet']]: { name: 'CeloScan', url: 'https://alfajores.celoscan.io/' },
  [NETWORK.arbitrum]: { name: 'ArbiScan', url: 'https://arbiscan.io/' },
  [NETWORK['arbitrum-goerli']]: { name: 'ArbiScan', url: 'https://goerli.arbiscan.io/' }
})

/**
 * Stablecoin addresses
 *
 * NOTE: All addresses are lowercase
 */
export const STABLECOIN_ADDRESSES: Record<NETWORK, string[]> = {
  [NETWORK.mainnet]: [
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
    '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
    '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd' // GUSD
  ],
  [NETWORK.goerli]: [],
  [NETWORK.sepolia]: [],
  [NETWORK.bsc]: [],
  [NETWORK['bsc-testnet']]: [],
  [NETWORK.xdai]: [],
  [NETWORK.polygon]: [],
  [NETWORK.mumbai]: [],
  [NETWORK.optimism]: [
    '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // USDC
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1' // DAI
  ],
  [NETWORK['optimism-goerli']]: [
    '0x2c75541abd0e0025ca13d0dd5ee5c9a697dd3802', // USDC
    '0x219b8d677ef97a1843ffd76e458dc1c6ec5d13d0', // DAI
    '0xb654cd9f5289873ba3c732e020df5209575e98a8' // GUSD
  ],
  [NETWORK.avalanche]: [],
  [NETWORK.fuji]: [],
  [NETWORK.celo]: [],
  [NETWORK['celo-testnet']]: [],
  [NETWORK.arbitrum]: [],
  [NETWORK['arbitrum-goerli']]: []
}

/**
 * Vault factory addresses
 */
export const VAULT_FACTORY_ADDRESSES: { [chainId: number]: Address } = {
  [NETWORK.optimism]: '0xA469deff6D52C9571d13513e3cd7d94496082d81',
  [NETWORK['optimism-goerli']]: '0x1533eaC4429F088929f0E5e9B57ddBd5Ce747f9F'
}

/**
 * Liquidation pair factory addresses
 */
export const LIQUIDATION_PAIR_FACTORY_ADDRESSES: { [chainId: number]: Address } = {
  [NETWORK.optimism]: '0xa1697E8F6b11D0E2F00d9dC8a5AEae2b2665650a',
  [NETWORK['optimism-goerli']]: '0x9A57732A346ad4d1aFC16dC0A84FE27a7B9426ce'
}

/**
 * Vault list schema
 */
export const VAULT_LIST_SCHEMA: JSONSchemaType<VaultList> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    version: {
      type: 'object',
      properties: {
        major: { type: 'integer' },
        minor: { type: 'integer' },
        patch: { type: 'integer' }
      },
      required: ['major', 'minor', 'patch']
    },
    timestamp: { type: 'string' },
    tokens: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          chainId: { type: 'integer' },
          address: { type: 'string' },
          name: { type: 'string', nullable: true },
          decimals: { type: 'integer', nullable: true },
          symbol: { type: 'string', nullable: true },
          extensions: {
            type: 'object',
            properties: {
              underlyingAsset: {
                type: 'object',
                properties: {
                  address: { type: 'string', nullable: true },
                  symbol: { type: 'string', nullable: true },
                  name: { type: 'string', nullable: true },
                  logoURI: { type: 'string', nullable: true }
                },
                nullable: true
              }
            },
            nullable: true
          },
          tags: { type: 'array', items: { type: 'string' }, nullable: true },
          logoURI: { type: 'string', nullable: true },
          yieldSourceURI: { type: 'string', nullable: true }
        },
        required: ['chainId', 'address']
      }
    },
    keywords: { type: 'array', items: { type: 'string' }, nullable: true },
    tags: { type: 'object', properties: {}, required: [], nullable: true },
    logoURI: { type: 'string', nullable: true }
  },
  required: ['name', 'version', 'timestamp', 'tokens']
}

/**
 * Max uint256 value
 */
export const MAX_UINT_256 = 2n ** 256n - 1n

/**
 * Null Address
 */
export const NULL_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
