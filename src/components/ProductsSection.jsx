import { ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    { id: 1, image: "/images/o1.png" },
     { id: 1, image: "/images/o2.png" },
    { id: 1, image: "/images/o3.png" },
    { id: 1, image: "/images/o4.png" },

  ];

  return (
    <section data-aos="fade-up" className="lg:p-12 md:p-6 sm:p-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 ">
        <h2 className="press-start-2p-regular    mb-2">
          Make Gifting as <span className="text-red-600">Fun as Building</span>
        </h2>
        
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=" cursor-pointer"
            >
              <div className=" flex flex-col items-center  rounded-xl p-6 h-[408px] w-[276px]  mb-4 shadow ">
<div className="w-[201px] p-2 h-[335px]">
  <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover hover:scale-105  transition-transform duration-300 ease-in-out"
                />
</div>
              

                <div className="flex items-center gap-2 ">
                View All <span className=""><ChevronRight /></span>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;