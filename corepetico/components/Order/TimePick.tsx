import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function TimePick() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className='p-4'>
            <p>Wybierz datę</p>
                <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    withPortal
                    portalId="root-portal"
                    className='shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer'
                />
            </div>

            <div className='p-4'>
                <p>Wybierz godzinę</p>
                <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className='shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer'
                />
            </div>
        </>
    );
};

export default TimePick