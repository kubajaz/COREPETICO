import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import { format } from 'date-fns';
import InfoCard from '../components/Cards/InfoCard';
import 'react-dropdown/style.css';

function Tutors({ searchResults }: any) {
    const router = useRouter();
    const { startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate = format(new Date(String(startDate)), "dd MMMM yy");
    const formattedEndDate = format(new Date(String(endDate)), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className='h-screen'>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} Guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>No siema</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancelation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults.map(({ id, url, title }: any) => (
                            <InfoCard
                                key={id}
                                url={url}
                                title={title}
                            />
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Tutors

export async function getServerSideProps() {
    const searchResults:any = [] // await fetch('https://jsonplaceholder.typicode.com/albums/2/photos').then(res => res.json());
    return {
        props: {
            searchResults
        }
    }
}