import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image";
import { useRouter } from "next/router.js";
import Head from "next/head.js";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  let movie = volumes.find((volume) => volume.slug === slug);
  if (!movie) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
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
