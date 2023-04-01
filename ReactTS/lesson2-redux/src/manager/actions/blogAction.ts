import database from '../../firebase/firebaseConfig';

export const addBlog = (blog:any) => ({
    type: "ADD_BLOG",
    blog
})

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch:any) => {
        const { title='', desc='',photo='' }:any = blogData;
        const blog = {title,desc,photo};

        database.ref("blogs").push(blog).then((res) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })  
    }
}

export const removeBlog = (id:any) => ({
    type: "REMOVE_BLOG",
    id: id
});

export const removeBlogFromDatabase = (id:any) => {
    return (dispatch:any) => {
        return database.ref(`blogs/${id}`).remove().then(() => {
            dispatch(removeBlog(id));
        })
    }   
}

export const editBlog = (id:number,updates:any) => ({
    type: "EDIT_BLOG",
    id,
    updates
})

export const editBlogFromDatabase = (id:number, updates:any) => {
    return (dispatch:any) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id,updates));
        })
    }
}

export const setBlogs = (blogs:any) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch:any) => {
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs:any[] = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}