import JobCards from "./components/JobCards";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Sidebar />; */}
      <Hero />
      <JobCards />

      <Footer />
    </>
  );
}

export default App;
