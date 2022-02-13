import "./App.css";
import { data } from './data'
import { Comment } from './Comments';
function App() {

  return (
    <div className="App">
    <Comment data={data}/>
    </div>
  );
}

export default App;
