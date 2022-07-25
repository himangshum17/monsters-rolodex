import { useEffect, useState } from 'react';
import Card from './card';

const CardsLists = () => {
  const [dataLists, setDataLists] = useState(null);
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
  return (
    <div className='users'>
      {dataLists?.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};
export default CardsLists;
