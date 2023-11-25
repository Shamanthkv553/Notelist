import {MdDeleteForever} from 'react-icons/md';
function Note(){

    return(
        <div className="note">
            <span>
                hey this is my first note
            </span>
            <div className="note-footer">
              <small>  13/2/2002</small>
              <MdDeleteForever className='deleteic' size='1.3em'/>
            </div>

        </div>
    )
}
export default Note;