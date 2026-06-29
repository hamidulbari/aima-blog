import Image from "next/image";
import websiteLogo from "../../public/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
      <header className="shadow">
        <div className="section-container py-3">
          <div className="grid grid-cols-2">
            <div className="item">
              <Link href={"/"}>
                <Image src={websiteLogo} width={170} alt="Aima Blogs" />
              </Link>
            </div>
            <div className="item">
              <div className="content-wrapper flex items-center justify-end gap-8">
                <div className="social-icons flex flex-row items-center gap-3">
                  <a
                    href="#"
                    className=" bg-[var(--light-background-color)] hover:bg-[var(--primary-color)] hover:!text-white  transition-[var(--global-transitions)] rounded primary-color w-[50px] h-[50px] flex items-center justify-center"
                    target="_blank"
                  >
                    <FaFacebook size={25} />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--light-background-color)] hover:bg-[var(--primary-color)] hover:!text-white  transition-[var(--global-transitions)]  rounded primary-color w-[50px] h-[50px] flex items-center justify-center"
                    target="_blank"
                  >
                    <FaYoutube size={25} />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--light-background-color)] hover:bg-[var(--primary-color)] hover:!text-white  transition-[var(--global-transitions)]  rounded primary-color w-[50px] h-[50px] flex items-center justify-center"
                    target="_blank"
                  >
                    <FaXTwitter size={25} />
                  </a>
                  <a
                    href="#"
                    className=" bg-[var(--light-background-color)] hover:bg-[var(--primary-color)] hover:!text-white  transition-[var(--global-transitions)] rounded primary-color w-[50px] h-[50px] flex items-center justify-center"
                    target="_blank"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
