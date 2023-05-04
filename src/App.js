
import './App.css';
import Profile from './profile/Profile';

const data ={
  fullname : 'Khayati Adel',
  bio : 'HTML, CSS, JS, REACT.js',
  profession: 'Full Stack Devloper',

}

function App() {
  const handelName = ()=>{
    return(
      alert(`my name is ${data.fullname}`)  
      )
  }
  
  return (
    <div className="App">
      <button onClick={()=> handelName()} >click me</button>
      <Profile  
      fullname={data.fullname}
      bio={data.bio}
      profession={data.profession}
      myFunction= {handelName}

      >
        <img src='/astronaut.png'/>
        
      </Profile>
    </div>
  );
}

export default App;
