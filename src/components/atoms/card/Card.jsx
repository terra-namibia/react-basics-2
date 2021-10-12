import styled from 'styled-components';

export const Card = (props) => {
  const { children } = props;

  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #ffffff;
  box-shadow: #dddddd 0 0 4px 2px;
  border-radius: 10px;
  padding: 20px;
`;
