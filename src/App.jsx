import EntryButton from "./components/EntryButton";
import EntryHeader from "./components/EntryHeader";
import EntryHero from "./components/EntryHero";
import {BrowserRouter as Router} from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import Products from "./components/Products"

export default function App() {
  return (
    <>
    <div className="appWrapper   " id="body">
    <Navbar/>
    <EntryHeader/>
    <EntryHero/>
    <EntryButton/>
    <HeroContent/>
    <Products/>

    </div>
    
    </>
  )
}