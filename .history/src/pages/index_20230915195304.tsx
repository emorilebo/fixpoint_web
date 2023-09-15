import Countdown from '../../components/Countdown';

const HomePage: React.FC = () => {
  const targetDate = '2023--01T00:00:00';

  return (
    <div>
      <h1>Welcome to My Landing Page</h1>
      <Countdown targetDate={targetDate} />
    </div>
  );
};

export default HomePage;
