import classNames from 'classnames'

interface VaultsIntroProps {
  className?: string
}

export const VaultsIntro = (props: VaultsIntroProps) => {
  const { className } = props

  return (
    <div className={classNames('flex flex-col gap-3 items-center text-center', className)}>
      <span className='text-3xl text-pt-purple-50'>Deploy a Funder.Fun Vault</span>
    </div>
  )
}
