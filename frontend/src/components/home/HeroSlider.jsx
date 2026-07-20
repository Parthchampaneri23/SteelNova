import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { heroSlides } from "../../data/heroSlides";
import HeroSlide from "./HeroSlide";

const HeroSlider = () => {
    return (
        <section className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                className="hero-swiper"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlide slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;