const Card = ({ title, description, thumbnail, price }) => {
  return (
    <div className='card'>
      <img src={thumbnail} alt='' />
      <h3>{title}</h3>
      <span>{description}</span>
      <p>$ {price}</p>
    </div>
  );
};
export default Card;
