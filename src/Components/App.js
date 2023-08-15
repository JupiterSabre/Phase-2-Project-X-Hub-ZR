import { Outlet } from "react-router-dom"
import Header from './Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* THE OUTLET WILL SHOW ANY SUB ROUTES LIKE THE ABOUT PAGE. */}
      <Outlet />

    </div>
  );
}

export default App;
