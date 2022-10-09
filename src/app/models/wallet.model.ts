export interface Wallet {
  name: string,
  address: string,
  currency: string,
  iconSrc: string,
  balance:number,
  transactions: []
}


export interface Funding{
  email: string;
  amount: number;
  currency: string;
  transactions: [];
}
