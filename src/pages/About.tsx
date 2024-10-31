import aboutImage from "../assets/images/about-image.png"

const About = () => {
  return ( 
    <div className="py-[70px] flex flex-col gap-10"> 
      <div className="w-full">
        <img 
          src={aboutImage} 
          alt="Description of the image"
          className="w-full object-center" 
        />
      </div>
      <div className="flex flex-col gap-8 px-5">
        <h1 className="text-4xl font-bold">
          Dont squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉).
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="bg-orange-300/80 p-10 flex flex-col gap-8 items-start rounded-md">
          <h1 className="text-3xl font-bold">Your destination is waiting. Your van is ready.</h1>
          <button className="rounded-lg bg-black text-white py-2 px-4">Explore our vans</button>
        </div>
      </div>
    </div>
   );
}
 
export default About;