import Link from "next/link";
import { introduction, volumes } from "../../resources/lib/data.js";

export default function Volumes() {
  return (
    <>
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
      </div>
    </>
  );
}