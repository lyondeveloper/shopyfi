import styled from 'styled-components';

export const CheckoutItemStyles = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageStyles = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextStyles = styled.span`
  width: 23%;
`;

export const QuantityStyles = styled(TextStyles)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonStyles = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
