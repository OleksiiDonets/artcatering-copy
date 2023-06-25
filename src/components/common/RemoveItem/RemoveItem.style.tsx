import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 30px;
  height: 30px;
  border:none;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const RemoveIcon = styled(FontAwesomeIcon)`
  color: #C4C4C4;
  font-size: 15px;
  font-weight: 300;
  &:hover{
    color: #8d8d8d;
  }
`;