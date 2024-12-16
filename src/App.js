// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Content from './Content';
import Hero from './Hero';
import Market from './Market';
import View  from './Views';
import Service from './Service';
import Work from './Work';
import Team from './Team';
import Review  from './Review';
import Blog from './Blog';
// import { useState } from 'react';

function App() {

  // const [active, setActive] = useState(0);
  // let active = 0;
  // function setActive(num) {
  //   active = num;
  //   console.log(active);
  //   // we have to re render the components
  // }

  // setInterval(() => {
  //   setActive(active + 1);
  // }, 1000);
  return (
    <div className="App">
      {/* <button onClick={() => setActive(1)}>About</button> */}
      <Header />
      {/* {active === 0 ? <h1>Home</h1> : <h1>About</h1>}
      <Content title="Title1" desc="Descriptop" />
      <Content title="Title2" desc="Descriptop" />
      <Content title="Title3" desc="Descriptop" />
      {/* <Content />
      <Content /> */}
      <Hero />
      <Market />
      <View />
      <Service />
      <Work />
      <Team />
      <Review />
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
