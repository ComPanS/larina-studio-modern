export type Service = {
  slug: string
  title: string
  summary: string
  price: string
  detail?: string
}

export const site = {
  name: 'Ларина Студия',
  shortName: 'LARINA',
  locale: 'ru',
  tagline: 'Образ, который остается с вами',
  description: 'Прически, укладки и макияж для событий, съемок и тех дней, когда хочется увидеть себя по-новому.',
  rating: '5,0',
  reviewCount: '181 оценка',
  bookingUrl: 'https://dikidi.net/533517',
  logoUrl: 'https://avatars.mds.yandex.net/get-altay/16398472/2a0000019cd5c1ca8af8436c58d3180aaead/S',
  contact: {
    phone: '+7 (910) 507-09-35',
    email: '',
    address: 'ул. Чапаева, 59, офис 5, этаж 1, Рязань',
    hours: 'Ежедневно до 21:00',
  },
}

export const services: Service[] = [
  { slug: 'hair-maria', title: 'Прическа от Марии Лариной', summary: 'Свадебные пучки, голливудские волны, гладкие хвосты и укладки любой сложности.', price: 'от 6 000 ₽' },
  { slug: 'makeup-maria', title: 'Макияж от Марии Лариной', summary: 'Выразительный образ для события, съемки или важного вечера.', price: 'от 7 000 ₽' },
  { slug: 'hair-studio', title: 'Прическа от мастера студии', summary: 'Укладка и прическа под ваш образ: от аккуратной формы до стойкой текстуры.', price: 'от 4 000 ₽' },
  { slug: 'makeup-studio', title: 'Макияж от визажиста студии', summary: 'Натуральный или яркий макияж с учетом запроса и формата события.', price: 'от 4 000 ₽' },
  { slug: 'lesson', title: 'Урок макияжа для себя', summary: 'Индивидуальная работа: дневной макияж и его вечерняя трансформация.', price: 'от 7 000 ₽' },
]

export const gallery = [
  { src: 'https://avatars.mds.yandex.net/get-altay/7456447/2a000001837a15519c5255b7b50e05d4080e/XXL_height', alt: 'Интерьер Ларина Студии', className: 'gallery-wide' },
  { src: 'https://avatars.mds.yandex.net/get-altay/16136409/2a0000019d2571b942870455d26f5581e77a/S', alt: 'Результат окрашивания волос', className: 'gallery-tall' },
  { src: 'https://avatars.mds.yandex.net/get-altay/13791177/2a0000019c67b2ab4911179b16893d90eb88/S', alt: 'Образ гостьи студии', className: 'gallery-square' },
]
