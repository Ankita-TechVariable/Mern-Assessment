import WeatherPage from "./pages/WeatherPage";
import FunctionPage from "./pages/FunctionPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/weather" element={<WeatherPage />} />
					<Route path="/functions" element={<FunctionPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
