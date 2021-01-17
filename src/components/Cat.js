import Card from './Card';

const Cat = ({ salt }) => {
  const getCatImage = () => {
    const timestamp = Date.now();
    const catAPI =
      'http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=';
    return catAPI + (timestamp + salt);
  };
  // const req = await fetch('https://api.thecatapi.com/v1/images/search');
  // const data = await req.json();
  // console.log(data[0].url);
  // return data[0].url;
  // TODO 学习UI组件是如何实现嵌套的
  return (
    <div className="Cat">
      <Card />
      <img src={getCatImage()} alt="a cat" />
    </div>
  );
};

export default Cat;
