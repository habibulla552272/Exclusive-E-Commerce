import React from 'react'

const HomelatesCommponent = (props) => {
  return (
    <section>
        <div className='container mx-auto'>

            <div>
                <div className='flex justify-center py-4'>
                <img src={props.image} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold py-2 text-center'>{props.Heading}</h2>
                    <p className='text-xl font-thin text-center'>{props.detail}</p>
                    
                </div>

            </div>
           
        </div>
    </section>
  )
}

export default HomelatesCommponent
