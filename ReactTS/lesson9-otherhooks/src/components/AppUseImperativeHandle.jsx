import  { forwardRef, useImperativeHandle, useRef } from 'react'


// function a (){
//     let b = 0;
//     function c(){
//         b+=1;
//     }
//     c();
//     return b
// }
// a();


const Myinput = forwardRef(
    (props,a)=>{
        useImperativeHandle(a,()=>({
            hi:sayHi,
        }))
        const sayHi=()=>{
            alert('hi')
        }
        
        return (
           <h1>my ref</h1>
        )
    }
)


const AppUseImperativeHandle = () => {
    
    const inputRef = useRef();
    const handleClick =()=>{
            inputRef.current.hi()
    }
   
  return (
    <div className='container mt-5'>
       <Myinput ref={inputRef}/>
       <button onClick={()=>{handleClick()}}>action</button>
    </div>
  )
}

export default AppUseImperativeHandle