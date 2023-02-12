import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home: NextPage = ({ exploreData, cardsData }: any) => {

  return (
    <div className="">
      <Head>
        <title>Corepetico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item: any) => (
              <SmallCard key={item.id} title={item.title} url={item.url} />
            ))}
          </div>

        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll'>
            {cardsData?.map((item: any) => (
              <MediumCard key={item.id} title={item.title} url={item.url} />
            ))}
          </div>

        </section>
      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos').
    then((res) =>
      res.json()
    );

  const cardsData = await fetch('https://jsonplaceholder.typicode.com/albums/2/photos').
    then((res) =>
      res.json()
    );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
