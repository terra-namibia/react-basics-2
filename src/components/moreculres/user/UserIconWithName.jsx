import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = (props) => {
  // const { user } = props;
  const { image, name } = props.user;
  const context = useContext(UserContext);


  return (
    <SContainer>
      <SImage src={image} alt="prof img" />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
