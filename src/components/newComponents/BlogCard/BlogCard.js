
import './BlogCard.css'



export const BlogCard = ({
    id,
    title,
    body,
    handleAddEditForm,
    handleSelectedPost,
    postDelete

}) => {

    const showEditForms =() => {
        handleSelectedPost();
        handleAddEditForm()
    }

    return(
        <div className='myPost'>
        <h4>{title}</h4>
        <p>{body}</p>
        <button 
             className='delmyPost__btn' 
             onClick={() => postDelete(id)}>Удалить
        </button>
        <button 
             onClick={showEditForms} 
             className='updatemyPost__btn'>
                Редактировать пост
        </button>
        <div className='myPost__line'></div>
          </div>
          
      
    )

}