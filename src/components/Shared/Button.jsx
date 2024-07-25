import React from 'react'

const Button = ({text,bgcolor,textColor,
    handler=()=>{}}


) => {
  return (
    <button onClick={handler}
     className={`${bgcolor} ${textColor} cursor-pointer hover:scale-125 duration-300 py-2 px-5 rounded-full relative z-10 `}>
        {text}


    </button>
  )
}

export default Button