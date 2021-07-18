import Asset from '@/classes/Asset'

export const exampleAsset = new Asset({
  id: 'ethereum',
  rank: '2',
  symbol: 'ETH',
  price: {
    USD: 1896.17,
    EUR: 1606.1887219
  },
  changePercent24Hr: 0.634,
  favorite: false,
  name: 'Ethereum',
  valuePerCurrency: {
    USD: 1896.17,
    EUR: 1606.1887219
  },
  volume24Hr: {
    USD: '8446573137.0557862796383544',
    EUR: 7154838707.205845
  },
  marketCap: {
    USD: '220845264744.9511712532255910',
    EUR: 187071398407.5058
  },
  explorer: 'https://etherscan.io/'
})
