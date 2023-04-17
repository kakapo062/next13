import { Book } from "../../generated/graphql";
type Props = {
  book: Book;
};
export const BookContent = ({ book }: Props) => {
  const { title } = book;
  return (
    <div>
      <p>title: {title}</p>
    </div>
  );
};