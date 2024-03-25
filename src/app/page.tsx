import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import BottomPage from '@/components/BottomPage'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='h-[200px]'>
          <BottomPage/>
      </div>
    </main>
  )
}
