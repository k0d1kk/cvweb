import Header from '@/components/Header';
import Image from 'next/image';
import bannerstyles from '/./components/Banner/styles.module.scss';
import Banner from '@/components/Banner';
import FixedSocial from '@/components/FixedSocial';

export default function Home() {
  return (
    <>
      <main>
        <div className={`${bannerstyles.background} pt-3 pb-14 flex flex-col gap-y-9`}>
          <Header />
          <Banner />
        </div>
        <FixedSocial />
      </main>
    </>
  );
}
