import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
} from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { heroSlides } from "../../data/heroSlides";
import HeroSlide from "./HeroSlide";

const HeroSlider = () => {
    return (
        <section className="relative">

            {/* Custom Previous Button */}
            <div className="hero-prev">
                <ChevronLeft size={28} strokeWidth={2.5} />
            </div>

            {/* Custom Next Button */}
            <div className="hero-next">
                <ChevronRight size={28} strokeWidth={2.5} />
            </div>

            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    EffectFade,
                ]}
                effect="fade"
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
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