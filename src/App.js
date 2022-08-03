// css
import "./css/styles.css";

// components
import Header from "./components/layout/Header";
import CarouselComponent from "./components/carousel/CarouselComponent";
import ChartComponent from "./components/charts/ChartComponent";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <main className="container">
      {/* including the Title and other components */}
      <Header />
      <CarouselComponent />
      <ChartComponent />
      <Timeline />
    </main>
  );
};

export default App;
