import { useRef, useEffect } from 'react'
import Trash from '../icons/Trash'; 

const NoteCard = ({ note }) => {
    
 const body = JSON.parse(note.body);
 const position = JSON.parse(note.position);
 const colors = JSON.parse(note.colors);

   const textAreaRef = useRef(null);
    
   useEffect(() => {
      autoGrow(textAreaRef)
   }, [])

   const autoGrow = (textarea) => {
    const {current} = textAreaRef;
    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";

   }
  return (
  <div 
    className="card" 
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        right: `${position.y}py`,
    
    }}
    >
        
     <div className="card-header" 
         style={{
            backgroundColor: colors.colorHeader
        }}   
     >
        <Trash />
     </div>
     <div className="card-body">
       <textarea
         ref={textAreaRef}
         style={{color: colors.colorText }}
         defaultValue={body}
         onInput={() => {
            autoGrow(textAreaRef);
         }}
       >
       </textarea>
     </div> 
  </div>
  )
}
 
export default NoteCard