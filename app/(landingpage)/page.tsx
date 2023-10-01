import Head from 'next/head'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Arrivals from './components/Arrivals'
import Pay from './components/Pay'
import Favorite from './components/Favorite'
import Voucher from './components/Voucher'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

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
        <Favorite />
        <Voucher />
        <Newsletter />
        <Footer />
      </div>
    )
  }