import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50"
    >
      <img
        src="./src/assets/profile.png"
        alt="profile"
        className="w-28 h-28 rounded-full shadow-md mb-6"
      />
      <h2 className="text-lg text-gray-600">
        Hi! I’m <span className="font-semibold">Zulpadli Syarif Harahap</span>{" "}
        👋
      </h2>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
        Fullstack Developer • Data Analyst <br />
        <span className="text-indigo-600">Based in Yogyakarta</span>
      </h1>
      <p className="mt-6 max-w-2xl text-gray-600">
        I am a frontend developer from Medan, Indonesia with 2 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="mt-8 flex space-x-4">
        <Button className="bg-black hover:bg-gray-800 text-white">
          Connect with me
        </Button>
        <Button variant="outline">My Resume</Button>
      </div>
    </section>
  );
}

export default Hero;
