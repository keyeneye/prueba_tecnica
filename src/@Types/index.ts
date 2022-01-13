export interface iEmployee {
  state: boolean;
  _id: string;
  name: string;
  email: string;
  telephone: string;
  img: string;
  __v: number;
}
export interface iGetEmployees {
  total: number;
  employee: Array<iEmployee>;
  msg: string;
}
