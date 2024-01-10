import { LogoSvg } from '../../svg';
import { BasicButton } from '../Button';

export const Header: React.FC = () => {
  const navigateToSignIn = () => {
    console.log('Navigate to Sign In');
  };

  const navigateToSignUp = () => {
    console.log('Navigate to Sing Up');
  };

  const navigateToHome = () => {
    console.log('Navigate to Home');
  };

  return (
    <div className='border-2 border-black w-100% flex h-[75px] place-content-between items-center '>
      <div className='ml-4 flex items-center'>
        <div
          className='w-[50px] h-[50px] mr-6 cursor-pointer'
          onClick={navigateToHome}
        >
          {' '}
          <LogoSvg />
        </div>
        <h1 className='text-2xl font-bold	'>Restaurants Hub</h1>
      </div>
      <div className='flex'>
        <BasicButton
          disabled={false}
          onClick={navigateToSignIn}
          styleClassName={'mr-4'}
          children={'Sing In'}
        />
        <BasicButton
          disabled={false}
          onClick={navigateToSignUp}
          styleClassName={'mr-4'}
          children={'Sign Up'}
        />
      </div>
    </div>
  );
};
