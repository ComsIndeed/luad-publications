import { useEffect } from "react";
import { useState } from "react";
import { fetchFromFirestore } from "../lib/firestoreControls";

function Card({ entry }) {
  return (
    <>
      <a
        href={`/posts/${entry.id}`}
        className={"Card " + entry.isLargeCard ? "large" : ""}
      >
        <img src={entry.headerImage} width={160} height={90} />
        <h1> {entry.title} </h1>
      </a>
    </>
  );
}

export default function ContentList() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetchFromFirestore("/content", undefined, undefined, true).then(
      (returnedCollection) => {
        setContent(returnedCollection);
      }
    );
  }, []);

  return (
    <>
      <div className="ContentList">
        {content.map((returnedDocument) => {
          return <Card entry={returnedDocument} />;
        })}
      </div>
    </>
  );
}
