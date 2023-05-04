import React from 'react';
import Animation from '../../../public/animation.json';
import Lottie from 'lottie-react';


const TextImg = () => {
    return (


        <div class="bg-yellow-100 mt-10 container mx-auto">

            <div class="mx-auto container px-4 py-8 md:py-12 md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <Lottie animationData={Animation}></Lottie>
                </div>
                <div class="md:w-1/2 md:pl-8">
                    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-700">Bored or Hungry?</h2>
                    <p class="text-pink-700 mb-4 font-serif font-semi-bold">Quick recipes are perfect for busy individuals who are short on time but still want to enjoy a delicious meal. These recipes typically require minimal ingredients and can be prepared in under 30 minutes. Quick recipes are often simple, yet satisfying, and can range from salads and sandwiches to stir-fries and pastas. Whether you're looking to whip up a quick lunch or dinner, quick recipes are a convenient and tasty option.</p>
                    <a href="#" class="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Quick Recipes</a>
                </div>
            </div>

            <div>

            </div>

        </div>
    );
};

export default TextImg;