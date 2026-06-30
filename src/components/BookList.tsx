import type { Book, Category } from "../types/book";
import { BookRow } from "./BookRow";

type BookListProps = {
  books: Book[];
  categories: Category[];
};

export function BookList({ books, categories }: BookListProps) {
  if (books.length === 0) {
    return <p className="empty-message">書籍がありません</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookRow
          key={book.id}
          book={book}
          category={categories.find(
            (category) => category.id === book.categoryId,
          )}
        />
      ))}
    </ul>
  );
}
