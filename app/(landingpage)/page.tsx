import Head from 'next/head'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Arrivals from './components/Arrivals'

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
      </div>
    )
  }