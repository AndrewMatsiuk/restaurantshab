import { BasicButtonType } from './types';

export const BasicButton: React.FC<BasicButtonType> = (props) => {
  const { disabled, children, styleClassName, onClick } = props;
  return (
    <button
      disabled={disabled}
      className={`w-24 h-12 border-black border-2 text-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-white rounded-lg ${styleClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
