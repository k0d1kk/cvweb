import React from 'react';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/header_logo.svg" alt="" />
          </div>
          <ul className={styles.navigation}>
            <a href="">
              <li>Біо</li>
            </a>
            <a href="">
              <li>Проекти</li>
            </a>
            <a href="">
              <li>Контакти</li>
            </a>
            <a href="">
              <li>Відгуки</li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
