import Link from "next/link";
import Image from "next/image";
import { lottery, donation} from "../data";

export default function Hero() {
  return (
    <section className="flex flex-col h-[80%] items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">

        <Image src={lottery} alt="Lottery Winner" width={400} height={300}/>

      <h1 className="text-4xl md:text-5xl font-bold py-2 mb-4">
        Helping People, One Gift at a Time
      </h1>

      <p className="text-lg text-gray-300 mb-6 max-w-xl">
       I was fortunate enough to win the lottery and after taking sometime to process everything, I decided to help humanity and use the winnings to help those in need. At first i wanted to stay completely private , but i realized this kind of opportunity could make a real difference in people's lives.   there are so many people going through tough times right now, and if i can helpin anyway i truly want to.
      </p>

      <Link href="https://www.megamillions.com/Winners-Gallery/2026/Unreal-feeling-for-Illinois-jackpot-winner.aspx">
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

      <h1 className="text-4xl md:text-5xl font-bold mb-4 py-2">Donation</h1>
      <Image src={donation} alt="Donation" width={400} height={300}/>
    </section>
  );
}