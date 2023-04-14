import { IMoment, IUser, IEvent } from "../interface";

export const moments: IMoment[] = [
  {
    title: "Tupic",
    content: "Гоша тупик",
    author: "Cat",
    created_on: new Date(Date.now()),
    image: "logo.svg",
    id: 1,
  },
  {
    title: "Tupic2",
    content: "Гоша тупик несомненно",
    author: "tanya-g99",
    created_on: new Date(Date.now()),
    image: "logo.svg",
    id: 2,
  },
  {
    title: "Tupic3",
    content: "Гоша тупик",
    author: "geogreck",
    created_on: new Date(Date.now()),
    image: "logo.svg",
    id: 3,
  },
  {
    title: "Tupic4",
    content: "Гоша умный тупик",
    author: "Cat",
    created_on: new Date(Date.now()),
    image: "logo.svg",
    id: 4,
  },
  {
    title: "Tupic5",
    content:
      'Штирлиц долго смотрел в одну точку. Потом перевел взгляд и посмотрел на другую. "Двоеточие!" - догадался Штирлиц.',
    author: "geogreck",
    created_on: new Date(Date.now()),
    image: "logo.svg",
    id: 5,
  },
];

export const events: IEvent[] = [
  {
    author: "Cat",
    target: moments[4],
    liked_on: new Date(Date.now()),
  },
  {
    author: "Cat",
    target: moments[4],
    liked_on: new Date(Date.now()),
  },
  {
    author: "tanya-g99",
    subscriber: "geogreck",
    subbed_on: new Date(Date.now()),
  },
];

export const users: IUser[] = [
  {
    email: "ya@ya.ru",
    password: "1234",
    nickname: "tanya-g99",
    profile_img: "logo1.png",
    reg_day: new Date(Date.now()),
    rating: 5.0,
  },
  {
    email: "ya@ya.ru",
    password: "1234",
    nickname: "geogreck",
    profile_img: "logo1.png",
    reg_day: new Date(Date.now()),
    rating: 3.43,
  },
  {
    email: "ya@ya.ru",
    password: "1234",
    nickname: "Cat",
    profile_img: "logo1.png",
    reg_day: new Date(Date.now()),
    rating: 7.54,
  },
];
