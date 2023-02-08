import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SecondBlog.css'
import { EditPostForm } from '../EditPostForm/EditPostForm';
import { AddPostForm } from '../AddPostForm/AddPostForm';
import { BlogCard } from '../BlogCard/BlogCard';



export const SecondBlog =() => {

    const [selectedPost, setSelectedPost] = useState({})
    const [showEditForm, setShowEditForm] = useState(false)
    const [data, setData] = useState([])
    const [showAddForm, setShowAddForm] = useState(false)

    useEffect(()=> {
      getUsers();
    }, [])

    
      
   async function getUsers() {
      
    await  axios.get('https://63dfc7d759bccf35dab98c9e.mockapi.io/posts')
      .then((res) => {
        console.log('Получение данных' , res.data)
        setData(res.data)
      })
      .catch((err)=> {
        console.log(err)
    })

  }
  const postData =  (data) => {
     
    axios.post('https://63dfc7d759bccf35dab98c9e.mockapi.io/posts/', data)
      .then((res) => {
        console.log('Отправка данных', res.data)
    getUsers()
      })
   .catch((err) => {
        console.log(err)
  })
}

  const editData = (updateData) => {
    axios.put(`https://63dfc7d759bccf35dab98c9e.mockapi.io/posts/${updateData.id}`, updateData)
    .then((res) => {
      console.log('Отредактирован', res.data)
    getUsers()
    })
    .catch((err) => {
      console.log(err)
})
  }

  const postDelete = (data) => {
    if(window.confirm(`Удалить пост?${data.title}`)) {
     axios.delete(`https://63dfc7d759bccf35dab98c9e.mockapi.io/posts/${data.id}`)
    .then((res) => {
      console.log('Пост удален', res)
     getUsers()
    })
    .catch((err)=> {
      console.log(err)
   
  })
  }
}

  const handleShowAddForm = () => {
    setShowAddForm(true)
    }

  const handleHideAddForm = () => {
    setShowAddForm(false)
    
    }
  const handleAddEditForm =() => {
    setShowEditForm(true)
      
  }
  const handleHideEditForm =() => {
    setShowEditForm(false)
      
  }
  const handleSelectedPost = (arr) => {
    setSelectedPost(arr)
    
}

 
  const arr = data.map((data,id) =>{
    return (

      <BlogCard
        key={id}
        title={data.title}
        body={data.body}
        postDelete={()=> postDelete(data)}
        handleAddEditForm={handleAddEditForm}
        handleSelectedPost={()=> handleSelectedPost(data)}/>
      )
    })
    return (
    <>
    {showAddForm ? 
      <AddPostForm 
        data={data}
        handleHideAddForm={handleHideAddForm}
        postData={postData}/>
        :null

        }
    {showEditForm && (
        <EditPostForm
        editData= {editData}
        handleHideEditForm={handleHideEditForm}
        selectedPost={selectedPost}/>
        )}
      
      <div className='secondBlog'>
         <h1>Второй блог</h1>
      <button className='newBlog__btn'
        onClick={handleShowAddForm}>Cоздать пост
      </button>
      <div className='myPosts'>
        {arr}
        </div>
        
      </div>
         
       
      </>
       
      )}
        
  