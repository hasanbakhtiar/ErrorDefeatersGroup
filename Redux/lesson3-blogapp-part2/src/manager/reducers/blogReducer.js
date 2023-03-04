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


    default:
      return state;
  }
}
