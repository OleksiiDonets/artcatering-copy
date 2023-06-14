import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border:none;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  transition: all ease-in;
`;