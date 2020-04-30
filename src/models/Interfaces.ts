export interface UserInterface {
  address: string,
  age: number,
  email: string,
  name: string,
  userPassword: string
}

export interface ErrorInterface {
  error: boolean,
  message?: string,
}

export interface HeaderInterface {
  title: string,
  titleComponent?: any,
  
  leftButtonIcon?: any,
  leftButtonPress?(): any,

  rightButtonIcon?: any,
  rightButtonPress?(): any,
}