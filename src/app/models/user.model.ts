export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  verifyToken: string;
  passwordToken: string;
  wallets: []
}

export interface UserDataRes {
  message: string;
  status: string;
}
