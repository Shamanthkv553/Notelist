import { useState } from 'react';
import {MdDeleteForever} from 'react-icons/md';
function Addnote({addfun}){

const [noteText,setNoteText]=useState('');
const characterLimit =300;

const handlechange=(event)=>{
    /*console.log(event.target.value);*/
    if(characterLimit-event.target.value.length>0)
    setNoteText(event.target.value);
}

const handlesavechange=()=>{
   if(noteText.trim().length>0)
    addfun(noteText);
    
    setNoteText('');

}
    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note'
                value={noteText}
                onChange={handlechange}
                ></textarea>
            <div className="note-footer">
              <small>{characterLimit-noteText.length} Remaining</small>
              <button className='save' onClick={handlesavechange}>save</button>
            </div>
        </div>
    )
}
export default Addnote;