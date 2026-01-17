import CheckIcon from '@assets/icons/CheckIcon';
import MonthIcon from '@assets/icons/MonthIcon';
import YearIcon from '@assets/icons/YearIcon';
import type { Onboarding } from '../types/data';
import type { Product } from '../types/data';
import type { Service } from '../types/data';

export const ONBOARDING: Onboarding[] = [
  {
    title: 'О вас должны узнать!',
    text: 'Покажите свой продук людям!',
    icon: <CheckIcon />,
  },
  {
    title: 'Больше клиентов, больше продаж!',
    text: 'Привлекайте новых кливентов!',
    icon: <CheckIcon />,
  },
];

export const PRODUCTS: Product[] = [
  {
    name: 'месяц',
    price: 100,
    icon: <MonthIcon />,
  },
  {
    name: 'год',
    price: 1100,
    fullPrice: 1200,
    icon: <YearIcon />,
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: 'Сервис 1',
  },
  {
    id: 2,
    name: 'Сервис 2',
  },
  {
    id: 3,
    name: 'Сервис 3',
  },
  {
    id: 4,
    name: 'Сервис 4',
  },
  {
    id: 5,
    name: 'Сервис 5',
  },
];
