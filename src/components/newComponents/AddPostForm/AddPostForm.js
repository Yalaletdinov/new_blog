import React from 'react';
import { useState, useEffect} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './AddPostForm.css'


export const AddPostForm =(props) => {


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

   
    const createPost = (e) => {
        e.preventDefault()
        const post = {
          title,
          body
        }
        
        props.postData(post)
        props.handleHideAddForm()
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
        
        <form
            className='newForm' 
            onSubmit={createPost}>
        <button 
            onClick={props.handleHideAddForm}
            className='closeForm__btn'>
        <HighlightOffIcon/>
        </button>
        
        <label >Заголовок</label>
        <input
            
            pattern='[А-я ,0-9, A-z]{1,100}'
            title='Только буквы и цифры'
            placeholder='Title'
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            required autoFocus>
        </input>
        
        <label>Описание:</label>
        <textarea
            minLength='1'
            maxlength="1000"
            placeholder='Body'
            type="text"
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            required
            
            >
        </textarea>
        <button 
            className="newForm__btn" 
            type='submit'>Создать пост
        </button> 
      
        </form>
        
        <div 
            onClick={props.handleHideAddForm}        
            className='overlay'>
        </div>
        

            </>
            
    )
}