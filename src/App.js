import "./App.css";
import getUserData from "./components/GetUserData";
function App() {
  const data = async() => {
   
    console.log(await getUserData(2));
  };

  data();
  return <div className="App"></div>;
}

export default App;
