import RightArrow from "../Assets/SVG/-_.svg";
import LeftArrow from "../Assets/SVG/leftArrow.svg";
import Image from 'next/image';
import Merch from "../Assets/Images/Merch.png"
export default function Home()
{
  return (
    <main>
      <div>
        <div className="m-4 font-satoshi text-base font-medium">OUR MERCH</div>
        <div className="flex gap-40 items-center justify-between m-4 text-7xl">
          <div className="font-satoshi font-medium">
            Merch <span className="font-fraunces font-semibold italic">Improving</span> The Look
          </div>
          <div className="flex gap-4">
            <div className="bg-zinc-100	p-3 w-12 rounded-full">
              <LeftArrow /> 
            </div>
            <div className="bg-black p-3 w-12 rounded-full">
              <RightArrow />
            </div>
          </div>
        </div>
        <div className="m-4 flex gap-2">
          <button className="border border-black rounded-3xl p-1 font-noigrotesk font-medium  ">
            ALL
            <span className="text-xs font-semibold">65</span>
          </button>
          <button className="border border-black rounded-3xl p-1 font-noigrotesk font-medium">
            WINTERS COLLECTIONS
            <span className="text-xs font-semibold">65</span>
          </button>
          <button className="border border-black rounded-3xl p-1 bg-black text-white font-noigrotesk font-medium">
            NEW ARRIVALS
            <span className="text-xs font-semibold hidden">65</span>
          </button>
          <button className="border border-black rounded-3xl p-1 font-noigrotesk font-medium">
            BEST SELLERS
            <span className="text-xs font-semibold">65</span>
          </button>
          <button className="border border-black rounded-3xl p-1 font-noigrotesk font-medium">
              MEN'S COLLECTION
            <span className="text-xs font-semibold">65</span>
          </button>
          <button className="border border-black rounded-3xl p-1 font-noigrotesk font-medium">
              LUXURY COLLECTION
            <span className="text-xs font-semibold">65</span>
          </button>
        </div>
        <div className="w-80 m-4 flex gap-4">
          <Image src={Merch} alt="merch" className="rounded"/>
          <Image src={Merch} alt="merch" className="rounded"/>
          <Image src={Merch} alt="merch" className="rounded"/>
          <Image src={Merch} alt="merch" className="rounded"/>
        </div>
      </div>
    </main>
  )
}

