import React from 'react';
import './EditPostForm.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, useEffect } from 'react';

export const EditPostForm = (props) =>  {
    const [postTitle, setPosTtitle] = useState(props.selectedPost.title,)
    const [postBody, setPostBody] = useState(props.selectedPost.body)

    
    

    useEffect(()=> {
    const handleEscape = (e) => {
        if(e.key === 'Escape') {
            props.handleHideEditForm()
        }
    };
    
    window.addEventListener('keyup' , handleEscape) 
        
    return() =>window.removeEventListener('keyup' , handleEscape)
}, [props])
    
    const handleHideEditForm = props.handleHideEditForm
    return (
        <>
        <form className="editform">
            <button onClick={handleHideEditForm} className='editcloseForm__btn'>
            <HighlightOffIcon/>
            </button>
            
            <div>
                <label>Заголовок</label>
                <input 
                pattern='[А-я ,0-9, A-z]{1,100}'
                title='Только буквы и цифры'               
                autoFocus
                type='text' 
                name='postTitle' 
                placeholder='Заголовок поста'
                value={postTitle}
                onChange={(e)=>setPosTtitle(e.target.value)}
                required/>
            </div>
            <div>
                <label>Описание</label>
                <textarea
                required
                minLength= '1'
                maxlength="1000"
                name='postBody'
                placeholder='Описание поста'
                value={postBody}
                onChange={(e)=>setPostBody(e.target.value)}/>
            </div>
            <div>
              
            <button className="editform__btn"
                type='submit'
                >Редактировать пост
            </button>
            </div>
            

        </form>
            <div 
                onClick={handleHideEditForm} 
                className='overlay'></div>
        </>
            
    )
}
   
