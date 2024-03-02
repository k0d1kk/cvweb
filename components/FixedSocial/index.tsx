import React from 'react';
import styles from './styles.module.scss';

export default function FixedSocial() {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <img src="/socials_inst.svg" alt="" />
        <img src="/socials_tg.svg" alt="" />
        <img src="/socials_fb.svg" alt="" />
        <img src="/socials_twit.svg" alt="" />
        <img src="/socials_git.svg" alt="" />
      </div>
    </div>
  );
}
