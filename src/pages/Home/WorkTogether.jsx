
import { IoIosArrowRoundForward } from "react-icons/io";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import { EffectCards } from 'swiper/modules';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosPublic from '../../Hooks/axiosPublic';

const WorkTogether = () => {
    // const [carouselData, setCarouselData] = useState([]);

    // const { data: Images = [], isPending, error } = useQuery({
    //     queryKey: ['Images'],
    //     queryFn: async () => {
    //         const res = await fetch('https://github.com/iamRazzakk/miro/blob/main/src/assets/Carusel.json');
    //         return res.data;
    //     },
    // });

    // if (isPending) return 'Loading...'

    // if (error) return 'An error has occurred: ' + error.message
    // console.log(Images)

    return (
        <div className="md:flex gap-4">
            <div className="flex-1">
                <h1 className="text-[#050038] text-5xl font-bold">Work together, wherever you work</h1>
                <p className="text-[#050038]">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div className="flex items-center "><button className="text-[#4262FF] underline">Learn more</button>
                    <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span></div>
            </div>

            {/* <div className="flex-1 border border-red-700 ">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {Images.map(item => (
                        <SwiperSlide key={item.id}>
                            <img className="h-96 w-64 object-cover rounded-2xl" src={item?.image_url} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
        </div>
    );
};

export default WorkTogether;
