export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  id: number
  username: string
  email: string
  role: Role
}