import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import myImg from "../../public/beautiful-girls-are-playing-yoga-park.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getYoga } from "../redux/slices/YogaSlice";
import YogaSection from "./YogaSection";
import YogaWellnessCard from "../comp/YogaWellnessCard";

function Home() {
  const dispatch = useDispatch();
  const { Yoga } = useSelector((state) => state.Yog);

  useEffect(() => {
    dispatch(getYoga());
  }, [dispatch]);

  return (
    <>
      <Navbar />

     
      <div className="relative flex items-center justify-center h-[600px] sm:h-[500px] md:h-[700px] lg:h-[800px]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${myImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Welcome to Our Site!</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Find your Naturopathy & Neurotherapy here.
          </p>
        </div>
      </div>

      <div className="px-4 py-10 mx-auto max-w-7xl">
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Naturopathy & Neurotherapy Listings</h1>
          <p className="mt-2 text-sm text-gray-700 sm:text-base">
            Find your next Naturopathy & Neurotherapy
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Available Naturopathy & Neurotherapy
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Yoga.map((Yog) => (
              <YogaWellnessCard key={Yog.id} Yog={Yog} />
            ))}
          </div>
        </div>
      </div>

      <YogaSection />
      <Footer />
    </>
  );
}

export default Home;
