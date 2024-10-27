import { HomeContent } from '@components/Home/HomeContent'
import  AnimatedComponent from '@components/Home/AnimatedComponent'
import { HomeHeader } from '@components/Home/HomeHeader'
import  Header  from '@components/Home/Header'
import { Layout } from '@components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <HomeHeader className='mt-10' />
      <AnimatedComponent />
      <HomeContent className='py-12' />
      <Header />
    </Layout>
  )
}
