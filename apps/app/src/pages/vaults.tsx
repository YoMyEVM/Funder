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
  const [selectedFundType, setSelectedFundType] = useState('Yield Lotto')

  const handleFundFilterChange = (fundType: string) => {
    setSelectedFundType(fundType)
  }

  return (
    <Layout className='gap-6 lg:gap-8'>
      {/* Secondary Fund Filters (the rest of the buttons) */}
      <div className="flex justify-center space-x-7 my-1"> {/* Adjusted spacing */}
        {['Culture/Meme', 'Projects', 'NFTs' , 'Artists' , 'Yield Lotto', 'RWA', 'NSFW', 'Creators' , 'Token Rehab'].map((fundType) => (
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
      <div className="flex justify-center space-x-7 my-0"> {/* Adjusted spacing */}
        {['Eth Denver', 'Open Source', 'Causes/For Good', 'ReFinance','DeScience' ].map((fundType) => (
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
      {selectedFundType === 'Yield Lotto' && <VaultsDisplay />}
      {selectedFundType === 'Open Source' && <VaultsDisplay />}
      {selectedFundType === 'Projects' && <div>Projects Vaults</div>}
      {selectedFundType === 'NFTs' && <div>NFTs Vaults</div>}
      {selectedFundType === 'Culture/Meme' && <div>Meme</div>}
      {selectedFundType === 'Causes' && <div>Causes Vaults</div>}
      {selectedFundType === 'Creators' && <div>Creator Vaults </div>}
      {selectedFundType === 'Artists' && <div>Artists Vaults</div>}
      {selectedFundType === 'NSFW' && <div>NSFW Vaults</div>}
      {selectedFundType === 'Rehab' && <div>Rehab</div>}
      {selectedFundType === 'DeScience' && <div>DeScience</div>}
      {selectedFundType === 'Eth Denver' && <div>Eth Denver</div>}
      {selectedFundType === 'DeScience' && <div>DeScience</div>}
      {selectedFundType === 'ReFinance' && <div>ReFinance</div>}
    </Layout>
  )
}
