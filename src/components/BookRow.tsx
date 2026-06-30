import type { Book, Category } from "../types/book"

type BookRowProps = {
    book:Book,
    category?:Category,
}

export function BookRow({book,category}:BookRowProps){
    return(
        <li className="book-row">
            <div>
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
            </div>
            <span className="book-category">{category?.name ?? '未分類'}</span>
            <span className="book-price">{book.price.toLocaleString()}円</span>
        </li>
    )

}