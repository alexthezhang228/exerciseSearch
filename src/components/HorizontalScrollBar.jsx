import React from 'react';


import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";


const HorizontalScrollbar = ({ data, setBodyPart, bodyPart,isBodyParts }) => {
  return (
    <section>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        pagination={{clickable: true}}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        {data.map((item)=>{
          return (
          
// {isBodyParts?<SwiperSlide key={item.id || item}><BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/></SwiperSlide>:<ExerciseCard item={item}/>}
            <section>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {data.map((item) =>
                isBodyParts ? (
                  <SwiperSlide key={item.id || item}>
                    <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={item.id || item}>
                    <ExerciseCard exercise={item} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </section>
          )
        })}
      </Swiper>
    </section>
  )}
  

  
    
    //       <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} className="swiper-slide"/>


    


export default HorizontalScrollbar