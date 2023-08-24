// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>he</h2>
//       <Friends name="alom" age="30"></Friends>
//     </div>
//   );
// }

// function Friends(Props) {
//   console.log(Props)
//   return (
//     <div>
//       <h3>Name:{Props.name}</h3>
//       {/* <h5>Age:</h5> */}
//     </div>
//   )
// }
// export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BlogHead from './blog/Blog-heading/BlogHead';
import Mob from './mobile/Mobile/Mob';
import Json from './json/Json/Json';

function App() {
  // const nayoks = ['rubel', 'kajols', 'feardos', 'shH']

  const nayoks = ['rubel']
  return (
    <div className="App">
      <Json></Json>
      <Mob></Mob>
      <BlogHead heading="Asome Blogs" author='I am the heading author'></BlogHead>
      <h2>he</h2>
      {/* <Friends></Friends> */}
      {
        nayoks.map(nayok => <Friends name={nayok}></Friends>)
      }
      {/* <Friends name="alom" age="30"></Friends>
      <Friends name="alom" age="30"></Friends> */}
      <Blogs></Blogs>
    </div>
  );
}
// console.log(props);

function Friends(props) {
  const [agei, setBo
  ] = useState(0);
  // console.log(u)

  const age = () => { setBo(agei + 1) }


  console.log(props);
  return (
    <div style={{ backgroundColor: 'red', margin: '20px', borderRadius: '20px' }}>
      <h3>Name: {props.name}</h3>
      <h5>Age: {props.age}</h5>
      console.log({agei});
      <h5>Age:{agei}</h5>
      <button onClick={age}>Increase</button>
    </div>
  );
}

function Blogs() {
  return (
    <div>
      <article className='blog'>
        <h2 style={{ color: 'black', textAlign: 'start', marginTop: '10px' }}>You can know many thing from the Blogs</h2>
        <p style={{ display: 'inline' }}>This is the paragraph tag. </p>
        This the article of some famous person in BD.Bangladesh is a very poor country in the world.Where every country in the world are very rich where bangladesh is very poor.This is the true thing .If you love true then you have to accept the true otherwise you will suffer in your day to day life.So don't worry about that.
      </article>
    </div >
  )
}

export default App;

