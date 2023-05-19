import Image from "next/image";
import fire from "../public/fire.svg";
import home from "../public/home.svg";
import chat from "../public/chat.svg";
import sun from "../public/sun.svg";
import logout from "../public/logout.svg";

const page = () => {
  return (
    <main>
      <div className="aside">
        <ul className="flex flex-col justify-between h-screen w-16 hover:w-fit hover:pr-8 overflow-hidden transition-all dark:border-white/20 border-black/20 border-r-[1px]">
          <div className="upper">
            <li className="whitespace-nowrap flex items-center cursor-pointer dark:hover:bg-white/10 hover:bg-black/10">
              <span className="p-8 w-16 flex justify-center">
                <Image
                  src={fire}
                  alt=""
                  className="max-w-[1.5rem] min-w-[1.5rem]"
                />
              </span>
              <span>Website LOGO</span>
            </li>
          </div>
          <div className="middle">
            <li className="whitespace-nowrap flex items-center cursor-pointer dark:hover:bg-white/10 hover:bg-black/10">
              <span className="p-8 w-16 flex justify-center">
                <Image
                  src={home}
                  alt=""
                  className="max-w-[1.5rem] min-w-[1.5rem]"
                />
              </span>
              <span>Home</span>
            </li>
            <li className="whitespace-nowrap flex items-center cursor-pointer dark:hover:bg-white/10 hover:bg-black/10">
              <span className="p-8 w-16 flex justify-center">
                <Image
                  src={chat}
                  alt=""
                  className="max-w-[1.5rem] min-w-[1.5rem]"
                />
              </span>
              <span>Chat</span>
            </li>
          </div>
          <div className="lower">
            <li className="whitespace-nowrap flex items-center cursor-pointer dark:hover:bg-white/10 hover:bg-black/10">
              <span className="p-8 w-16 flex justify-center">
                <Image
                  src={sun}
                  alt=""
                  className="max-w-[1.5rem] min-w-[1.5rem]"
                />
              </span>
              <span>Theme</span>
            </li>
            <li className="whitespace-nowrap flex items-center cursor-pointer dark:hover:bg-white/10 hover:bg-black/10">
              <span className="p-8 w-16 flex justify-center">
                <Image
                  src={logout}
                  alt=""
                  className="max-w-[1.5rem] min-w-[1.5rem]"
                />
              </span>
              <span>Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default page;
