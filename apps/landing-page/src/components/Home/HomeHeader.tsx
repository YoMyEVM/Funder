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
          <h3 className='md:text-3xl text-pt-teal'>
            Stake to fund Developers or Projects and Win Prizes
          </h3>
        </div>
      </div>
    </div>
  )
}
