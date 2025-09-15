export interface ITask {
  id?: string,
  title: string,
  body?: string | null,
  complete?: boolean,
  createdAt?: Date,
}
