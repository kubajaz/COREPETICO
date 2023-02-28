import React, { useState } from "react";

function ContentPick() {
    const [file, setFile] = useState();
    const [text, setText] = useState("");

    return (
        <>
            <div className='p-4'>
                <div>
                    <p>Dodaj zdjęcie zadań (opcjonalnie)</p>
                    <input type="file" onChange={(e) => { setFile(URL.createObjectURL(e.target.files[0])); }} />
                    {file ? <img src={file} className="object-scale-down h-48 w-48" /> : null}
                </div>

                <div>
                    <p>Napisz z czym masz problem</p>
                    <input className='shadow-md rounded-full hover:shadow-xl w-auto' type="text" onChange={(e) => { setText(e.target.value) }} />
                </div>
            </div>
        </>
    );
}

export default ContentPick;