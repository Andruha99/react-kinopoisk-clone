import styled from "styled-components";
import { B1, Colors, H1, S3 } from "ui";

const DetailsWrap = styled.div`
  display: flex;
  gap: 40px;
  width: 858px;
`;

const DetailsPoster = styled.img`
  width: 266px;
  height: 356px;
  border-radius: 20px;
`;

const Genre = styled.p`
  font-size: ${B1};
`;

const MovieTitle = styled.h1`
  margin-bottom: 24px;
  font-size: ${H1};
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const Rating = styled.div<{ rating: number }>`
  padding: 6px 8px;
  font-size: ${S3};
  color: ${Colors.WhiteContext};
  background-color: ${(props) =>
    props.rating >= 7 ? Colors.GreenTertiary : Colors.OrangeTertiary};
  border-radius: 6px;
`;

const BadgeInformation = styled.div`
  padding: 6px 8px;
  font-size: ${S3};
  color: ${Colors.WhiteContext};
  background-color: ${Colors.BackgroundGraphite};
  border-radius: 6px;
`;

const Plot = styled.div`
  margin-bottom: 40px;
  font-size: ${B1};
`;

const InformationContainer = styled.div`
  display: flex;
  gap: 54px;
`;

const Information = styled.p`
  margin-bottom: 20px;
  font-size: ${B1};
`;

export {
  DetailsWrap,
  DetailsPoster,
  Genre,
  MovieTitle,
  BadgeContainer,
  Rating,
  BadgeInformation,
  Plot,
  InformationContainer,
  Information,
};
