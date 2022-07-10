import './index.css';
import { FaRegHandPointRight } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="m-10">
        <h1 className="text-9xl mb-10 text-center font-extralight">
          Hello My Lovely Fans!
        </h1>
        <div className="flex space-x-1 items-center justify-center">
          <FaRegHandPointRight size="4rem" color="black" />
          <p className="text-4xl ">Welcome to my site!</p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <img
            src="https://images.unsplash.com/photo-1622015524070-5ea7caac2643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
