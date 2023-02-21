import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className='w-full text-center'>
                <button
                    className="text-white bg-blue-800 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Send Feedback
                </button>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Send Feedback
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    Lorem ipsum dolor sit amet. Et facilis quaerat ut eaque consequuntur eos quaerat expedita est itaque omnis. Qui nesciunt amet in soluta odit aut dolor distinctio. Aut excepturi beatae est ducimus aliquam qui accusantium perspiciatis nam suscipit laboriosam 33 ratione consequatur? Qui ullam sunt id autem sapiente qui minima veniam sed quidem reiciendis eum natus nostrum vel vero asperiores. Aut saepe quia quo voluptatem ducimus sit provident soluta et temporibus fuga et laboriosam ipsa. Id aliquam dignissimos ex porro voluptatem ea libero sequi rem quibusdam mollitia ea odit esse? Et eius repudiandae aut atque similique aut odio autem qui incidunt praesentium quo possimus sapiente et minima quia? 
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
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
