import Head from 'next/head'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Arrivals from './components/Arrivals'
import Pay from './components/Pay'

export default function Home() {
    return (
      <div>
        <Head>
          <title>Brytatutors official website</title>
          <meta property="og:title" content="Brytatutors official website" key="title" />
        </Head>
        <Hero />
        <Banner />
        <Arrivals />
        <Pay />
      </div>
    )
  }