import { useRef, useState } from "react";
import Navigation from "../../components/Navigation";

const NotesPage = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [lines, setLines] = useState([
    {
      id: "tmp-1",
      // date
      value: "test",
    },
  ]);

  return (
    <>
      <Navigation />
      <div>
        <div className="p-4">
          <div contentEditable />
        </div>
      </div>
    </>
  );
};

export default NotesPage;
