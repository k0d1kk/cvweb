import React from 'react';
import styles from './styles.module.scss';

export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textInform}>
            <h2>Верстка сайтів будь-якої складності</h2>
            <h3>Без зривів дедлайнів</h3>
            <p>За оптимальною ціною</p>
            <a href="">Замовити проект</a>
          </div>
          <div className={styles.image}>
            <img src="/banner_hero.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
