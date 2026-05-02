import Link from "next/link";
import Image from "next/image";
import { lottery, donation} from "../data";

export default function Hero() {
  return (
    <section className="flex flex-col h-[80%] items-center justify-center text-center px-6 py-20  bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white">

        <Image src={lottery} alt="Lottery Winner" width={400} height={300}/>

      <h1 className="text-4xl md:text-5xl font-bold py-2 mb-4">
        Helping People, One Gift at a Time
      </h1>

      <p className="text-lg text-gray-300 mb-6 max-w-xl">
      After winning the lottery, I took some time to reflect on what it really means and how I want to move forward. I’ve come to a clear decision: I want to use this opportunity to support people in need.

Initially, I intended to stay completely private. However, I’ve realized that an opportunity like this can create real, meaningful change. Many people are facing difficult challenges, and if I’m in a position to help, I feel a responsibility to do so.
</p>

      <Link href="https://www.megamillions.com/News/2026/Lucky-Georgian-Welcomes-the-New-Year-by-Claiming-H.aspx">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
          
          Learn More About My Story
        </button>
      </Link>

      <div className="mt-12 grid gap-4 text-gray-300">
        <h1 className="text-2xl font-bold">How we choose our recipients</h1>
        <p>1. We select Randomly</p>
        <p>2. We Review</p>
        <p>3. You Receive Support</p>
      </div>

      
    </section>
  );
}