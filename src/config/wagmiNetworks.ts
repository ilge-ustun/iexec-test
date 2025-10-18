import { arbitrumSepolia } from '@reown/appkit/networks';

export { arbitrumSepolia } from '@reown/appkit/networks';

// Explorer slugs mapping for iExec explorer
export const explorerSlugs: Record<number, string> = {
  134: 'bellecour', // iExec Sidechain (Bellecour)
  42161: 'arbitrum-mainnet', // Arbitrum One
  421614: 'arbitrum-sepolia-testnet', // Arbitrum Sepolia
};

const wagmiNetworks = {
  arbitrumSepolia,
};

export default wagmiNetworks;
