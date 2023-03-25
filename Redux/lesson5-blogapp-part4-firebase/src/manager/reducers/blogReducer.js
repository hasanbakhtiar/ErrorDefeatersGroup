const blog = [];

export const blogReducer = (state=blog, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.myblog];

    case "REMOVE_BLOG":
      return state.filter(({id})=>{
        return id !== action.id
      });


    case "EDIT_BLOG":
      return state.map(b=>{
        if (b.id === action.id) {
         return{
          ...b,
          ...action.update
         }
        }else{
          return b
        }
      });
      case "SET_BLOGS":
        return action.blogs;

    default:
      return state;
  }
}
