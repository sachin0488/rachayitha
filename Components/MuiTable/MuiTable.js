import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  tableBodyClasses,
  TableCell,
  tableCellClasses,
  tableClasses,
  TableContainer,
  TableHead,
  tableHeadClasses,
  TableRow,
  tableRowClasses,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const MuiTable = ({ tableHead, tableData }) => {
  return (
    <>
      <TableContainer width="100%">
        <TableStyled aria-label="simple table">
          <TableHeadStyled>
            <TableRowHead>
              <TableCellHead>STORIES</TableCellHead>
              <TableCellHead>STATE</TableCellHead>
              <TableCellHead>CHAPTERS</TableCellHead>
              <TableCellHead>WORKS</TableCellHead>
              <TableCellHead>VIEWS</TableCellHead>
              <TableCellHead>COLLECTION</TableCellHead>
              <TableCellHead>OPERATION</TableCellHead>
            </TableRowHead>
          </TableHeadStyled>
          <TableBodyStyled>
            {tableData.map((data) => (
              <TableRowBody>
                <TableCellBody>
                  <TableBodyInsideContent>
                    <TableBodyInsideImg src={data.img_url} />
                    <Typography>{data.name}</Typography>
                  </TableBodyInsideContent>
                </TableCellBody>
                <TableCellBody>{data.state}</TableCellBody>
                <TableCellBody>{data.chapters}</TableCellBody>
                <TableCellBody>{data.words}</TableCellBody>
                <TableCellBody>{data.views}</TableCellBody>
                <TableCellBody>{data.collection}</TableCellBody>
                <TableCellBody>
                  <TableBodyInsideButton>
                    {data.operation}
                  </TableBodyInsideButton>
                </TableCellBody>
              </TableRowBody>
            ))}
          </TableBodyStyled>
        </TableStyled>
      </TableContainer>
    </>
  );
};

export default MuiTable;

const TableStyled = styled(Table)`
  &.${tableClasses.root} {
  }
`;

const TableHeadStyled = styled(TableHead)`
  &.${tableHeadClasses.root} {
    background-color: white;
    height: 80px;
    width: 100%;
  }
  & .css-6cvo03-MuiTableRow-root {
  }
`;
const TableRowHead = styled(TableRow)`
  &.${tableRowClasses.head} {
  }
`;
const TableCellHead = styled(TableCell)`
  &.${tableCellClasses.head} {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #929292;
  }
`;

const TableRowBody = styled(TableRow)`
  &.${tableRowClasses.root} {
    height: 110px;
    background-color: white;
    width: 100%;
    border-radius: 12px;
  }
`;

const TableCellBody = styled(TableCell)`
  &.${tableCellClasses.body} {
  }
`;

const TableBodyStyled = styled(TableBody)`
  width: 100%;
`;

const TableBodyInsideContent = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;
const TableBodyInsideImg = styled.img`
  object-fit: cover;
`;

const TableBodyInsideButton = styled(Button)`
  background-color: #3b66f5;
  padding: 7px 8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: white;
  &:hover {
    color: #3b66f5;
    border: 2px solid #3b66f5;
  }
`;
