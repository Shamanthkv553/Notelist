import Addnote from "./Addnote";
import Note from "./Note"
function Notelist({notes,handleAddNote,deleteNotefunc}){
    return(
        <div className="note-list">
            <Addnote addfun= {handleAddNote}/>
           {notes.map((note)=>
           (<Note id={note.id} text={note.text} date={note.date} delfunc={deleteNotefunc}/>))}          
        
        </div>
    )
}

export default Notelist;