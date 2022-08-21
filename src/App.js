// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import {BrowserRouter, Router, Routes, Route, Switch, Link} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import CalanderPage from './pages/CalanderPage';
import Booking from './pages/Booking';

// class App{
//   render(){
//     return(
//       <Router>
//         <Route path="/" component={LandingPage} />
//       </Router>
//     );
//   }

// }
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route exact path="/" component ={LandingPage} />
//         <Route exact path="/b" component ={Booking} />
//         {/* <LandingPage /> */}
//       </div>
//     </Router>

//   );
// }

// const App =() => {
//   return (
  
//     <>
//     <BrowserRouter>
//     <Router>
//       <Routes>
//         <Route path='/' element= {<LandingPage/>}/>
//         <Route path='/b' element= {<Booking/>}/>

//       </Routes>
//     </Router>
//     </BrowserRouter>
//     </>
    
    
//   )

// }
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calander" element={<CalanderPage />} />
        <Route path="/booking" element={<Booking />} />
         
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);







// export default App;
