import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Search from "./Search";
import Header from "./Header";


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

    const [searchText,setSearchText]=useState('');
    const [darkMode,setDarkMode]=useState(false);
    // console.log(searchText)

    useEffect(()=>
    {
        const savedNotes =JSON.parse(localStorage.getItem('react-notes-app-data'));
   if(savedNotes){
    setNotes(savedNotes);
   }
    },[]);

    useEffect(()=>{
        localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
    },[notes]);
    return(
        <div className={`${darkMode &&'dark-mode'} `}>
            <div className="container">
                <Header switchMode={setDarkMode}/>
                <Search handleSearch={setSearchText}/>
                <Notelist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
                handleAddNote={AddNotefunc}
                deleteNotefunc={deleteNotefunc}
                />
            </div>
        </div>
    )
}

 export default App;