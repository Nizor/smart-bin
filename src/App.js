import logo from './logo.svg';
import './App.css';

function App() {
  fetch('https://innov8hub.ng/wp-json/wp/v2/posts')
    .then((res) => res.json())
    .then(console.log);
  return <div className='App'> hello! </div>
}

export default App;
