import { useEffect, useRef, useState } from "react";
import InputLine from "../../components/InputLine";
import Navigation from "../../components/Navigation";

const NotesPage = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const testRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState([
    {
      id: "tmp-1",
      // date
      value: "test",
    },
  ]);

  useEffect(() => {
    const eventHandler = async (event: ClipboardEvent) => {
      event.preventDefault();
      console.log(event.clipboardData);

      if (event.clipboardData.files.length > 0) {
        console.log(event.clipboardData.files);
        console.log(event.clipboardData.files.item(0));

        testRef.current.innerHTML = "";

        Array.from(event.clipboardData.files).forEach((file) => {
          const type = file.type;

          // const buffer = await file.arrayBuffer();

          // const blob = new Blob([buffer], { type });

          const src = URL.createObjectURL(file);

          const img = document.createElement("img");
          img.src = src;
          testRef.current.appendChild(img);
        });

        return;
      }

      const paste = event.clipboardData.getData("text/html");

      const template = document.createElement("template");

      template.innerHTML = paste;

      template.content.childNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // const childNode = node as HTMLElement;
          // childNode.removeAttribute("style");
          // childNode.removeAttribute("class");
        }
      });

      testRef.current.innerHTML = template.innerHTML;
      const text = document.createElement("p");
      text.innerHTML = event.clipboardData.getData("text/plain");
      containerRef.current.appendChild(text);
    };

    addEventListener("paste", eventHandler);

    return () => {
      removeEventListener("paste", eventHandler);
    };
  }, []);

  return (
    <>
      <Navigation />
      <div className="m-10">
        <div contentEditable ref={containerRef} className="border">
          <span>with span</span>
          <p>paragraph</p>
        </div>
        <div ref={testRef} className="[&>img]:w-1/3">
          Content
        </div>

        <div className="pt-10">
          <InputLine>
            <h1>Heading</h1>
          </InputLine>
          <InputLine>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              diam quis velit gravida venenatis. Integer elementum aliquam nunc,
              eu volutpat neque porttitor eget. Vivamus non libero id enim
              hendrerit malesuada eget vel nibh. Integer in quam eget purus
              tristique tincidunt.
            </p>
          </InputLine>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
