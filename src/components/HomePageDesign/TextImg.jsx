import React from 'react';
import Animation from '../../../public/animation.json';
import Lottie from 'react-lottie';
const TextImg = () => {
    return (
        <div>
            
            <Lottie animationData={Animation}/>

        </div>
    );
};

export default TextImg;