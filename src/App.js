import { useEffect, useState } from 'react';
import CardsLists from './components/cardlists';
import './App.css';
import Input from './components/input';

function App() {
  const [dataLists, setDataLists] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const responseData = await response.json();
      setDataLists(responseData.products);
    };
    fetchUsers();
  }, []);

  const filteredArray = dataLists?.filter(data =>
    Object.values(data).join(' ').toLowerCase().includes(searchQuery)
  );
  return (
    <main>
      <div className='container'>
        <Input setSearchQuery={setSearchQuery} />
        <CardsLists dataLists={filteredArray} />
      </div>
    </main>
  );
}

export default App;
