import React from 'react'
import HomelatesCommponent from './HomelatesCommponent'
import image1 from './HomeLastSectionImage/image1.png'
import image2 from './HomeLastSectionImage/image2.png'
import image3 from './HomeLastSectionImage/image3.png'

const HomeLastSection = () => {
  return (
<section>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between my-10'>

            <div className='' >
                <HomelatesCommponent image={image1} Heading="Free And Fast Delivery" detail='Free delivery for all orders over $140' />

            </div>
            <div className='' >
                <HomelatesCommponent image={image2} Heading="24/7 Coustomer Service" detail='Friendly 24/7 Customer support' />

            </div>
            <div className='' >
                <HomelatesCommponent image={image3} Heading="MONEY BACK  GUARA" detail='We reurn money within 30 days' />

            </div>



        </div>





    </div>
</section>
  )
}

export default HomeLastSection
