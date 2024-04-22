import { Swiper, SwiperSlide } from "swiper/react";
export const SlideHome = () => {
  const data = [
    {
      id: 1,
      title:
        "https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title:
        "https://media.istockphoto.com/id/1305674723/pt/vetorial/10-off-yellow-banner-with-ten-percent-discount-on-a-black-balloon-for-mega-big-sales.jpg?s=2048x2048&w=is&k=20&c=71aKvRzsoClQ4yAOxQGFnoH54i2S_YtlYodkWsEOod4=",
    },
    {
      id: 3,
      title:
        "https://media.istockphoto.com/id/1262703823/pt/vetorial/last-minute-limited-offer-with-clock-for-sale-promo-button-logo-or-banner-or-red.jpg?s=2048x2048&w=is&k=20&c=qTCP4IYoDzUxVqSon6Ir1ATJSMfcEvLLGQwJng3kDz0=",
    },
    {
      id: 4,
      title:
        "https://media.istockphoto.com/id/1591657784/pt/foto/selfie-smile-and-black-woman-with-shopping-bags-or-fun-sale-in-studio-on-grey-background-in.jpg?s=2048x2048&w=is&k=20&c=UBlLtuJ2Tmkns3rkFFeXXlWXxs4GbYduYPHTuURjbe0=",
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      loop
      className="-z-10"
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.title}
            alt="Images"
            className=" w-full h-[450px] rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
