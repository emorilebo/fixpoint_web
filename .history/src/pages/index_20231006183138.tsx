import Image from 'next/image';
import Countdown from '../../components/Countdown';

const HomePage: React.FC = () => {
  const targetDate = '2023-10-15T00:00:00';

  return (
    <div>
   
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Fixpoint project</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Site and App currently under construction</h1>
          <img
            src="/logo.jpg"
            alt=""
            className="h-20 w-20"
          />
          <p className="mt-6 text-base leading-7 text-gray-900">Launch in</p>
          
          <Countdown targetDate={targetDate} />
         
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download soon
            </a>
            
          </div>
          <MyUplo
        </div>
      </main>
    </div>
  );
};

export default HomePage;
