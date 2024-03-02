import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';

const WorkTogether = () => {
    // const [carouselData, setCarouselData] = useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://api.github.com/repos/TanStack/query').then((res) =>
            res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    

    return (
        <div className="md:flex gap-4">
            <div className="flex-1">
                <h1 className="text-[#050038] text-5xl font-bold">Work together, wherever you work</h1>
                <p className="text-[#050038]">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div className="flex items-center "><button className="text-[#4262FF]">Learn more</button>
                    <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span></div>
            </div>

            <div className="flex-1 border border-red-700 ">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {carouselData.map(item => (
                        <SwiperSlide key={item.id}>
                            <img className="h-96 w-64 object-cover rounded-2xl" src={item?.image_url} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default WorkTogether;
