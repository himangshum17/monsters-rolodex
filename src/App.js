import { useEffect, useState } from 'react';
import CardsLists from './components/cardlists';
import './App.css';

function App() {
  const [dataLists, setDataLists] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const responseData = await response.json();
      setDataLists(responseData);
    };
    fetchUsers();
  }, []);
  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };
  return (
    <main>
      <div className='container'>
        <div>
          <input
            type='search'
            placeholder='Search...'
            onChange={handleSearch}
          />
        </div>
        <CardsLists dataLists={dataLists} />
      </div>
    </main>
  );
}

export default App;
