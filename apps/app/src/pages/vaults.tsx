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
        {['Yield Lotto', 'Projects', 'NFTs', 'Open Source', 'Causes', 'Community Tokens', 'Artists', 'Marketing'].map((fundType) => (
          <button
            key={fundType}
            onClick={() => handleFundFilterChange(fundType)}
            className={classNames(
              selectedFundType === fundType
                ? 'bg-pt-pink-dark text-white border-2 border-transparent rounded-full px-4 py-2'
                : 'bg-transparent text-pt-teal-light border-2 border-pt-teal-light rounded-full px-4 py-2 hover:bg-teal-100 hover:bg-opacity-10'
            )}
          >
            {fundType}
          </button>
        ))}
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
