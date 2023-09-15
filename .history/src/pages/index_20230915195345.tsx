import Countdown from '../../components/Countdown';

const HomePage: React.FC = () => {
  const targetDate = '2023-09-30T00:00:00';

  return (
    <div>
      <h1>Welcome to </h1>
      <Countdown targetDate={targetDate} />
    </div>
  );
};

export default HomePage;
