
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function HeaderItem({names,Icon}) {
  return (
  <>
    <div className='text-[15px] flex font-semibold cursor-pointer
     text-white items-center gap-3 hover:underline underline-offset-8 mb-2 mobiles:text-[10px]'>
   <Icon/>
   <h2 className=''>{names}</h2>
    </div></>
  )
}

export default HeaderItem
