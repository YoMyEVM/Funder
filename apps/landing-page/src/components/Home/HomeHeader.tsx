import classNames from 'classnames'

interface HomeHeaderProps {
  className?: string
}

export const HomeHeader = (props: HomeHeaderProps) => {
  const { className } = props

  return (
    <div className={classNames('w-full isolate', className)}>
      <div className='w-full flex flex-col items-center'>

        <div className='flex flex-col items-center text-center mb-10 z-10 md:mt-6 md:mb-10'>
          <h3 className='md:text-5xl text-pt-teal'>
            Leveraging the <span className='text-pt-purple-200'>Power</span> <span className='text-pt-purple-200'>of</span> <span className='text-pt-purple-200'>Web3</span> and <span className='text-pt-purple-200'> Community</span> to Fund the Impossible
          </h3>
        </div>
      </div>
    </div>
  )
}
