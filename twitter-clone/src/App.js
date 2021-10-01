
import './App.css';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Feed } from './Components/Feed/Feed';
import { Widgets } from './Components/Widgets/Widgets';


function App() {
  return (
    <div className="App">
      
      {/* sidebar */}
      <Sidebar/>

      <Feed/>

      <Widgets/>
    </div>
  );
}

export default App;
