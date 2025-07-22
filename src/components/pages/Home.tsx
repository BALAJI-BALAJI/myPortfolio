import  Header from "../shared/Header";
import profile from "../../assets/profile.png";


const Home = () => {
  return (
    <>
    <Header />
      <main className="min-h-screen bg-black  text-white flex flex-row items-center justify-around px-4 md:px-20 py-12">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-4 md:max-w-[50%]">
          <h2 className="text-3xl font-bold">Hello,</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            I'm <span className="text-purple-500">Balaji</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-bold">Front-End Developer</h3>
          <button className="mt-6 bg-purple-500 hover:bg-purple-600 transition-colors duration-300 px-6 py-3 text-lg font-bold rounded-xl shadow-lg hover:shadow-purple-500/30">
            Hit Me Up!
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src={profile}
            alt="Balaji's Profile"
            className="w-64 md:w-80 h-auto max-h-[720px] object-cover rounded-[160px] shadow-xl border-2 border-purple-500/20"
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
