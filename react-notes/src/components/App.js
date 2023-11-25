import { useState } from "react";
import {nanoid} from "nanoid";

import Notelist from "./Notelist";

function App(){
    const [notes,setNotes]=useState([{
        id :nanoid(),
        text :'this is my first text',
        date :'12/12/22'
    },
    {
        id :nanoid(),
        text :'this is my second text',
        date :'13/12/22'
    },
    {
        id :nanoid(),
        text :'this is my third text',
        date :'17/12/22'
    },
    {
        id :nanoid(),
        text :'this is my fourth text',
        date :'17/02/22'
    }
])

    const AddNotefunc = (text)=>{
        const date=new Date();
        // console.log({text});
        const newNote={
            id:nanoid(),
            text:text,
            date:date.toLocaleDateString(),

        };
        const newNotes=[...notes,newNote];
        setNotes(newNotes);


    }

    const deleteNotefunc=(id)=> {
       const newNotes= notes.filter((note)=>note.id !==id);
       setNotes(newNotes);
    }
    return(
        
        <div className="container">
            <Notelist notes={notes}
             handleAddNote={AddNotefunc}
             deleteNotefunc={deleteNotefunc}
             />
        </div>
    )
}

 export default App;