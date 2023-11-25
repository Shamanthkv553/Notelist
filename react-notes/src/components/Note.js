import {MdDeleteForever} from 'react-icons/md';
function Note({id,text,date,delfunc}){

    return(
        <div className="note">
            <span>
                {text}
            </span>
            <div className="note-footer">
              <small>{date}</small>
              <MdDeleteForever className='deleteic' size='1.3em' onClick={()=>delfunc(id)}/>
            </div>
        </div>
    )
}
export default Note;