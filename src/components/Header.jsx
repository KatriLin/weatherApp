import styled from "styled-components";
import colors from "../color";

const Header = () => {
  return (
    <Headerwrap>
      <HearderText>Säätutka</HearderText>
    </Headerwrap>
  );
};

const Headerwrap = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.whiteBackground};
`;

const HearderText = styled.p`
  font-size: 23px;
  color: ${colors.primaryTextColor};
  background-color: ${colors.whiteBackground};
`;
export default Header;
