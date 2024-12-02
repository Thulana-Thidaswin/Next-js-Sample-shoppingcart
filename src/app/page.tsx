import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
      <section>
        <div>
          <div className="bg-gray-100">
            <div className="max-w-[1440px] p-8 mx-auto lg:flex lg:flex-row flex-wrap">
              <div className="lg:w-[50%] text-black h-[50%] m-auto">
                <h1 className="text-5xl font-bold mb-5">Welcome to Thulana's Computer Shop</h1>
                <p className="text-xl">We sell the best computers in the world</p>
                <Link href="/products">
                  <button className="bg-red-500 text-white px-4 py-2 mt-4 mb-5">View Products</button>
                </Link>
              </div>
              <div className="w-[50%]">
                <Image src="/images/JAY.png" width={500} height={500} alt="computer-shop" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
