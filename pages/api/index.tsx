import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head_pages from "@/components/Head_pages";
import Info from "@/components/Info";
import Nave from "@/components/Nave";
import PerfilU from '@/components/PerfilU';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    
   <> 
      <header>
      <Head_pages></Head_pages> 
      <hr />
      </header>
      <section>
        <Nave></Nave>
        <hr />
      </section>
      <nav>
          <PerfilU></PerfilU>
          <hr />
        </nav>
      <footer>
        <Info></Info>
      </footer>
      
   </>
 
  )
}
