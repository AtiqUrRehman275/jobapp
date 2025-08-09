import heroImage from "../assets/job-search.svg"; // Adjust path as needed

const Hero = () => {
  return (
    <div className="bg-amber-400 text-black py-3 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Job with Crown Group
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Let’s grow, lead, and succeed—together with the Crown Group
          </p>
          {/* <div>
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white"
            />
          </div> */}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={heroImage}
            alt="Job search illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
