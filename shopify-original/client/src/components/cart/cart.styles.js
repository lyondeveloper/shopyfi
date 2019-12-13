import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 15px;
  margin: 15px auto;
`;

export const ButtonContainer = styled(CustomButton)`
  margin-top: 0.5rem;
`;
