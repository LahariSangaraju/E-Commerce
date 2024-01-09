import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people 
                to buy and sell physical goods, services, and 
                digital products over the internet rather than at 
                a brick-and-mortar location. Through an e-commerce 
                website, a business can process orders, accept payments, 
                manage shipping and logistics, and provide customer service.</p>
                <p>
                An e-commerce website typically showcases a range of products 
                or services with detailed descriptions, prices, images, and 
                sometimes reviews, enabling users to browse, select, and make 
                purchases electronically. It also often includes features like 
                shopping carts, secure payment gateways, and account management 
                for a seamless buying experience.</p>
        </div>
    </div>
  )
}
