'use client';
import { BookContent } from "../../components/templates";
import { GetBooksDocument, Book } from "../../generated/graphql";
import client from "../../lib/graphqlClient";
type Props = {
  book: Book;
};
const Content = ({ book }: Props) => {
  return <BookContent book={book} />;
};
export const getServerSideProps = async () => {
  const book = (
    await client.query({
      query: GetBooksDocument,
    })
  ).data;
  return {
    props: {
      ...book,
    },
  };
};
export default Content;