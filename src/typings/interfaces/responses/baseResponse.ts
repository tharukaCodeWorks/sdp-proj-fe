export interface IBaseResponse<T> {
  body: T;
  status: string;
  message: string;
}
