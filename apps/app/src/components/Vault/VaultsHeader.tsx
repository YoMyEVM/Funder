import { useTranslations } from 'next-intl';

interface VaultsHeaderProps {
  selectedButton: string | null;
}

export const VaultsHeader: React.FC<VaultsHeaderProps> = ({ selectedButton }) => {
  const t = useTranslations('Vaults');

  const getHeaderText = () => {
    switch (selectedButton) {
      case 'Yield Lotto':
        return t.rich('depositAndWin', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Open Source':
        return t.rich('fundOpenSource', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Projects':
        return t.rich('fundProjects', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Research':
        return t.rich('fundResearch', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'NFTs':
        return t.rich('fundNFTs', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Culture/Meme':
        return t.rich('fundCultureMeme', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Good Causes':
        return t.rich('fundGoodCauses', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Creators':
        return t.rich('fundCreators', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Artists':
        return t.rich('fundArtists', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'NSFW':
        return t.rich('fundNSFW', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Longtail':
        return t.rich('fundLongtail', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Eth Denver':
        return t.rich('fundEthDenver', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'DeScience':
        return t.rich('fundDeScience', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'ReFinance':
        return t.rich('fundReFinance', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      case 'Self Growth':
        return t.rich('fundSelfGrowth', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
      default:
        return t.rich('depositAndWin', {
          highlight: (chunks) => <span className='text-pt-teal'>{chunks}</span>,
        });
    }
  };

  return (
    <div className='text-center text-[1.75rem] font-grotesk font-bold md:text-4xl lg:text-5xl'>
      {getHeaderText()}
    </div>
  );
};

export default VaultsHeader;