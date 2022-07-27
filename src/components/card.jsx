const Card = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
};
export default Card;
