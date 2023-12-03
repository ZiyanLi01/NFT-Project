import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { searchNFTs } from "./utils";

function App() {
  const handleButtonClick = () => {
    searchNFTs("car");
  };

  return (
    <div className="App">
      <Button type="primary" onClick={handleButtonClick}>
        Test
      </Button>
    </div>
  );
}

export default App;
