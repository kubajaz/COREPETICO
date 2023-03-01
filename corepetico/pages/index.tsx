import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FeedbackModal from '../components/FeedbackModal'

const Home: NextPage = ({ exploreData, cardsData }: any) => {

  return (
    <div className="">
      <Head>
        <title>Corepetico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 text-center text-gray-700'>O nas</h2>

          <p className='text-gray-500'>Lorem ipsum dolor sit amet. Et facilis quaerat ut eaque consequuntur eos quaerat expedita est itaque omnis. Qui nesciunt amet in soluta odit aut dolor distinctio. Aut excepturi beatae est ducimus aliquam qui accusantium perspiciatis nam suscipit laboriosam 33 ratione consequatur? Qui ullam sunt id autem sapiente qui minima veniam sed quidem reiciendis eum natus nostrum vel vero asperiores.
            Aut saepe quia quo voluptatem ducimus sit provident soluta et temporibus fuga et laboriosam ipsa. Id aliquam dignissimos ex porro voluptatem ea libero sequi rem quibusdam mollitia ea odit esse? Et eius repudiandae aut atque similique aut odio autem qui incidunt praesentium quo possimus sapiente et minima quia? </p>

        </section>
        <FeedbackModal/>

        <Footer />
      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const exploreData: any = [] /* await fetch('https://jsonplaceholder.typicode.com/albums/1/photos').
    then((res) =>
      res.json()
    ); */

  const cardsData: any = [] /* await fetch('https://jsonplaceholder.typicode.com/albums/2/photos').
    then((res) =>
      res.json()
    ); */

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
