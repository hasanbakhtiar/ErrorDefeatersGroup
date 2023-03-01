import { v4 as uuid } from 'uuid';

export const addBlog =({ctitle,cdesc,cphoto})=>({
    type:"ADD_BLOG",
    myblog:{
        id:uuid(),
        title:ctitle,
        desc:cdesc,
        photo:cphoto
    }
})


export const editBlog =()=>({
    type:"EDIT_BLOG"
})

export const removeBlog =({comingid})=>({
    type:"REMOVE_BLOG",
    myid:comingid
})