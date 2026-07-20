import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        What Our Clients Say
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        Trusted by industries through quality engineering,
                        reliable manufacturing and long-term partnerships.
                    </p>

                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={40}
                >

                    {testimonials.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className="rounded-3xl bg-white shadow-xl p-12 text-center">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-blue-600"
                                />

                                <div className="flex justify-center gap-1 mt-6">

                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={20}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}

                                </div>

                                <p className="mt-8 text-xl leading-9 text-slate-600 italic max-w-3xl mx-auto">
                                    "{item.review}"
                                </p>

                                <h3 className="mt-8 text-2xl font-bold">
                                    {item.name}
                                </h3>

                                <p className="text-slate-500">
                                    {item.position}
                                </p>

                                <p className="text-blue-600 font-semibold mt-1">
                                    {item.company}
                                </p>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
};

export default Testimonials;