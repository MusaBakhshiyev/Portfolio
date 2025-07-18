import style from "./PortfolioDetail.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PortfolioDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const project = location.state?.project
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1 onClick={() => navigate("/")}>Home Page</h1>
                <h1>{project.name}</h1>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.3}
                pagination={{ clickable: true }}
                loop={true}
                coverflowEffect={{
                    rotate: 55,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className={`mySwiper ${style.swiper}`}
            >
                {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`project image`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={style.info}>
                <h1>Used Technologies: {project.technologies.join(", ")}</h1>
                <p>{project.info}</p>
            </div>

        </div>
    )
}

