export const settingSlider = {
  speed: 500,
  dots: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
}
