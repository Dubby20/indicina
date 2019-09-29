import React, {useEffect, useState }  from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const apiUrl = 'https://my-json-server.typicode.com/indicina-dev/navigation/navigations'
const NavBar = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await axios(apiUrl);
      const result = response.data
      setData(result);
    }
    fetchData()
  }, []);
  
  
  return (
    <div className="App">
      <ul className="nav nav-tabs">
        {data.map(item => (
          <li className="nav-item dropdown" key={item.id}>
    <a className="nav-link" data-toggle="dropdown" id="nav-style" href={item.url} role="button" aria-haspopup="true" aria-expanded="false">{item.name}</a>
      <div className="dropdown-menu">
    {item.pages.map(page => (
      <a className="dropdown-item nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href={page.url}>{page.name}</a>
      ))}
    <div className="dropdown-submenu">
        <ul className="dropdown-menu">
          {item.pages.map(i => i.pages.map(p => (
            <li className="nav-item dropdown" key={p.id}>
              <a className="dropdown-item nav-link" href={p.url}>{p.name}</a>
            </li>
          )))}
        </ul>
      </div>
      </div>
  </li>
        ))}
</ul>
    </div>
  );
}

export default NavBar;
