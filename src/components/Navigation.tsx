import clsx from "clsx";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const linkClass = "flex-1 flex justify-center h-full items-center";

const Navigation = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div className="flex h-10 w-full cursor-pointer items-center border-b-2">
      <Link href="/notes">
        <div
          className={clsx(
            linkClass,
            router.route === "/notes" && "bg-slate-400"
          )}
        >
          Notes
        </div>
      </Link>
      <Link href="/wiki">
        <div
          className={clsx(
            linkClass,
            router.route === "/wiki" && "bg-slate-400"
          )}
        >
          Wiki
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
