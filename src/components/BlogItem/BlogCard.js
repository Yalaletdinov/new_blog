import React from 'react'
import './BlogCard.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


export const BlogCard = ({ 
    title,
    body,
    deletePost,
    handleEditForm,
    handleSelectedPost
}) => {

    
        const [link, setLink] = useState("");
            useEffect(() => {
        const fetchLink = async () => {
        const response = await axios("https://picsum.photos/396/150");
            setLink(response.request.responseURL);
          };
          fetchLink();
        }, []);

        const showEditForm = () => {
            handleSelectedPost();
            handleEditForm();
        }
        
        return (
        <>
        <div className="post">
            <img alt="link" src={link}></img>
            <h2>{title}</h2>
            <p>{body}</p>
            <button className='editBtn' 
            onClick={showEditForm}>
                <EditIcon/>
            </button>
            <button className='delete'
            onClick={deletePost}>
                <DeleteForeverIcon/>
            </button>
        </div>
        </>

    )
}