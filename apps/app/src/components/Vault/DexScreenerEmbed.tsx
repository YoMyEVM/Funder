import React from 'react';

interface DexScreenerEmbedProps {
  chainId: number;
  depositToken: string;
}

const DexScreenerEmbed: React.FC<DexScreenerEmbedProps> = ({ chainId, depositToken }) => {
  // Mapping chain IDs to network names for DexScreener
  const chainNameById: { [key: number]: string } = {
    1: 'ethereum',
    137: 'polygon',
    10: 'optimism',
    8453: 'base',
    100: 'gnosischain',
    534352: 'scroll',
    42161: 'arbitrum',
  };

  const networkName = chainNameById[chainId];

  // If the chainId is not supported, don't render the iframe
  if (!networkName) {
    return <p>Unsupported network for Dexscreener chart</p>;
  }

  // Dexscreener URL with dynamic network and token address, hiding recent trades
  const dexscreenerUrl = `https://dexscreener.com/${networkName}/${depositToken}?embed=1&theme=dark&trades=0&info=0`;

  return (
    <div id="dexscreener-embed" style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
      <iframe
        src={dexscreenerUrl}
        style={{ position: 'absolute', width: '100%', height: '40%', top: 0, left: 0, border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DexScreenerEmbed;
