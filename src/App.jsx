
import Topbar from "./components/topBar/TopBar";
import NavBar from "./components/navBar/NavBar";
import Bannar from "./components/banner/Bannar";
import Assist from "./components/assists/Assist";

import Doctors from "./components/doctors/Doctors";
import LatestNews from './components/latestNews/LatestNews'

import Service from './components/service/Service'
import Search from "./components/search/Search";
import { useState } from "react";
function App() {

  const [search, setsearch] = useState(false)
  return (
    <div className="App">
      <Topbar/>
      <NavBar setsearch={setsearch } search={search}/>
      <Search setsearch={setsearch } search={search}/>
      <Bannar/>
      <Assist/>
      <Service/>
      <Doctors/>
      <LatestNews/>
     
    </div>
  );
}

export default App;
