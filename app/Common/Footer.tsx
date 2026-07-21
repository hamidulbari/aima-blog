import footerTop from "../../public/images/footer-logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import footerBottom from "../../public/images/AAMO_LOGO.svg";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative text-white bg-[#030E1C] py-4  items-center">
        {/* <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start  relative lg:px-0 px-8 w-full mb-8">
            <div className="flex flex-col items-start lg:w-[28%]">
              <div className="flex flex-col gap-4">
                <div className="footer-logo">
                  <Image src={footerTop} alt="Aima Blog" />
                  <Image src={footerBottom} alt="Amo" />
                </div>

                <div className="flex gap-4 mt-2">
                  <span className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center">
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
                      <path
                        d="M6.53811 7.03049L6.90071 4.76852H4.63242V3.30065C4.63242 2.68181 4.94928 2.07859 5.96525 2.07859H6.99656V0.152838C6.99656 0.152838 6.06061 0 5.16579 0C3.29762 0 2.07661 1.08331 2.07661 3.04452V4.76852H0V7.03049H2.07661V12.4987C2.49301 12.5612 2.91977 12.5938 3.35451 12.5938C3.78926 12.5938 4.21602 12.5612 4.63242 12.4987V7.03049H6.53811Z"
                        fill="black"
                      />
                    </svg>
                  </span>

                  <span className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.7998 0H3.26659C1.47012 0 0 1.47012 0 3.26658V9.80009C0 11.5961 1.47012 13.0667 3.26659 13.0667H9.7998C11.5962 13.0667 13.0664 11.5961 13.0664 9.80009V3.26658C13.0664 1.47012 11.5962 0 9.7998 0ZM11.9775 9.80009C11.9775 11.0005 11.0009 11.9777 9.7998 11.9777H3.26659C2.06596 11.9777 1.08892 11.0005 1.08892 9.80009V3.26658C1.08892 2.06579 2.06596 1.08892 3.26659 1.08892H9.7998C11.0009 1.08892 11.9775 2.06579 11.9775 3.26658V9.80009Z"
                        fill="black"
                      />
                      <path
                        d="M10.0735 3.81103C10.5246 3.81103 10.8902 3.4454 10.8902 2.99438C10.8902 2.54336 10.5246 2.17773 10.0735 2.17773C9.62252 2.17773 9.25684 2.54336 9.25684 2.99438C9.25684 3.4454 9.62252 3.81103 10.0735 3.81103Z"
                        fill="black"
                      />
                      <path
                        d="M6.53318 3.26758C4.72871 3.26758 3.2666 4.72985 3.2666 6.53416C3.2666 8.33781 4.72871 9.80106 6.53318 9.80106C8.33714 9.80106 9.79978 8.33781 9.79978 6.53416C9.79978 4.72985 8.33714 3.26758 6.53318 3.26758ZM6.53318 8.71216C5.33057 8.71216 4.35551 7.73709 4.35551 6.53416C4.35551 5.33123 5.33057 4.35649 6.53318 4.35649C7.73579 4.35649 8.71086 5.33123 8.71086 6.53416C8.71086 7.73709 7.73579 8.71216 6.53318 8.71216Z"
                        fill="black"
                      />
                    </svg>
                  </span>

                  <span className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1439_557"
                        //   style="mask-type:luminance"
                        maskUnits="userSpaceOnUse"
                        x="1"
                        y="0"
                        width="21"
                        height="20"
                      >
                        <path
                          d="M21.0801 0H1.08008V20H21.0801V0Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1439_557)">
                        <path
                          d="M13.3664 3.50976C12.5674 3.50976 11.8302 3.24507 11.2382 2.79855C10.5593 2.28668 10.0714 1.53582 9.89915 0.67039C9.85649 0.456562 9.83352 0.235898 9.83134 0.00976562H7.54895V6.24632L7.54622 9.66238C7.54622 10.5757 6.95149 11.3501 6.12708 11.6224C5.88781 11.7014 5.62942 11.7389 5.36036 11.7241C5.01692 11.7052 4.69509 11.6016 4.41536 11.4343C3.82009 11.0783 3.41649 10.4324 3.40556 9.69355C3.38833 8.53883 4.32184 7.59738 5.47575 7.59738C5.70352 7.59738 5.92227 7.63457 6.12708 7.7021V5.9975V5.38472C5.91106 5.35273 5.69122 5.33605 5.46891 5.33605C4.20591 5.33605 3.02466 5.86105 2.18028 6.80687C1.54208 7.52164 1.15926 8.43355 1.1002 9.38976C1.02282 10.646 1.48246 11.8401 2.37388 12.7211C2.50485 12.8504 2.64239 12.9704 2.78622 13.0812C3.55048 13.6694 4.48481 13.9882 5.46891 13.9882C5.69122 13.9882 5.91106 13.9718 6.12708 13.9398C7.04638 13.8036 7.89458 13.3828 8.56395 12.7211C9.38645 11.9081 9.84091 10.8289 9.84583 9.68015L9.83407 4.5789C10.2264 4.8816 10.6555 5.13207 11.116 5.32648C11.8321 5.62863 12.5915 5.78175 13.3729 5.78148V4.12418V3.50921L13.3664 3.50976Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </span>

                  <span className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <path
                        d="M7.60532 5.53L12.3626 0H11.2353L7.10453 4.80162L3.80529 0H0L4.9891 7.2609L0 13.06H1.1274L5.48961 7.98928L8.97385 13.06H12.7792L7.60532 5.53Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section-container  ">
          {/* <div className="flex flex-col md:flex-row items-center gap-2.5 justify-between"> */}
          <p className=" !mb-0 relative text-center z-20 !text-white">
            © Copyrights {new Date().getFullYear()}. All Rights Reserved.
          </p>
          {/* <p className="  !mb-0 relative z-20 !text-white">
              Designed by Sanntra
            </p> */}
          {/* </div> */}
        </div>
      </footer>
    </>
  );
};
export default Footer;
