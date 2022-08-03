// components
import Header from "./components/layout/Header";

// css
import "./css/styles.css";
import CarouselComponent from "./components/carousel/CarouselComponent";
import ChartComponent from "./components/charts/ChartComponent";

const App = () => {
  return (
    <div className="container">
      {/* including the Title and other components */}
      <Header />
      <ChartComponent />
      <CarouselComponent />
    </div>
  );
};

export default App;
