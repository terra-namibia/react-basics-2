import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { userState } from '../../store/userState';
import { SecondaryButton } from '../atoms/button/SecondaryButton';

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };

  return (
    <SContainer>
      <h2>This is TOP page!</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
