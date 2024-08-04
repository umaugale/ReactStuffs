import React,{useState  } from 'react';
import './Home.css';
import Welcome from './Welcome'; 
import Login from './Login';

const Home = () => {
  const [showPage, setLoginPage] = useState(false);

  const goToLoginPage = (event) => {
    event.preventDefault(); 
    setLoginPage(true);
  };
  
  if (showPage) {
    return <Login />;
  }

  return (
    <div className="container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item-left"><a href="#Home">Home</a></li>
          <div className="nav-items-right">
            <li className="nav-item-right"><a href="#Login" onClick={goToLoginPage}>Login</a></li>
          </div>
        </ul>
      </nav>
      <div className="animation-wrapper">
        <Welcome />
      </div>
    </div>
  );
};

export default Home;

