import { darkTheme, Theme } from '@rainbow-me/rainbowkit';

// Custom PoolTogether RainbowKit Theme
export const ptRainbowTheme = (): Theme => {
  const theme: Theme = darkTheme();

  const ptTheme: Theme = {
    ...theme,
    colors: {
      ...theme.colors,
      accentColor: '#7fa4e3',               // Ensure this is a non-optional string
      connectButtonBackground: '#7fa4e3',   // Ensure this is a non-optional string
      connectButtonText: '#000000',         // Ensure this is a non-optional string
    },
    fonts: {
      ...theme.fonts,
      body: 'Grotesk'  // Non-optional font
    },
    shadows: {
      ...theme.shadows,
      connectButton: '0 0 0 transparent'  // Remove shadow
    }
  };

  return ptTheme;
};
