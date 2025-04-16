export interface IloginAPIData{
  message:string,
  token:string,
  user: {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
    isVerified: boolean,
    createdAt: string,
  }
}

export interface IloginResData{
  message:string,
  token:string,
  userEmail:string,
}
