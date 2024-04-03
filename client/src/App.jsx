import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";
import { Route, Routes, Navigate,BrowserRouter } from "react-router-dom";
import Signup from './pages/Singup'
import Login from './pages/Login'
import { Datasets } from "./pages/Datasets";
import { Datasetdetail } from "./pages/Datasetdetail";
import { User } from "./pages/User";
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
			<Route path="/" exact element={<Landingpage/>} />
			<Route path="/signup" exact element={<Signup />} />
      <Route path="/Datasets" exact element={<Datasets />} />
      <Route path="/Datasetsdetail" exact element={<Datasetdetail />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/profile" exact element={<User />} />
 		</Routes>
     </BrowserRouter>
      {/* <Footer /> */}
       
    </>
  );
};

export default App;
