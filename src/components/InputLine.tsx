import dayjs from "dayjs";

interface Props {
  children: React.ReactNode;
}

const InputLine = ({ children }: Props) => {
  return (
    <div className="group relative mb-2 cursor-pointer">
      <div className="w-full rounded py-1 px-2 transition-all group-hover:bg-gray-50 group-hover:shadow-md">
        {children}
      </div>
      <div>
        <p className="absolute right-0 py-1 px-2 text-xs text-gray-200 opacity-0 transition-all group-hover:bg-gray-100/50 group-hover:text-gray-400 group-hover:opacity-100">
          {dayjs().toISOString()}
        </p>
      </div>
    </div>
  );
};

export default InputLine;
