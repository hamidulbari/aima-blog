import Image from "next/image";
import websiteLogo from "../../public/images/logo.png";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // ✅ FIXED (X Twitter issue solved)
import { FaLinkedinIn } from "react-icons/fa";

const Header: React.FC = () => {
  const socialLinks = [
    {
      id: 1,
      icon: "FaFacebook",
      url: "https://www.facebook.com/allindiamanagementassociation",
    },
    {
      id: 2,
      icon: "FaYoutube",
      url: "https://www.youtube.com/@AIMAIndiaOfficial",
    },
    {
      id: 3,
      icon: "FaTwitter",
      url: "https://x.com/aimaindia",
    },
    {
      id: 4,
      icon: "FaLinkedinIn",
      url: "https://www.linkedin.com/school/aimaindia/",
    },
  ];

  const iconMap: any = {
    FaFacebook: FaFacebook,
    FaYoutube: FaYoutube,
    FaTwitter: FaTwitter,
    FaLinkedinIn: FaLinkedinIn,
  };

  return (
    <header className="shadow">
      <div className="section-container py-3">
        <div className="grid grid-cols-[130px_1fr] md:grid-cols-2 items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src={websiteLogo} width={170} alt="Aima Blogs" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-end gap-8">
            <div className="flex items-center gap-3">
              {socialLinks.map((data, index) => {
                const Icon = iconMap[data.icon];

                return (
                  <a
                    key={data.id || index}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[var(--light-background-color)] hover:bg-[var(--primary-color)] transition-[var(--global-transitions)] rounded w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center"
                  >
                    {Icon && (
                      <Icon className="text-xl md:text-[25px] group-hover:!text-white primary-color transition-colors" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
