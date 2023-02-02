import "./App.css";
import Tile from "./components/Tile";
import Navbar from "./components/Navbar";
import travelData from "../travel-data.js";

function App() {
	console.log(travelData);
	return (
		<>
			<Navbar />
			<Tile />
		</>
	);
}

export default App;
