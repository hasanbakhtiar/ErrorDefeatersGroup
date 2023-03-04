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


// export const editBlog =({blogid,blogupdate})=>({
//     type:"EDIT_BLOG",
//     id:blogid,
//     update:blogupdate
// })

export const editBlog =(id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
})

export const removeBlog =({comingid})=>({
    type:"REMOVE_BLOG",
    myid:comingid
})