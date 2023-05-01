import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Devices_Sections from './components/Devices_Sections';
import Download_Section from './components/Download_Section';
import Everywhere from './components/Everywhere';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
    <Main />
    <Devices_Sections />
    <Download_Section />
    <Everywhere />
    <VideoPlayer />
    <Footer />

    </>
   
  );
}

export default App;
