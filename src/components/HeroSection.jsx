import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Building Sets');
  const [isToggle, setIsToggle] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef(null);

  const navigationTabs = [
    { id: 'building', label: 'Building Sets', active: true },
    { id: 'digital', label: 'Digital Building', active: false },
    { id: 'creative', label: 'Creative Play', active: false }
  ];

  const slides = [
    { id: 1, image: "/images/z1.png" },
    { id: 2, image: "/images/z2.png" },
    { id: 3, image: "/images/z3.png" },
    { id: 4, image: "/images/z4.png" },
    { id: 5, image: "/images/z5.png" },
  ];

  // Handle responsive behavior
  useEffect(() => {
    setIsClient(true);
    
    const checkScreenSize = () => {
      setIsToggle(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };



  // Don't render until client-side hydration is complete
  if (!isClient) {
    return <div className="h-[600px] bg-gray-100"></div>; // Placeholder
  }

  return (
    <section className="relative bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
        
        {/* Navigation Pills */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 w-full max-w-md bg-[#c7d8f0] rounded-full shadow-lg border border-gray-200">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.label)}
                className={`flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.label
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Slider Content */}
        <div className="relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 press-start-2p-regular">
              A <span className="text-[#FFD502] bg-[#f9f5df] p-2 rounded-2xl border border-[#FFD502]">Gift</span> as Creative as They Are
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="w-full max-w-md mx-auto">
              <Swiper
                key={`swiper-${isToggle}`} // Force re-initialization when toggle changes
                ref={swiperRef}
                effect={isToggle ? 'slide' : 'cards'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                cardsEffect={!isToggle ? {
                  perSlideOffset: 30,
                  perSlideRotate: 15,
                  rotate: true,
                  slideShadows: false,
                } : undefined}
                modules={[EffectCards, Navigation, Pagination, Autoplay]} // Always include all modules
                className="mySwiper w-[311px] h-[516px]"
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="w-80 h-80 bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                ))}
              </Swiper>
            </div>
          </div>

          {/* CTA Text and Button */}
          <div className="text-center mt-8 px-4 sm:px-8 md:px-16 lg:px-52">
            <p className="text-sm sm:text-base font-[400]">
              Can't decide on the perfect set? Let them choose their own adventure with a LEGO® Gift Card.
              From epic builds to tiny treasures, they'll get exactly what they love—when they want it.
              No stress, no guesswork, no expiration date. Just pure, build-it-your-way joy.
            </p>
            <button className="bg-blue-600 mt-4 text-white px-6 sm:px-12 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Make Their Day
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;