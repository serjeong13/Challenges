import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image";

export default function Volumes() {
  let movie = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
  console.log("movie stuff", movie);

  return (
    <>
      <div>
        <Link href="/volumes" h2>
          ← All Volumes
        </Link>
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
