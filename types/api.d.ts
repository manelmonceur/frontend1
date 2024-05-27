export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  email: string;
  password: string;
}
export interface Child {
  _id: string;
  firstName: string;
  lastName: string;
  class: string;
}
export interface Course {
  _id: string;
  name: string;
  path: string;
  children: Child[];
  teacher: User;
}
