const Cat = ({ salt = Number.parseInt(Math.random() * 10) }) => {
  const getCatImage = () => {
    const timestamp = Date.now();
    const catAPI =
      'http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=';
    console.log(salt);
    return catAPI + (timestamp + salt);
  };

  return (
    <div className="Cat">
      <img src={getCatImage()} alt="a cat" />
    </div>
  );
};

export default Cat;
