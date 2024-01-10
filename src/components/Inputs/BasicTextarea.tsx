import { BasicTextareaType } from './types';

export const BasicTextarea: React.FC<BasicTextareaType> = (props) => {
  const { placeholder } = props;

  return <textarea placeholder={placeholder} />;
};
