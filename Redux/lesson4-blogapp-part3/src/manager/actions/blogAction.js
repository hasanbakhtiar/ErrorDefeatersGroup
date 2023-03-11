import { v4 as uuid } from 'uuid';

export const addBlog =({title,desc,photo})=>({
    type:"ADD_BLOG",
    myblog:{
        id:uuid(),
        title,
        desc,
        photo
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