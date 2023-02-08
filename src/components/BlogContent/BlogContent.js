import React from "react";
import { BlogCard } from "../BlogItem/BlogCard";
import './BlogContent.css'
import { Component } from "react";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import axios from "axios";

export class BlogContent extends Component {

state = {
    showEditForm:false,
    showAddForm: false,
    blogArr: [],
    selectedPost: {}
}

deletePost = pos => {
    if(window.confirm(`Удалить ${this.state.blogArr[pos].title} ?`)) {



    const temp = [...this.state.blogArr];
    temp.splice(pos, 1);

    this.state.blogArr.splice()
    
    this.setState({
        blogArr: temp
    })
   
}
};

handleShowAddForm = () => {
    this.setState({
        showAddForm: true
    })
}

handleHideForm = () => {
    this.setState({
        showAddForm: false
    })
}
handleEditForm =() => {
    this.setState({
        showEditForm: true
    })
}
handleHideEditForm =() => {
    this.setState({
        showEditForm: false
    })
}

handleSelectedPost = (blogpost) => {
    this.setState({
        selectedPost : blogpost
    })
}

addNewBlogPost =(blogPost) => {
    
    this.setState((state) => {
        const posts = [...state.blogArr];
        posts.push(blogPost);
    
        return {
            blogArr: posts
    }
    })

    this.handleHideForm()
}
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then((response) => {
        this.setState({
            blogArr: response.data
        })
    })
}
render() {

    const blogPosts = this.state.blogArr.map((item, pos)=> {
        
        return (
            
            <BlogCard
            key ={item.id}
            title={item.title}
            body={item.body}
            deletePost={()=> this.deletePost(pos)}
            handleEditForm={this.handleEditForm}
            handleSelectedPost={() => this.handleSelectedPost(item)}
            />   
            )   
        })

        return (
    <>
        {
        this.state.showAddForm ? <AddPostForm 
            blogArr={this.state.blogArr}
            addNewBlogPost={this.addNewBlogPost}
            handleHideForm={this.handleHideForm}/>
            :null
        }
        {
        this.state.showEditForm && (
            <EditPostForm
            handleHideEditForm={this.handleHideEditForm}
            selectedPost={this.state.selectedPost}
            editBlogPost={this.editBlogPost}/>
        )
      }
      
        
<>
        <div className="blogContent">
            <h1>Мой блог</h1>
            <button 
            className="blog__btn" 
            onClick={this.handleShowAddForm}>Создать пост</button>
            <div className="posts">
            {blogPosts}
            </div>
        </div>
    </>
      </>
        
        
    )
}

}