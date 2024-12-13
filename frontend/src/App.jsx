import Container from "./ui/Container.jsx";
import Footer from "./ui/Footer.jsx";
import Header from "./ui/Header.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <h1>Estimated</h1>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
