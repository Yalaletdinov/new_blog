import React from 'react';
import { useState, useEffect} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './EditPostForm.css'


export const EditPostForm = (props) => {


    const [title, setTitle] = useState(props.selectedPost.title)
    const [body, setBody] = useState(props.selectedPost.body)
    
     

    const savePost = (e) => {
        e.preventDefault()
        const post = {
        id: props.selectedPost.id,
        title,
        body
        }
        
        props.editData(post)
        props.handleHideEditForm()
      }
   
    useEffect(()=> {
        const handleEscape = (e) => {
            if(e.key === 'Escape') {
              props.handleHideAddForm()
            }
        };
        window.addEventListener('keyup' , handleEscape) 
            
        return() =>window.removeEventListener('keyup' , handleEscape)
    },[props])
    return(
        <>
        
            <form onSubmit={savePost}
                className='editNewForm' 
                >
            <button 
                onClick={props.handleHideEditForm}
                className='editCloseForm__btn'>
            <HighlightOffIcon/>
            </button>
            <label>Заголовок</label>
            <input
                pattern='[А-я ,0-9, A-z]{1,100}'
                title='Только буквы и цифры'
                autoFocus
                placeholder='Title'
                type='text'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required/>
                
            <label>Описание</label>
            <textarea
                required
                minLength='1'
                maxlength="1000"
                placeholder='Body'
                type="text"
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >
            </textarea>
            <button 
                className="editNewForm__btn" 
                type='submit'>Редактирование поста
            </button> 
          
            </form>
            
            
            <div 
                onClick={props.handleHideEditForm}        
                className='overlay'>
            </div>
            </>
            
    )
}