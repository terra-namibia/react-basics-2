import axios from 'axios';
import styled from 'styled-components';
import { SearchInput } from '../moreculres/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

export const Users = () => {
  return (
    <SContainer>
      <h2>User List</h2>
      <button onClick={onClickUsers}>ユーザーapi</button>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hogehoge-${val}`,
    image: 'https://source.unsplash.com/random/200x200',
    email: 'XXXXX@test.com',
    tel: 'XXXXX',
    address: 'hogehoge',
    company: {
      name: 'test.com',
    },
  };
});

const onClickUsers = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    // console.log(res.data);
    res.data.map((val) => {
      console.log(val.name);
    })
  }).catch((err) => {console.log(err)});
  axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
    console.log(`user1: ${res.data.name}`);
    // res.data.map((val) => {
    //   console.log(val.name);
    // })
  }).catch((err) => {console.log(err)});
  
}

const SContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 18px;
`;
