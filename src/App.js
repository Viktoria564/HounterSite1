import OfferPage from "./sections/OfferPage";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Reviews from "./sections/Reviews";

function App() {
  return (
    <>
      <h1 className="sr-only">Hounter</h1>
      <Header />
      <main>
        <OfferPage />
        <About />
        <Reviews />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
