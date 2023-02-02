import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import travelData from "../travel-data.js";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="cards">
				{travelData.map((item) => {
					return <Card key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
}

export default App;
