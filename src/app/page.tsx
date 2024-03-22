import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import AboutUs from '@/components/AboutUs'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <AboutUs id='aboutUs'/>
    </main>
  )
}
