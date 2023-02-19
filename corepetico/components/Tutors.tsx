import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

function Tutors() {
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        /* ;(async () => {
            const colRef = collection(db, 'tutors')

            const snapshots = await getDocs(colRef)

            const docs = snapshots.docs.map(doc => {
                const data = doc.data()
                data.id = doc.id
                return data
            })
            //setTutors(docs)

            console.log(docs)
        })() */
    }, [])
  return (
    <div>Tutors</div>
  )
}

export default Tutors