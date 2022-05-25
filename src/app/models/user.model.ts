export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  token: string;
  passwordToken: string;
}

export interface UserDataRes {
  message: string;
  status: string;
}
