import { BtnLoadMore } from './Button.styled';

export function Button({ onClickMore }) {
  return (
    <BtnLoadMore type="button" onClick={onClickMore}>
      LOAD MORE
    </BtnLoadMore>
  );
}
