import React from 'react';
import './AddPostForm.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, useEffect } from 'react';

export const AddPostForm = (props) => {
    const [postTitle, setPosTtitle] = useState('')
    const [postBody, setPostBody] = useState('')
    
    const handlePostTitleChange = (e) => {
        setPosTtitle(e.target.value)
      
        }
    
    const handlePostBodyChange = (e) => {
        setPostBody(e.target.value)
        
        }
    
    const createPost = (e) => {
        e.preventDefault()
        const post = {
            id : props.blogArr.length +1,
            title: postTitle,
            body : postBody


        
            

        }
        props.addNewBlogPost(post)     
        props.handleHideForm()
    }
    useEffect(()=> {
    const handleEscape = (e) => {
        if(e.key === 'Escape') {
            props.handleHideForm()
        }
    };
    window.addEventListener('keyup' , handleEscape) 
        
    return() =>window.removeEventListener('keyup' , handleEscape)
}, [props])




    const handleHideForm = props.handleHideForm
    return (
        <>
             <form 
                 className="form" 
                onSubmit={createPost}>
            <button 
                onClick={handleHideForm} 
                className='closeForm__btn'>
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
                onChange={handlePostTitleChange}
                required/>
            </div>
            <div>
                <label>Описание</label>
                <textarea 
                required
                 minLength='1'
                 maxlength="1000"
                name='postBody'
                placeholder='Описание поста'
                value={postBody}
                onChange={handlePostBodyChange}/>
            </div>
            <div>
            <button 
                className="form__btn"
                type='submit'>Добавить пост</button>
            </div>
            </form>
            <div 
                onClick={handleHideForm} 
                className='overlay'></div>
        </>
            
    )
}
   
