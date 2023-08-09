import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data.js";
import Head from "next/head.js";
import { useRouter } from "next/router.js";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();
  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <div>
        <h1>Lord of the rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volume) => (
            <li key={volume.title}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleRandomVolume}>Random Volume</button>
      </div>
    </>
  );
}
