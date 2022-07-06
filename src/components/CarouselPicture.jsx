import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from 'react-responsive-carousel'

function CarouselPicture(props) {
  return (
    <Carousel showThumbs={false} width={612} infiniteLoop={true} autoPlay>
      {props.galleryPictures.map((element) => {
        return (
          <picture>
            <img
              src={element['612x344']}
              alt="restqurqnt"
              width={612}
              height={344}
            />
          </picture>
        )
      })}
    </Carousel>
  )
}

export default CarouselPicture
