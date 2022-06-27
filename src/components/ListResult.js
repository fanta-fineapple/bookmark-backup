import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authorSlice, titleTagDel, isbnSlice } from '../util/util';

const ListResult = ({bookList}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  console.log('dd');

  return (
    <>
    {bookList.map(book => (
      <Book key={book.isbn} onClick={() => pathname === '/search' ? navigate(`/bookinfo/${isbnSlice(book.isbn)}`) : navigate(`/view/${book.id}`)}>
        <BookCover><img src={book.image} alt="" /></BookCover>
        <BookTitle>
          <div>{pathname === '/search' ? titleTagDel(book.title) : book.title}</div>
          <div>{pathname === '/search' ? authorSlice(book.author) : book.author}</div>
        </BookTitle>
      </Book>
    ))}
    </>
  )
}

export default ListResult;


const Book = styled.div`
  display: flex;
  align-items: center;
  min-height: 130px;
  padding: 7px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  margin-bottom: 10px;
`;

const BookCover = styled.div`
  width: 20%;

  img {
    width: 100%;
  }
`;

const BookTitle = styled.div`
  max-width: 80%;
  padding: 0 20px;

  div {
    font-size: 0.9rem;
  }

  div:first-child {
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 20px;
  }
`;