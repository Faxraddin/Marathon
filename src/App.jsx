import BizeQatilin from './components/BizeQatilin';
import BizimBlog from './components/BizimBlog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NIE from './components/NIE';
import Navbar from './components/Navbar'
import Tərəfdaşlar from './components/Tərəfdaşlar';
import Kateqoriya from './components/Kateqoriya';
import Haqqimizda from './components/Haqqimizda';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NIE />
      <Tərəfdaşlar />
      <Kateqoriya/>
      <Haqqimizda />
      <BizeQatilin />
      <BizimBlog />
      <Footer />
    </>
  );
}

export default App;
