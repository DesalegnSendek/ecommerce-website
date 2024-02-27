import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="navigator">
            <div className="nav-box">Description</div>
            <div className="nav-box" id='fade'>Reviews (124)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 At vero eaque, vel provident minima, esse veritatis, 
                 repellat reiciendis possimus eos reprehenderit. Eius,
                  vel veniam dolor culpa voluptatibus sequi eligendi 
                  molestiae?</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Laborum aperiam debitis reprehenderit dicta unde, officiis 
                     a amet iusto, tenetur fugit ab? Adipisci ratione sequi porro 
                     doloribus facilis, asperiores magni aspernatur.</p>
        </div>
    </div>
  )
}
export default DescriptionBox