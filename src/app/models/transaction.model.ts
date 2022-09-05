export interface Transaction {
  fromId: string; //Auto-generated
  fromAddress: string;
  fromName: string;
  toAddress: string;
  amount: number;
  currency: string;
  date: string;
  type: string; //Type of transaction i.e withdrawal, transfer etc.
  remark: string;
}

export interface CryptoBuy {
  type: string; //Type of crypto i.e BTC, ETH etc.
  date: string;
  transactionId: string | null; //Auto-generated
  amount: number;
  currency: string;
  paymentAddress: string;
}

export interface peerOffer{
  name: string, //Name of trader creating offer
  ratings: number, //0.0 - 5.0, 5-star scale ---- NO USE FOR RATINGS ON THE OFFER ITSELF
  tradesCount: number, //Number of trades,
  timeLimit: number, //Time limit in minutes
  percentageCompleted: number, //Percentage of trades completed
  type: string, //what type of offer is made by the trader
  price: number, //Asking price of the trader in fiat per unit of crypto
  fiatCurr: string, //Bank Currency accepted by the Peer offering the crypto
  inStock: number, //Amount of crypto left in stock
  cryptoCurr: string, //The Cryptocurrency being offered
  upperLimit: number, //Maximum amount of crypto that can be bought at a time
  lowerLimit: number, //Minimum amount of crypto that can be bought a time.
  paymentMethods: string[]
}

export interface newPeerOffer{
  picSrc: string,
  name: string,
  timeLimit: number, //Time limit in minutes
  type: string, //what type of offer is made by the trader
  price: number, //Asking price of the trader in fiat per unit of crypto
  fiatCurr: string, //Bank Currency accepted by the Peer offering the crypto
  inStock: number, //Amount of crypto left in stock
  cryptoCurr: string, //The Cryptocurrency being offered
  upperLimit: number, //Maximum amount of crypto that can be bought at a time
  lowerLimit: number, //Minimum amount of crypto that can be bought a time.
  paymentMethods: string[]
}

export interface paymentMethod{
  name: string,
  address: string,
  bank: string,
  type: string
}

export interface placedOrders{
  offerID: string,
  advertiser: string,
  advertType: string,
  customer: string,
  cryptoCurr: string,
  fiatCurr: string,
  cryptoAmt: number,
  fiatAmt: number,
  paymentMethod: string,
  status: string
}

export interface dbPlacedOrders{
  offerID: string,
  advertiser: string,
  advertType: string,
  customer: string,
  cryptoCurr: string,
  fiatCurr: string,
  cryptoAmt: number,
  fiatAmt: number,
  paymentMethod: string,
  status: string,
  createdAt: string,
  updatedAt: string
}
