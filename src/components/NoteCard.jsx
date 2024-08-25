import { useRef, useEffect, useState } from 'react'
import Trash from '../icons/Trash'; 
import { setNewOffset, autoGrow , setZIndex} from '../utils';

const NoteCard = ({ note }) => {
    
 const body = JSON.parse(note.body);
 const[ position, setPosition ]= useState(JSON.parse(note.position));
 const colors = JSON.parse(note.colors);
    
   let mouseStartPos = {x : 0, y : 0};
   const cardRef = useRef(null);

   const textAreaRef = useRef(null);
    
   useEffect(() => {
      autoGrow(textAreaRef)
   }, [])
   
   const mouseDown = (e) => {

     mouseStartPos.x = e.clientX;
     mouseStartPos.y = e.clientY;
 
     setZIndex(cardRef.current);

     document.addEventListener("mousemove", mouseMove);
     document.addEventListener("mouseup", mouseUp);

    }   

   const mouseMove = (e) => {
      
     let mouseMoveDir =  {
        x : mouseStartPos.x - e.clientX,
        y : mouseStartPos.y - e.clientY,
     };

     mouseStartPos.x = e.clientX;
     mouseStartPos.y = e.clientY;

     setPosition(newPosition);
   };

   const mouseUp = () => {

};

  return (
  <div 
    ref={cardRef}
    className="card" 
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        right: `${position.y}py`,
    }}
    > 
     <div 
         onMouseDown={mouseDown}
         className="card-header" 
         style={{
            backgroundColor: colors.colorHeader
        }}   
     >
        <Trash />
     </div>
     <div className="card-body">
       <textarea 
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
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