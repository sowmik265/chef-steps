import React from 'react';


const Carousel = () => {

    return (
        <div>

            <div className="carousel w-full bg-yellow-400 mt-10 mx-10 container">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex flex-col md:flex-row container'>
                        <img src="https://i.ibb.co/n68ydJn/pexels-leonardo-luz-14785920.jpg" className="w-full md:w-2/4 m-4" />
                        <p className='m-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rerum autem facilis rem dolore exercitationem repudiandae. Harum fuga laudantium animi deleniti aliquid! Qui dolorum, hic eaque doloribus itaque quibusdam voluptate.</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-transparents">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Carousel;