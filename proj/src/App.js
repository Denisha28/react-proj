import './App.css';
import AxiosGet from './day8/AxiosGet';
import DeleteAxios from './day8/DeleteAxios';
import PostAxios from './day8/PostAxios';

function App() {
  return (
    <div className="App">
      
       <AxiosGet/>
       <PostAxios/>
       <DeleteAxios/>
    </div>
  );
}


export default App;