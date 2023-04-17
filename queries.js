// frontend/queries.js
import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
