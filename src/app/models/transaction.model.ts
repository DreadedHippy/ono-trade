export interface Transaction {
  type: string; //Type of transaction i.e withdrawal, transfer etc.
  date: string;
  transactionId: string | null; //Auto-generated
  currency: string;
  fromAdress: string;
  toAdress: string;
  amount: number;
}

export interface CryptoBuy {
  type: string; //Type of crypto i.e BTC, ETH etc.
  date: string;
  transactionId: string | null; //Auto-generated
  amount: number;
  currency: string;
  paymentAdress: string;
}
