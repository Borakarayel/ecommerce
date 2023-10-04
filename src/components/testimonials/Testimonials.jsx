import css from "./Testimonials.module.css";
import Hero2 from "../../assets/Hero2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <>
      <a className="anchor" id="reviews"></a>

      <div className={css.testimonials}>
        <div className={css.wrapper}>
          <div className={css.container}>
            <span>Top Rated </span>
            <span>Organic Certified Products Only</span>
          </div>
          <img src={Hero2} alt="" />
          <div className={css.container}>
            <span>100k </span>
            <span>Happy Customers</span>
          </div>
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
              856: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {TestimonialsData.map((comment, i) => (
              <SwiperSlide>
                <div className={css.testimonial}>
                  <img src={comment.img} alt="" />
                  <span>{comment.comment}</span>
                  <hr />
                  <span>{comment.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
