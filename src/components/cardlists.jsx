import Card from './card';

const CardsLists = ({ dataLists }) => {
  if (dataLists.length === 0) {
    return <h2>no results found</h2>;
  }
  return (
    <div className='cardlists'>
      {dataLists?.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};
export default CardsLists;
