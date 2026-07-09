// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaSearch } from "react-icons/fa";
// // import sidebarImg from "./../../public/images/blog-item.jpg";

// // const Sidebar: React.FC = () => {
// //   const categories = [
// //     { name: "Articles", count: 1, href: "#" },
// //     { name: "Management", count: 36, href: "#" },
// //     { name: "Perspectives", count: 17, href: "#" },
// //     { name: "Technology", count: 12, href: "#" },
// //     { name: "Thought Leadership", count: 38, href: "#" },
// //     { name: "Uncategorized", count: 18, href: "#" },
// //   ];

// //   const recentPosts = [
// //     {
// //       title: "Next-gen reforms: Driving bottom-up growth",
// //       image: sidebarImg,
// //       href: "#",
// //     },
// //     {
// //       title: "Technology trends shaping the future",
// //       image: sidebarImg,
// //       href: "#",
// //     },
// //     {
// //       title: "Thought leadership in modern business",
// //       image: sidebarImg,
// //       href: "#",
// //     },
// //   ];
// //   return (
// //     <>
// //       <div className="sidebar flex flex-col gap-10">
// //         <div className="search">
// //           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
// //             <div className="item">
// //               <h2 className="!mb-0 ">Search</h2>
// //             </div>
// //             <div className="item">
// //               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
// //             </div>
// //           </div>
// //           <div className="search-bar w-full mt-4 flex flex-row">
// //             <input
// //               type="text"
// //               className="rounded-s-full w-full focus:!border-[#034b8a]  px-5 py-2 border-2 border-r-0 border-[var(--primary-color)]"
// //               placeholder="Search"
// //             />
// //             <button className="h-[50px] cursor-pointer hover:bg-[#034b8a] hover:border-[#034b8a]  w-[70px] bg-[var(--primary-color)] border-2 flex justify-center items-center  border-[var(--primary-color)]">
// //               <FaSearch className="text-white" size={22} />
// //             </button>
// //           </div>
// //         </div>

// //         <div className="category-list">
// //           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
// //             <div className="item">
// //               <h2 className="!mb-0">Categories</h2>
// //             </div>
// //             <div className="item">
// //               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
// //             </div>
// //           </div>
// //           <div className="category-list mt-4 flex flex-col gap-3">
// //             {categories.map((category) => (
// //               <Link
// //                 key={category.name}
// //                 href={category.href}
// //                 className="flex items-center justify-between hover:text-[var(--primary-color)]"
// //               >
// //                 {category.name}
// //                 <span>({category.count})</span>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="recent-post">
// //           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
// //             <div className="item">
// //               <h2 className="!mb-0">Recent Posts</h2>
// //             </div>
// //             <div className="item">
// //               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
// //             </div>
// //           </div>
// //           <div className="category-list mt-4">
// //             {recentPosts.map((post) => (
// //               <Link
// //                 key={post.title}
// //                 href={post.href}
// //                 className="flex items-start gap-3 py-4 border-b border-gray-200 last:border-b-0 hover:text-[var(--primary-color)]"
// //               >
// //                 <Image
// //                   alt={post.title}
// //                   src={post.image}
// //                   className="w-[100px] h-[70px] object-cover rounded"
// //                 />
// //                 <span>{post.title}</span>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // export default Sidebar;

// import Image from "next/image";
// import Link from "next/link";
// import { FaSearch } from "react-icons/fa";
// import sidebarImg from "./../../public/images/blog-item.jpg";
// import noImg from "../../public/images/noimg.jpg";

// import {
//   getBlogCategories,
//   getBlogsByCategory,
// } from "../actionCreator/home.actionCreator";
// import { stringify } from "querystring";

// interface Category {
//   id: number;
//   title: string;
//   slug: string;
//   article_count: number;
// }

// interface recentPosts {
//   id: number;
//   title: string;
//   slug: string;
//   thumbnail: string;
// }
// interface HomePageProps {
//   searchParams?:
//     | { page?: string; category?: string; keyword?: string }
//     | Promise<{ page?: string; category?: string; keyword?: string }>;
// }
// const Sidebar: React.FC<HomePageProps> = async ({ searchParams }) => {
//   const categoriesData = await getBlogCategories();
//   const resolvedSearchParams = await Promise.resolve(searchParams);
//   const categories: Category[] = categoriesData?.data || [];
//   const page = Number(resolvedSearchParams?.page) || 1;
//   const category = resolvedSearchParams?.category || "all";
//   const keyword = resolvedSearchParams?.keyword || "";
//   const blogsData = await getBlogsByCategory({ category, page, keyword });
//   const recentPosts: recentPosts[] = blogsData?.data?.articles || [];

//   .log("This is recent post: " + JSON.stringify(recentPosts));

//   return (
//     <>
//       <div className="sidebar flex flex-col gap-10">
//         <div className="search">
//           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
//             <div className="item">
//               <h2 className="!mb-0 ">Search</h2>
//             </div>
//             <div className="item">
//               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
//             </div>
//           </div>
//           <div className="search-bar w-full mt-4 flex flex-row">
//             <input
//               type="text"
//               className="rounded-s-full w-full focus:!border-[#034b8a]  px-5 py-2 border-2 border-r-0 border-[var(--primary-color)]"
//               placeholder="Search"
//             />
//             <button className="h-[50px] cursor-pointer hover:bg-[#034b8a] hover:border-[#034b8a]  w-[70px] bg-[var(--primary-color)] border-2 flex justify-center items-center  border-[var(--primary-color)]">
//               <FaSearch className="text-white" size={22} />
//             </button>
//           </div>
//         </div>

//         <div className="category-list">
//           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
//             <div className="item">
//               <h2 className="!mb-0">Categories</h2>
//             </div>
//             <div className="item">
//               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
//             </div>
//           </div>
//           <div className="category-list mt-4 flex flex-col gap-3">
//             {categories.map((cat: Category, index) => (
//               <Link
//                 key={cat.id}
//                 href={`/Listing?category=${cat.slug}`}
//                 className={`flex items-center justify-between hover:text-[var(--primary-color)] ${category === cat.slug ? "active" : ""}`}
//               >
//                 {cat.title}
//                 <span>({cat.article_count})</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="recent-post">
//           <div className="title-wrap grid grid-cols-[auto_1fr] items-center gap-6">
//             <div className="item">
//               <h2 className="!mb-0">Recent Posts</h2>
//             </div>
//             <div className="item">
//               <div className="h-[2px] w-full bg-[var(--primary-color)]" />
//             </div>
//           </div>
//           <div className="category-list mt-4">
//             {recentPosts.slice(0, 5).map((post) => (
//               <Link
//                 key={post.title}
//                 href={`/Listing/${post.categories?.[0]?.slug}/${post.slug}`}
//                 className="grid grid-cols-[100px_1fr] items-start gap-3 py-4 border-b border-gray-200 last:border-b-0 hover:text-[var(--primary-color)]"
//               >
//                 {post?.thumbnail ? (
//                   <Image
//                     alt={post.title}
//                     src={post.thumbnail}
//                     width={100}
//                     height={70}
//                     className="w-[100px] h-[70px] object-cover rounded"
//                   />
//                 ) : (
//                   <Image
//                     src={noImg}
//                     alt={post?.title}
//                     width={100}
//                     height={70}
//                     className="!w-[100px] h-[70px] w-full rounded object-cover"
//                   />
//                 )}
//                 <span>{post?.title}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Sidebar;

import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import sidebarImg from "./../../public/images/blog-item.jpg";
import noImg from "../../public/images/noimg.jpg";

import {
  getBlogCategories,
  getBlogsByCategory,
} from "../actionCreator/home.actionCreator";
import { stringify } from "querystring";

interface HomePageProps {
  searchParams?: {
    page?: string;
    category?: string;
    keyword?: string;
  };
}

interface Category {
  id: number;
  title: string;
  slug: string;
  article_count: number;
}

interface RecentPostCategory {
  id: number;
  title: string;
  slug: string;
}

interface RecentPost {
  id: number;
  title: string;
  slug: string;
  thumbnail?: string;
  edition: string;
  source: string;
  short_description: string;
  categories?: Category[];
}

const Sidebar: React.FC<HomePageProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const page = Number(resolvedSearchParams?.page) || 1;
  const category = resolvedSearchParams?.category || "all";
  const keyword = resolvedSearchParams?.keyword || "";
  const blogsData = await getBlogsByCategory({
    category: "all",
    page: 1,
  });
  const recentPosts: RecentPost[] = blogsData?.data?.articles || [];

  const categoriesData = await getBlogCategories();
  const categories: Category[] = categoriesData?.data || [];

  // console.log("This is recent post: " + JSON.stringify(recentPosts));

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
            {categories.map((cat: Category, index) => (
              <Link
                key={cat.id}
                href={`/Listing?category=${cat.slug}`}
                className={`flex items-center justify-between hover:text-[var(--primary-color)] ${category === cat.slug ? "active" : ""}`}
              >
                {cat.title}
                <span>({cat.article_count})</span>
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
            {/* {recentPosts.slice(0, 5).map((post) => (
              <Link
                key={post.title}
                href={`/Listing/${post.categories[0]?.slug ?? "uncategorized"}/${post.slug}`}
                className="grid grid-cols-[100px_1fr] items-start gap-3 py-4 border-b border-gray-200 last:border-b-0 hover:text-[var(--primary-color)]"
              >
                {post.thumbnail ? (
                  <Image
                    alt={post.title}
                    src={post.thumbnail}
                    width={100}
                    height={70}
                    className="w-[100px] h-[70px] object-cover rounded"
                  />
                ) : (
                  <Image
                    src={noImg}
                    alt={post?.title}
                    width={100}
                    height={70}
                    className="!w-[100px] h-[70px] w-full rounded object-cover"
                  />
                )}
                <span>{post?.title}</span>
              </Link>
            ))} */}
            {recentPosts.slice(0, 5).map((post) => (
              <Link
                key={post.id}
                href={`/Listing/${post.categories?.[0]?.slug ?? "uncategorized"}/${post.slug}`}
                className="grid grid-cols-[100px_1fr] items-start gap-3 py-4 border-b border-gray-200 last:border-b-0 hover:text-[var(--primary-color)]"
              >
                {post.thumbnail ? (
                  <Image
                    alt={post.title}
                    src={post.thumbnail}
                    width={100}
                    height={70}
                    className="w-[100px] h-[70px] object-cover rounded"
                  />
                ) : (
                  <Image
                    src={noImg}
                    alt={post.title}
                    width={100}
                    height={70}
                    className="w-[100px] h-[70px] object-cover rounded"
                  />
                )}
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
