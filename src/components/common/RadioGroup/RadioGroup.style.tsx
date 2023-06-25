import styled from 'styled-components';

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 35px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  position: relative;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: none;
  appearance: none;
  outline: none;
  z-index: 1;
  cursor: pointer;
  margin: 0 10px;
  &:before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    border-radius: 100%;
    border: 1px solid #E4C3C6;
  }
  &:checked:after{
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #E4C3C6;
    top: 50%;
    left: 50%;
  }
`;

export const RadioText = styled.div`
  font-size: 16px;
  span{
    display: block;
    &:first-of-type{
      margin-bottom: 8px;
      font-weight: 600;
    }
  }
`;
