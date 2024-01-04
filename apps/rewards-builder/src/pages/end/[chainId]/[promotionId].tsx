import { useRouter } from 'next/router'
import { SupportedNetwork } from 'src/types'
import { Layout } from '@components/Layout'
import { StepInfo } from '@components/StepInfo'
import { SUPPORTED_NETWORKS } from '@constants/config'

export default function EndPage() {
  const router = useRouter()

  if (router.isReady) {
    const chainId =
      !!router.query.chainId &&
      typeof router.query.chainId === 'string' &&
      SUPPORTED_NETWORKS.includes(parseInt(router.query.chainId))
        ? (parseInt(router.query.chainId) as SupportedNetwork)
        : undefined

    const promotionId =
      !!router.query.promotionId &&
      typeof router.query.promotionId === 'string' &&
      !isNaN(parseInt(router.query.promotionId))
        ? parseInt(router.query.promotionId)
        : undefined

    if (!!chainId && promotionId !== undefined) {
      return (
        <Layout isSidebarActive={true}>
          <div className='w-full flex flex-col grow gap-8 lg:flex-row lg:gap-4'>
            <div className='flex flex-col shrink-0 gap-8 items-center p-6 bg-pt-transparent lg:w-[27rem] lg:py-0 lg:pl-2 lg:pr-6 lg:bg-transparent'>
              <StepInfo
                step={0}
                stepInfo={[
                  {
                    title: 'End your promotion early',
                    info: `Any remaining tokens will be returned to an address of your choosing.`
                  }
                ]}
                setStep={() => {}}
                className='grow items-center justify-center lg:items-start'
              />
            </div>
            {/* TODO: add form to select address to receive tokens */}
            {/* TODO: add button to end promotion */}
          </div>
        </Layout>
      )
    } else {
      router.replace('/')
    }
  }
}
