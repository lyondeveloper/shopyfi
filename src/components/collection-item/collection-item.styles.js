import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CollectionItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageStyles = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  margin-bottom: 5px;
`;

ImageStyles.displayName = 'ImageStyles';

export const ButtonStyles = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

ButtonStyles.displayName = 'ButtonStyles';

export const CollectionFooterStyles = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

CollectionFooterStyles.displayName = 'CollectionFooterStyles';

export const NameStyles = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

NameStyles.displayName = 'NameStyles';

export const PriceStyles = styled.span`
  width: 10%;
  text-align: right;
`;

PriceStyles.displayName = 'PriceStyles';
