import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PropTypes from "prop-types";
import Slider from "react-slick";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

function Carousel({ images, settings }) {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ...settings,
  };

  return (
    <Box position="relative" height="xl" width="full" overflow="hidden">
      {images.length > 1 && (
        <>
          <IconButton
            aria-label="left-arrow"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
            icon={<BsArrowLeft />}
          />
          <IconButton
            aria-label="right-arrow"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
            icon={<BsArrowRight />}
          />
        </>
      )}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image) => (
          <Box key={image}>
            <Image src={image} width="full" height="xl" objectFit="cover" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

// console.log(Slider.propTypes);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  settings: PropTypes.shape(Slider.propTypes),
};

export default Carousel;
