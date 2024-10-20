import { SECONDS_PER_DAY } from '@shared/utilities'
import { GetStaticProps } from 'next'
import { getMessages } from 'src/utils'
import { Layout } from '@components/Layout'
import { VaultFilters } from '@components/Vault/VaultFilters'
import { VaultsDisplay } from '@components/Vault/VaultsDisplay'
import { useState } from 'react'
import classNames from 'classnames'

interface VaultsPageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<VaultsPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale)

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function VaultsPage() {
  // Track the selected fund type
  const [selectedFundType, setSelectedFundType] = useState('Lotto') // Default to "Lotto"

  const handleFundFilterChange = (fundType: string) => {
    setSelectedFundType(fundType)
  }

  return (
    <Layout className='gap-6 lg:gap-8'>
      
      {/* Fund Filters */}
      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={() => handleFundFilterChange('Lotto')}
          className={classNames(
            selectedFundType === 'Lotto'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Lotto
        </button>
        <button
          onClick={() => handleFundFilterChange('Projects')}
          className={classNames(
            selectedFundType === 'Projects'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Projects
        </button>
        <button
          onClick={() => handleFundFilterChange('NFTs')}
          className={classNames(
            selectedFundType === 'NFTs'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          NFTs
        </button>
        <button
          onClick={() => handleFundFilterChange('Open Source')}
          className={classNames(
            selectedFundType === 'Open Source'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Open Source
        </button>
        <button
          onClick={() => handleFundFilterChange('Causes')}
          className={classNames(
            selectedFundType === 'Causes'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Causes
        </button>
        <button
          onClick={() => handleFundFilterChange('Community Tokens')}
          className={classNames(
            selectedFundType === 'Community Tokens'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Community Tokens
        </button>
        <button
          onClick={() => handleFundFilterChange('Artists')}
          className={classNames(
            selectedFundType === 'Artists'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Artists
        </button>
        <button
          onClick={() => handleFundFilterChange('Marketing')}
          className={classNames(
            selectedFundType === 'Marketing'
              ? 'bg-purple-500 text-white border-2 border-transparent rounded-full px-4 py-2'
              : 'bg-transparent text-teal-400 border-2 border-teal-400 rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
          )}
        >
          Marketing
        </button>
      </div>

      {/* Existing Vault Filters */}
      <VaultFilters />

      {/* Conditionally Display Vaults */}
      {selectedFundType === 'Lotto' && <VaultsDisplay />} {/* Lotto content (existing vault content) */}
      {selectedFundType === 'Projects' && <div>Display Projects Vaults</div>} {/* Placeholder for Projects */}
      {selectedFundType === 'NFTs' && <div>Display NFTs Vaults</div>}
      {selectedFundType === 'Open Source' && <div>Display Open Source Vaults</div>}
      {selectedFundType === 'Causes' && <div>Display Causes Vaults</div>}
      {selectedFundType === 'Community Tokens' && <div>Display Community Tokens Vaults</div>}
      {selectedFundType === 'Artists' && <div>Display Artists Vaults</div>}
      {selectedFundType === 'Marketing' && <div>Display Marketing Vaults</div>}
    </Layout>
  )
}
