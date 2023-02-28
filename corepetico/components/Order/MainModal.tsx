import React from "react";
import ContentModal from "./Content/ContentModal";
import TimeModal from "./Time/TimeModal";

export default function MainModal() {
    const [showModal, setShowModal] = React.useState(0); // 0-nothing, 1-place, 2-content
    return (
        <>
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-white text-xs sm:text-lg'>Zamów idealną lekcję!<br />Wybierz temat, oraz wolną datę i godzinę<br />Pomożemy Ci z Twoim matematycznym problemem:)</p>
                <button
                    className='text-blue-800 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
                    type="button"
                    onClick={() => setShowModal(1)}
                >
                    Zamów lekcję
                </button>
            </div>
            {showModal === 1 ? (
                <TimeModal setShowModal={setShowModal} />
            ) : showModal === 2 ? <ContentModal setShowModal={setShowModal} /> : null}
        </>
    );
}
