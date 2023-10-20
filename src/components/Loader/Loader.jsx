import { ThreeDots } from 'react-loader-spinner';
import { ErrorMessage } from './Loader.styled';
export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export const Error = () => {
  return (
    <ErrorMessage>
      <p>Whoops! Error! Please, reload the page! </p>
    </ErrorMessage>
  );
};
