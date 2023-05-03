import React from 'react';


const Carousel = () => {

    return (
        <div>
            <p className='font-extrabold  text-5xl text-yellow-400 drop-shadow-2xl text-center mt-10'>History of American Foods !!</p>
            <div className="carousel h-auto w-full bg-yellow-400 mt-10 mx-auto container">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex flex-col md:flex-row container'>
                        <div className='border w-full md:w-1/2'>
                            <img src="https://i.ibb.co/YtnKy3K/abstract-1238657-960-720.jpg" className="w-full p-4 h-full" />
                        </div>
                        <div className='border w-full md:w-1/2 md:flex md:items-center md:justify-center'>
                            <p className='m-4 text-xl font-extrabold text-green-700'>American food history is a reflection of the country's diverse population and cultural influences. Native Americans relied on game, fish, and vegetables before European explorers introduced new crops like wheat and livestock. Industrialization led to mass-produced goods like canned foods and processed snacks. Immigrants from all over the world brought their own culinary traditions, leading to the creation of regional specialties like Cajun and Tex-Mex. Fast food became a popular American invention, with burgers, fries, and pizza being exported globally. Today, American cuisine continues to evolve, with a focus on fresh, locally-sourced ingredients and a celebration of multiculturalism in dishes like fusion cuisine and farm-to-table dining.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-transparents border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex flex-col md:flex-row container'>
                        <div className='border w-full md:w-1/2'>
                            <img src="https://i.ibb.co/cwdhtpK/1.jpg" className="w-full p-4 h-full" />
                        </div>
                        <div className='border w-full md:w-1/2 md:flex md:items-center md:justify-center'>
                            <p className='m-4 text-xl font-extrabold text-green-700'>One of the defining aspects of American food history is its connection to social and economic change. During times of war or economic hardship, food scarcity and rationing led to innovations like victory gardens and canned goods. The rise of fast food chains in the mid-20th century coincided with a growing car culture and an emphasis on convenience. However, concerns about health and the environment have led to a shift towards healthier, more sustainable food options in recent years. The farm-to-table movement, for example, focuses on supporting local farmers and reducing the environmental impact of food production.Overall, American food history is a reflection of the country's complex cultural and social landscape. From traditional dishes like apple pie and fried chicken to modern fusion cuisine, American food continues to evolve and reflect the changing tastes and values of its diverse population.</p>
                        </div>


                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='flex flex-col md:flex-row container'>
                        <div className='border w-full md:w-1/2'>
                            <img src="https://i.ibb.co/HKTXvfQ/bread-725874-960-720.jpg" className="w-full p-4 h-full" />
                        </div>
                        <div className='border w-full md:w-1/2 md:flex md:items-center md:justify-center'>
                            <p className='m-4 text-xl font-extrabold text-green-700'>Another important aspect of American food history is the role of technology and innovation in shaping the way we eat. The advent of refrigeration and canning in the 19th century made it possible to preserve and transport food over long distances, leading to a more diverse and global food market. Advances in agricultural technology have also transformed the way we produce and consume food, from the use of pesticides and fertilizers to the development of genetically modified crops.At the same time, technology has also allowed for new culinary innovations, from molecular gastronomy to plant-based meat substitutes. The rise of social media has also had a significant impact on the food industry, with food bloggers and influencers influencing trends and driving demand for new and exotic ingredients. As technology continues to evolve, it will undoubtedly play a crucial role in shaping the future of American food.</p>
                        </div>


                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent border-none">❯</a>
                    </div>
                </div>
            </div>

        </div>




    );
};

export default Carousel;