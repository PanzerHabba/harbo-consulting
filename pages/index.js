import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Harbo Consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          src="/harbo_logo_hori_primary.png"
          alt='Company logo'
          width={1000}
          height={500}
        />
      </main>
      <Footer />
    </div>
  )
}
