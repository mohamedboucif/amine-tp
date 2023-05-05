import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Devices_Sections from './components/Devices_Sections';
import Download_Section from './components/Download_Section';
import Everywhere from './components/Everywhere';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import Movies from './components/Movies';

import {Routes,Route} from "react-router-dom";




function App() {
  return (
    <>
    <Header/>

    <Routes>
         <Route path="/" element ={<Main />}/>
         <Route path ="/Devices" element = {<Devices_Sections />} />
         <Route path ="/Download" element ={<Download_Section />} /> 
         <Route path ="/Everywhere" element ={<Everywhere />} />
         <Route path ="/Movies" element ={<Movies />} />
        

    </Routes>
    
    

    <Footer />

    </>
   
  );
}

export default App;
