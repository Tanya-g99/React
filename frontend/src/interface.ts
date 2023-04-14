export interface IMoment {
  title: string;
  content: string;
  author: string;
  created_on: Date;
  image: string;
  id: number;
}

export interface IComment {
  author: string
  content: string
  created_on: Date
}

export function instanceOfIMoment(object: any): object is IMoment {
  return 'title' in object;
}

export interface IUser {
  email: string;
  password: string;
  nickname: string;
  profile_img: string;
  reg_day: Date;
  rating: number;
}

export interface ISub {
  author: string
  subscriber: string
  subbed_on: Date
}

export interface ILike {
  author: string
  target: IMoment | IComment
  liked_on: Date
}

export type IEvent = ILike | ISub

export function instanceOfISub(object: IEvent): object is ISub {
  return 'subbed_on' in object;
}

export function instanceOfILike(object: IEvent): object is ILike {
  return 'liked_on' in object;
}


export interface ITag {
  related_moments: IMoment[]
  name: string
}


