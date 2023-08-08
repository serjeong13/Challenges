import { introduction, volumes } from "../../resources/lib/data.js";
import Image from "next/image";
import Link from "next/link.js";

export default function Volumes() {
  let movie = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  console.log("movie stuff", movie);

  return (
    <>
      <div>
        <Link href="/volumes">← All Volumes</Link>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <Image src={movie.cover} alt="image" width={200} height={300} />
        <ul>
          {movie.books.map((book) => (
            <li key={book.ordinal}>
              {book.ordinal}:{book.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
