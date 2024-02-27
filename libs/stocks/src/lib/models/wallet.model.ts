import { Asset } from './asset.model';

export interface Wallet {
  id: string;
  name: string;
  description: string;
  assetsOwned: Asset[];
  assetsSold: Asset[];
}
