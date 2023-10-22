import About from './components/Tərəfdaşlar';
import BizimBlog from './components/BizimBlog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import ScrollComponent from './components/ScrollComponent';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <ScrollComponent/> */}
      <BizimBlog />
      <Footer />
    </>
  );
}

export default App;
