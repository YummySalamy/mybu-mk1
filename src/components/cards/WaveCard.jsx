import React from "react";
import "./assets/WaveCard.css";

const WaveCard = ({ 
    title="Title",
    description="Description",
    buttonLabel="Button",
    onButtonClick=() => {
        alert("Button clicked");
    }
}) => {
    return (
        
        <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        

            <div class="infotop">
                {title}
                <div class="name">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default WaveCard;
