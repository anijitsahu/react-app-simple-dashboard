// components
import Header from "./components/layout/Header";

// css
import "./css/styles.css";
import CarouselComponent from "./components/carousel/CarouselComponent";
import ChartComponent from "./components/charts/ChartComponent";

const App = () => {
  return (
    <main className="container">
      {/* including the Title and other components */}
      <Header />
      <CarouselComponent />
      <ChartComponent />
    </main>
  );
};

export default App;
