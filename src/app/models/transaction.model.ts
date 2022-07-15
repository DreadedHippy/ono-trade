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
