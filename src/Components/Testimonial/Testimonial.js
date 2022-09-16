import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar11.jpg";
import AVTR2 from "../../assets/avatar22.jpg";
import Barun from "../../assets/Barun.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client_name">Prof. Dr. Shazzad Hossain</h5>
          <small className="client_review">
            I know Oahid Zihad as he took Artificial Intelligence course with
            me. He is bright and highly motivated person. His sincerity and
            timeliness in meeting deadlines were praiseworthy. He has also good
            grasp in software engineering techniques and different front end and
            back end frameworks. I wish his success in life.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="client_name">Debashish Paul</h5>
          <small className="client_review">
            As I remember, Zihad was a very productive person and is a
            multi-skilled person with vast knowledge. Zihad is careful,
            proactive, self motivated and intelligent team player.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={Barun} alt="" />
          </div>
          <h5 className="client_name">Barun Bhattacharjee</h5>
          <small className="client_review">
            Zihad is a proactive learner who works dedicatedly and quickly
            finishes his work within the deadline. I got a very good experience
            working with him. His efforts for his team are truly commendable. I
            strongly recommend him.
          </small>
        </SwiperSlide>
        {/* <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="client_name">Prof. Shazzad</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            consequuntur at provident dolore fugiat nesciunt perspiciatis soluta
            laborum culpa explicabo.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className="client_name">Prof. Shazzad</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            consequuntur at provident dolore fugiat nesciunt perspiciatis soluta
            laborum culpa explicabo.
          </small>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Testimonial;
