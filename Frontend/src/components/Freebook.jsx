import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://booklabs.onrender.com/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            <p>
              📚 Access Free Books Online – Just Login & Read! At BookLabs
              Online.
            </p>
            <p>
              we believe that knowledge should be accessible to everyone! Enjoy
              a vast collection of free books across various genres, including
              fiction, non-fiction, self-improvement, and more. Simply log in to
              explore and start reading instantly.
            </p>
            ✨ Why Join? ✅ Unlimited access to free books ✅ Wide range of
            genres to choose from ✅ New books added regularly 📖 Sign up now
            and dive into the world of books – absolutely free! 🚀
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
