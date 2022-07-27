import Card from './card';

const CardsLists = ({ dataLists }) => {
  return (
    <div className='users'>
      {dataLists?.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};
export default CardsLists;
