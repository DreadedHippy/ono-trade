export interface Transaction {
  type: string; //Type of transaction i.e withdrawal, transfer etc.
  date: string;
  transactionId: string | null; //Auto-generated
  currency: string;
  fromAdress: string;
  toAdress: string;
  amount: number;
}
