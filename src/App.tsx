import './App.css'
import { BookList } from './components/BookList'
import { books, categories } from './data/books'

/**
 * スキルチェックのスタート地点です。
 * ここから README.md の課題に沿って、書籍管理アプリを実装していきます。
 *
 * 進め方の例:
 *   基礎: src/types/book.ts の型を整える → 一覧表示コンポーネントを作る
 *   応用: useState で CRUD・フィルタ・React Hook Form で登録フォーム
 *   発展: axios でモック API（npm run mock）と通信・カスタムフック・型ガード
 */
function App() {
  return (
    <main className='app'>
      <header className='app-header'>
        <h1>📚 書籍管理 スキルチェック</h1>
      </header>

      <section className='book-section' aria-labelledby='book-list-title'>
        <div className='section-heading'>
          <h2 id='book-list-title'>書籍</h2>
          <span>{books.length}件</span>
        </div>
        <BookList books={books} categories={categories} />
      </section>
      
      {/* <p>
        <code>README.md</code> の課題に沿って、このアプリを実装してください。
        まずは <code>src/App.tsx</code> をこの画面から書き換えていきます。
      </p>
      <p style={{ color: '#888' }}>
        発展課題の API 通信を試すときは、別ターミナルで <code>npm run mock</code> を起動してください
        （<code>http://localhost:3001/books</code> が使えるようになります）。
      </p> */}
    </main>
  )
}

export default App
