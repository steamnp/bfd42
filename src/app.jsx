import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Service from "./pages/service";

function app() {
  return (
    <div>
      <Header />
      <Home />
      <Service />
      <Footer />
    </div>
  );
}

export default app;
