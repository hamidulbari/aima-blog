import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import Sidebar from "../Common/Sidebar";
import noImg from "../../public/images/noimg.jpg";
import {
  getBlogBanner,
  getBlogCategories,
  getBlogsByCategory,
} from "../actionCreator/home.actionCreator";

interface Category {
  id: number;
  title: string;
  slug: string;
  article_count: number;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  thumbnail: string | null;
  edition: string;
  short_description: string;
  video_url?: string;
  categories: Category[];
}

interface HomePageProps {
  searchParams?:
    | { page?: string; category?: string; keyword?: string }
    | Promise<{ page?: string; category?: string; keyword?: string }>;
}

const HomePage: React.FC<HomePageProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const page = Number(resolvedSearchParams?.page) || 1;
  const category = resolvedSearchParams?.category || "all";
  const keyword = resolvedSearchParams?.keyword || "";

  const bannerData = await getBlogBanner();
  const categoriesData = await getBlogCategories();
  const blogsData = await getBlogsByCategory({ category, page, keyword });

  const blogs: Blog[] = blogsData?.data?.articles || [];
  const meta = blogsData?.meta || { current_page: 1, last_page: 1, total: 0 };
  const categories: Category[] = categoriesData?.data || [];
  const bannerHtml = bannerData?.data?.html || "";

  const totalPages = Number(meta.last_page) || 1;
  const currentPage = Number(meta.current_page) || 1;

  const buildListingHref = (nextPage: number, nextCategory = category) => {
    const query = new URLSearchParams();
    query.set("page", String(nextPage));
    query.set("category", nextCategory);
    if (keyword) {
      query.set("keyword", keyword);
    }
    return `?${query.toString()}`;
  };

  const getPagination = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const paginations = getPagination();

  return (
    <>
      {/* Banner Section */}
      <section>
        {bannerHtml ? (
          <div
            dangerouslySetInnerHTML={{ __html: bannerHtml }}
            className="w-full"
          />
        ) : (
          <div className="h-[500px] bg-gray-200 flex items-center justify-center">
            <span>No Banner Available!!</span>
          </div>
        )}
      </section>

      {/* Categories Navigation */}
      <section className="bg-[var(--primary-color)] py-4">
        <div className="section-container">
          <ul className="custom-nav-link flex flex-row gap-7 items-center overflow-x-auto">
            <li>
              <Link
                href="/listing"
                className={category === "all" ? "active" : ""}
              >
                All
              </Link>
            </li>
            {categories.map((cat: Category, index) => (
              <li key={`${cat.id}-${cat.slug}-${index}`}>
                <Link
                  href={buildListingHref(1, cat.slug)}
                  className={category === cat.slug ? "active" : ""}
                >
                  {cat.title} ({cat.article_count})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="section-spacing">
        <div className="section-container !px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10">
            <div className="item">
              {blogs.length === 0 ? (
                <div className="text-center py-10">
                  <p>No blogs found</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-[40px]">
                    {blogs.map((blog: Blog, blogIndex) => (
                      <div key={`${blog.id}-${blog.slug}-${blogIndex}`} className="blog-item">
                        <div className="item-wrapper">
                          <div className="img-wrapper rounded-t-lg overflow-hidden relative">
                            {blog.thumbnail ? (
                              <Image
                                src={blog.thumbnail}
                                alt={blog.title}
                                width={400}
                                height={240}
                                className="h-[240px] w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={noImg}
                                alt={blog.title}
                                width={400}
                                height={240}
                                className="h-[240px] w-full object-cover"
                              />
                            )}

                            {blog.edition && (
                              <div className="date text-white text-center font-bold text-xs bg-[var(--primary-color)] absolute right-0 bottom-0 px-2 w-[72.01px] py-2 flex flex-col justify-center items-center">
                                {new Date(blog.edition).getDate() || "11"}
                                <span>
                                  {new Date(blog.edition).toLocaleString(
                                    "default",
                                    { month: "short" },
                                  ) || "Aug"}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="content-wrapper bg-white shadow-lg p-4 border border-t-0 border-[var(--border-color)] relative">
                            <div className="date text-dark text-center font-bold text-xs bg-[var(--golden-color)] absolute right-0 top-0 px-2 w-[71px] py-2 flex flex-col justify-center items-center">
                              <span>
                                {new Date(blog.edition).getFullYear() || "2026"}
                              </span>
                            </div>

                            <div className="content w-[calc(100%_-_50px)] flex flex-col gap-5 justify-between">
                              {/* <Link
                                href={`/${blog.categories[0]?.slug}/${blog.slug}`}
                              > */}
                              <Link
                                href={`/${blog.categories?.[0]?.slug}/${blog.slug}`}
                              >
                                <h3>{blog.title}</h3>
                              </Link>
                              {/* <Link href={`/Detailpage?slug=${blog.slug}`}>
                                <h3 className="text-xl hover:text-[var(--golden-color)] transition line-clamp-2">
                                  {blog.title}
                                </h3>
                              </Link> */}

                              {blog.categories &&
                                blog.categories.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {blog.categories.map((cat: Category, catIndex) => (
                                      <span
                                        key={`${blog.id}-${cat.id}-${cat.slug}-${catIndex}`}
                                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                                      >
                                        {cat.title}
                                      </span>
                                    ))}
                                  </div>
                                )}

                              <div className="link flex flex-col gap-2.5">
                                <Link
                                  href={`/${blog.categories?.[0]?.slug}/${blog.slug}`}
                                  // href={`/${blog.categories[0]?.slug}/${blog.slug}`}
                                  className="hover:text-[var(--golden-color)] flex items-center gap-3 transition primary-color"
                                >
                                  Read More <FaArrowRight size={20} />
                                </Link>

                                {blog.video_url && (
                                  <Link
                                    href={blog.video_url}
                                    target="_blank"
                                    className="hover:text-[var(--golden-color)] flex items-center gap-3 transition primary-color"
                                  >
                                    Watch the Full Session
                                    <FaCirclePlay size={20} />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination-section mt-10">
                      <div className="flex flex-row flex-wrap gap-3">
                        {currentPage > 1 && (
                          <Link
                            href={buildListingHref(currentPage - 1)}
                            className="px-4 hover:bg-[var(--primary-color)] rounded hover:text-white transition border border-[var(--primary-color)] py-2 flex justify-center items-center"
                          >
                            Prev
                          </Link>
                        )}

                        {paginations.map((page, index) =>
                          page === "..." ? (
                            <span key={index} className="px-4 py-2">
                              ...
                            </span>
                          ) : (
                            <Link
                              key={`page-${page}-${index}`}
                              href={buildListingHref(Number(page))}
                              className={`px-4 hover:bg-[var(--primary-color)] rounded hover:text-white transition border border-[var(--primary-color)] py-2 flex justify-center items-center ${
                                currentPage === page
                                  ? "bg-[var(--primary-color)] text-white"
                                  : ""
                              }`}
                            >
                              {page}
                            </Link>
                          ),
                        )}

                        {currentPage < totalPages && (
                          <Link
                            href={buildListingHref(currentPage + 1)}
                            className="px-4 hover:bg-[var(--primary-color)] rounded hover:text-white transition border border-[var(--primary-color)] py-2 flex justify-center items-center"
                          >
                            Next
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="item">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
