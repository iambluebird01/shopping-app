import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weght: 500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on orders Over 50$</Container>;
};

export default Announcement;
