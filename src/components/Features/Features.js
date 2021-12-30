import React from 'react'

function Features() {
    return (
        <div className='features__box row'>
            <div className='col-3'>
                
                <i class="fas fa-truck"></i>
                <h4>Free Shipping</h4>
                <p>Free Shipping on all IN orders or orders above 499</p>
                
            </div>
            <div className='col-3'>
            <i class="far fa-life-ring"></i>
            <h4>Support 24/7</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
            <div className='col-3'>
            <i class="fas fa-undo"></i>
            <h4>Cash on delivery</h4>
            <p>You can simply return products within 30 days for a exchange</p>
            </div>
            <div className='col-3'>
            <i class="fas fa-shield-alt"></i>
            <h4>Secure Payments</h4>
            <p>We assure you  100% secure payments</p>
            </div>
            
        </div>
    )
}

export default Features
