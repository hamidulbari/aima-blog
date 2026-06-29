import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import sidebarImg from "./../../public/images/blog-item.jpg";

const Sidebar: React.FC = () => {
  const categories = [
    { name: "Articles", count: 1, href: "#" },
    { name: "Management", count: 36, href: "#" },
    { name: "Perspectives", count: 17, href: "#" },
    { name: "Technology", count: 12, href: "#" },
    { name: "Thought Leadership", count: 38, href: "#" },
    { name: "Uncategorized", count: 18, href: "#" },
  ];

  const recentPosts = [
    {
      title: "Next-gen reforms: Driving bottom-up growth",
      image: sidebarImg,
      href: "#",
    },
    {
      title: "Technology trends shaping the future",
      image: sidebarImg,
      href: "#",
    },
    {
      title: "Thought leadership in modern business",
      image: sidebarImg,
      href: "#",
    },
  ];
  return (
    <>
      <div className="sidebar flex flex-col gap-10">
        <div className="search">
          <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
            <div className="item">
              <h2 className="!mb-0 ">Search</h2>
            </div>
            <div className="item">
              <div className="h-[2px] w-full bg-[var(--primary-color)]" />
            </div>
          </div>
          <div className="search-bar w-full mt-4 flex flex-row">
            <input
              type="text"
              className="rounded-s-full w-full focus:!border-[#034b8a]  px-5 py-2 border-2 border-r-0 border-[var(--primary-color)]"
              placeholder="Search"
            />
            <button className="h-[50px] cursor-pointer hover:bg-[#034b8a] hover:border-[#034b8a]  w-[70px] bg-[var(--primary-color)] border-2 flex justify-center items-center  border-[var(--primary-color)]">
              <FaSearch className="text-white" size={22} />
            </button>
          </div>
        </div>

        <div className="category-list">
          <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
            <div className="item">
              <h2 className="!mb-0">Categories</h2>
            </div>
            <div className="item">
              <div className="h-[2px] w-full bg-[var(--primary-color)]" />
            </div>
          </div>
          <div className="category-list mt-4 flex flex-col gap-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center justify-between hover:text-[var(--primary-color)]"
              >
                {category.name}
                <span>({category.count})</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="recent-post">
          <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
            <div className="item">
              <h2 className="!mb-0">Recent Posts</h2>
            </div>
            <div className="item">
              <div className="h-[2px] w-full bg-[var(--primary-color)]" />
            </div>
          </div>
          <div className="category-list mt-4">
            {recentPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="flex items-start gap-3 py-4 border-b border-gray-200 last:border-b-0 hover:text-[var(--primary-color)]"
              >
                <Image
                  alt={post.title}
                  src={post.image}
                  className="w-[100px] h-[70px] object-cover rounded"
                />
                <span>{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
