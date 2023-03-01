import { db } from "../config/firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/feedback/${uuid}`), {
      feedback,
      uuid,
    });

    setFeedback("");
    setShowModal(false)
  };

  return (
    <>
      <div className='w-full text-center'>
        <button
          className="text-white bg-blue-800 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Co możemy dla Ciebie zrobić?
        </button>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Co możemy dla Ciebie zrobić?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slace-500 text-lg leading-relaxed">
                    Powiedz nam czego potrzebujesz!<br />Co powinniśmy dodać, lub zmienić, aby uczyło Ci się jeszcze lepiej?<br /><br />Możemy zrobić wszystko:)<br />
                  </p>
                  <input value={feedback} onChange={handleFeedbackChange} name="feedback_text" id="feedback_text" placeholder="Napisz wiadomość" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Zamknij
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={writeToDatabase}
                  >
                    Wyślij
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
