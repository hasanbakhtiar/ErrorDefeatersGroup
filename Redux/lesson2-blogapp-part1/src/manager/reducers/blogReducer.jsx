const blog = [];

export const blogReducer = (state=blog, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.myblog];

    case "REMOVE_BLOG":
      return state.filter(({id})=>{
        return id !== action.myid
      });


    case "EDIT_BLOG":
      return 'edit blog';


    default:
      return state;
  }
}
