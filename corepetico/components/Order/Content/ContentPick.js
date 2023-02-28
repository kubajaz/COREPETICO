import React, { useState } from "react";
  
function ContentPick() {
    const [file, setFile] = useState();
    const [text, setText] = useState("");
  
    return (
        <div>
            <p>Dodaj zdjęcie zadań (opcjonalnie)</p>
            <input type="file" onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]));}} />
            <img src={file} className="object-scale-down h-48 w-96" />
            <p>Napisz z czym masz problem</p>
            <input className='shadow-md rounded-full hover:shadow-xl' type="text" onChange={(e)=>{setText(e.target.value)}} />
            <p>{text}</p>
  
        </div>
  
    );
}
  
export default ContentPick;