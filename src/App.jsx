import NewsLetter from './components/newsletter';
import BizimBlog from './components/BizimBlog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NIE from './components/NIE';
import Navbar from './components/Navbar'
import Tərəfdaşlar from './components/Tərəfdaşlar';
import Kateqoriya from './components/Kateqoriya';
import Haqqimizda from './components/Haqqimizda';
import Startuplar from './components/Startuplar';
import BizeQatilin from './components/BizeQatilin';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NIE />
      <Kateqoriya/>
      <Startuplar />
      <Tərəfdaşlar />
      <BizeQatilin />
      <Haqqimizda />
     
      
      <BizimBlog />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
