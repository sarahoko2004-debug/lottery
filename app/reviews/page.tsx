import Image from "next/image";
import { StaticImageData } from "next/image";
import {  Aa , Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Ll, Mm, Nn, Oo} from "../data";

type Testimony = {
  name: string;
  country: string;
  message: string;
   image:  StaticImageData ;
};


const testimonies: Testimony[] = [
  {
    name: "Scott K.",
    country: "Alaska",
    message:
      "This support helped me pay my kids’ school fees when I was struggling financially. I no longer have to worry about missing tuition deadlines, and it has really given my family peace of mind.",
    image: Bb,
  },
  {
    name: "David O.",
    country: "Texas",
    message:
      "During a very challenging time, I received unexpected help from this initiative. It allowed me to cover urgent bills and focus on rebuilding my life. I’m truly grateful for this opportunity.",
    image: Ee,
  },
  {
    name: "Mario L.",
    country: "Pennsylvania",
    message:
      "The process was simple and transparent, and I felt supported every step of the way. Thanks to this help, I was able to solve a major financial problem without added stress.",
    image: Aa,
  },
  {
    name: "James T.",
    country: "Georgia",
    message:
      "I was able to fix my small business after receiving support from this initiative. The assistance made a real difference, helping me keep employees and continue serving my customers.",
    image: Dd,
  },
  {
    name: "Alex S.",
    country: "Tennessee",
    message:
      "This came at the perfect time when my family needed it most. It helped us cover essential expenses, and I can’t thank the team enough for the timely support and guidance.",
    image: Cc,
  },
  {
    name: "Clara M.",
    country: "New Mexico",
    message:
      "At first, I was unsure if the program was real, but it truly was. The support I received helped me pay bills that were piling up and gave me hope during a stressful period.",
    image: Ff,
  },
  {
    name: "Fatima A.",
    country: "California",
    message:
      "The assistance helped me cover urgent medical expenses for my family. Without this support, things would have been extremely difficult. I’m very thankful for this initiative.",
    image: Gg,
  },
  {
    name: "John P.",
    country: "Alaska",
    message:
      "This initiative is genuine and reliable. It allowed me to stabilize my finances and focus on getting back on my feet. The support truly made a meaningful difference in my life.",
    image: Hh,
  },
  {
    name: "Green N.",
    country: "Colorado",
    message:
      "I used the funds to support my education and continue pursuing my degree. It was a huge relief, and I am grateful for the opportunity to stay focused on my studies.",
    image: Ii,
  },
  {
    name: "Michael B.",
    country: "South Carolina",
    message:
      "The process was transparent, and the help I received was timely and impactful. I was able to address some urgent needs and feel more secure about the future.",
    image: Oo,
  },
  {
    name: "Linda R.",
    country: "Florida",
    message:
      "This support helped me during a sudden financial emergency. I was able to pay essential bills and prevent further complications, which gave me peace of mind.",
    image: Mm,
  },
  {
    name: "Chen W.",
    country: "Ohio",
    message:
      "The help I received made a significant difference in my situation. It allowed me to cover basic expenses while I worked on stabilizing my financial standing.",
    image: Nn,
  },
  {
    name: "Ahmed H.",
    country: "Arizona",
    message:
      "I am incredibly thankful for this initiative. It helped me support my family and handle unexpected challenges without feeling overwhelmed. Truly life-changing.",
    image: Ll,
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        Beneficiary Testimonials
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonies.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
             <Image src={t.image} alt={t.name} width={200} height={100} className="rounded-2xl"/>

            <p className="text-gray-700 mb-4 py-2">"{t.message}"</p>

            <div className="mt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.country}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-red-500 mt-10">
        ⚠️ We never never let humanity down.
      </p>
    </div>
  );
}