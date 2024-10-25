import { LINKS, SECONDS_PER_DAY } from '@shared/utilities'
import classNames from 'classnames'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { getMessages } from 'src/utils'

import { Layout } from '@components/Layout'
import CardRow from './index/CardRow';



interface HomePageProps {
  messages: IntlMessages
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  const messages = await getMessages(locale)

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY
  }
}

export default function HomePage() {
  const t = useTranslations('Common')

  return (
    <Layout className='gap-2'>
      <CardRow />
    </Layout>
  )
}


