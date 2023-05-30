import styled from "styled-components";
import { B1, Colors, H1, Media, S3 } from "ui";

const DetailsWrap = styled.div`
  display: flex;
  gap: 40px;
  width: 858px;

  ${Media.XL} {
    gap: 32px;
  }

  ${Media.LG} {
    width: 470px;
  }

  ${Media.SM} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 272px;
  }
`;

const DetailsPoster = styled.img`
  width: 266px;
  height: 356px;
  border-radius: 20px;

  ${Media.XL} {
    width: 208px;
    height: 278px;
  }

  ${Media.SM} {
    width: 272px;
    height: 364px;
  }
`;

const FavoriteButton = styled.div`
  display: flex;
  justify-content: center;
  width: 266px;
  padding: 16px 0px;
  margin-top: 32px;
  background-color: ${Colors.BackgroundGraphite};
  border-radius: 10px;
  cursor: pointer;

  ${Media.XL} {
    width: 208px;
  }

  ${Media.SM} {
    width: 272px;
  }
`;

const Genre = styled.p`
  font-size: ${B1};
  color: ${Colors.DetailsRowNames};
`;

const MovieTitle = styled.h1`
  margin-bottom: 24px;
  font-size: ${H1};
  color: ${Colors.DetailMovieTitle};
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
  color: ${Colors.DetailMovieTitle};
`;

const Table = styled.table``;

const TableRow = styled.tr`
  padding-bottom: 20px;
`;

const RowTitle = styled.td`
  font-size: ${B1};
  vertical-align: top;
  color: ${Colors.DetailsRowNames};
`;

const RowData = styled.td`
  padding-left: 54px;
  padding-bottom: 20px;
  color: ${Colors.DetailMovieText};
`;

export {
  DetailsWrap,
  DetailsPoster,
  FavoriteButton,
  Genre,
  MovieTitle,
  BadgeContainer,
  Rating,
  BadgeInformation,
  Plot,
  Table,
  TableRow,
  RowTitle,
  RowData,
};
