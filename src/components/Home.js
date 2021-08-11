import React from 'react'
import './Home.css'
import Part from './Part'

const Home = () => {
    return (
        <div className="home">
            <Part ani={"ani"} 
                title={"Model S"}  
                desc="Oreder Online for "
                descun="Touchless Delivery"
                bgimg={"/Images/models/model-s.jpg"}
                button1="Custom Order"
                button2="Existing Inventory"
            />
            <Part
                title="Model Y"  
                desc="Oreder Online for "
                descun="Touchless Delivery"
                bgimg={"/Images/modely/model-y.jpg"}
                button1="Custom Order"
                button2="Existing Inventory"
            />
            <Part
                title="Model 3"  
                desc="Oreder Online for "
                descun="Touchless Delivery"
                bgimg={"/Images/model3/model-3.jpg"}
                button1="Custom Order"
                button2="Existing Inventory"
            />
            <Part
                title="Model X"  
                desc="Oreder Online for "
                descun="Touchless Delivery"
                bgimg={"Images/modelx/model-x.jpg"}
                button1="Custom Order"
                button2="Existing Inventory"
            />
            <Part
                title="Solar Panels"  
                desc="Lowest Cost Solar Panels in America"
                bgimg={"/Images/solar-panels/solar-panel.jpg"}
                button1="Order Now"
                button2="Learn more"
            />
            <Part
                title="Solar Roof"  
                desc="Produce Clean Energy From Your Roof"
                bgimg={"/Images/solar-roof/solar-roof.jpg"}
                button1="Order Now"
                button2="Learn more"
            />
            
            <Part
                title="Accessories"  
                bgimg={"/Images/accessories/accessories.jpg"}
                button1="shop now"
            />
        </div>
    )
}

export default Home
