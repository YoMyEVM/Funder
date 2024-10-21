import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface HowItWorksSectionProps {
  className?: string
}

export const HowItWorksSection = (props: HowItWorksSectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col gap-6 items-center md:gap-12', className)}>
      <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center'>
        <HowItWorksItem
          imgSrc='/Deploy.svg'
          title='Deploy a Vault and Fund Anything'
          link='/vault-deploy'
        />
        <HowItWorksItem
          imgSrc='/Fund.svg'
          title='Earn and Win by Funding Projects'
          link='/funding-projects'
        />
        <HowItWorksItem
          imgSrc='/Hack.svg'
          title='Keep your Money and Host a Hackathon'
          link='/host-hackathon'
        />
        <HowItWorksItem
          imgSrc='/Market.svg'
          title="Don't Waste Money on Marketing Spend"
          link='/marketing-campaign'
        />
      </div>
    </section>
  )
}

interface HowItWorksItemProps {
  imgSrc: string
  title: string
  link: string
  className?: string
}

const HowItWorksItem = (props: HowItWorksItemProps) => {
  const { imgSrc, title, link, className } = props

  return (
    <Link href={link} className={classNames('flex flex-col gap-3 md:gap-6 group', className)} style={{ width: '270px' }}>
      <div className="relative">
        <Image src={imgSrc} alt={title} width={250} height={200} className='drop-shadow-lg group-hover:brightness-110' />
      </div>
      <div className='flex flex-col gap-2 items-center text-center'>
        <span className='text-3xl font-medium group-hover:text-pt-purple-100 transition-colors duration-300'>
          {title}
        </span>
      </div>
    </Link>
  )
}
