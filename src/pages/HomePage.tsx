import { gallery, services, site } from '../content/site'

export function HomePage() {
  return (
    <div className="landing">
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">Студия красоты · Рязань</p><h1>{site.tagline}</h1><p className="lede">{site.description}</p><a className="button button-accent" href={site.bookingUrl} target="_blank" rel="noreferrer">Выбрать время <span>↗</span></a></div>
        <div className="hero-image"><img src={gallery[0].src} alt="Интерьер Ларина Студии" /><div className="hero-stamp"><strong>{site.rating}</strong><span>{site.reviewCount}</span></div></div>
      </section>
      <section className="proof section"><p className="eyebrow">О студии</p><div className="proof-grid"><h2>Собираем образ целиком.</h2><div><p>В одной студии можно подготовить волосы и макияж для свадьбы, фотосессии или особенного вечера.</p><p className="proof-note">Персонал · 95% положительных отзывов<br />Атмосфера · 98% положительных отзывов<br />Компетентность · 100% положительных отзывов</p></div></div></section>
      <section className="services section" id="services"><div className="section-heading"><p className="eyebrow">Услуги</p><h2>Ваше настроение,<br />наша работа.</h2></div><div className="service-list">{services.map((service, index) => <article className="service-item" key={service.slug}><span className="service-index">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.summary}</p></div><strong>{service.price}</strong></article>)}</div></section>
      <section className="studio section" id="studio"><div className="studio-copy"><p className="eyebrow">Ларина Студия</p><h2>Место, где можно выдохнуть.</h2><p>Живые цветы, чай или кофе и мастера, которые сначала слышат ваш запрос, а потом предлагают форму и настроение.</p><a className="text-link" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться в студию <span>↗</span></a></div><div className="gallery">{gallery.slice(1).map((image) => <img key={image.src} className={image.className} src={image.src} alt={image.alt} />)}</div></section>
      <section className="contacts section" id="contacts"><div><p className="eyebrow">Контакты</p><h2>До встречи<br />в Рязани.</h2></div><div className="contact-details"><a className="phone" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a><p>{site.contact.address}</p><p>{site.contact.hours}</p><a className="button" href={site.bookingUrl} target="_blank" rel="noreferrer">Онлайн-запись <span>↗</span></a></div></section>
      <div className="bottom-line"><span>Ларина Студия</span><a href="#top">Наверх ↑</a></div>
    </div>
  )
}
