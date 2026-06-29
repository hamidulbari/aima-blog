import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import Sidebar from "../../Common/Sidebar";
import {
  getBlogDetails,
  getBlogCategories,
} from "../../actionCreator/home.actionCreator";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  status: boolean;
  priority: number;
  short_description: string;
  long_description: string;
  edition: string;
  author: string | null;
  source: string;
  thumbnail: string | null;
  is_cover: boolean;
  meta_title: string | null;
  meta_description: string | null;
  meta_tags: string | null;
  meta_keywords: string | null;
  categories: Category[];
  authors: any[];
}

interface BlogDetailResponse {
  status: boolean;
  message: string;
  data: {
    article: Article;
    latest_articles: any[];
    related_articles: any[];
  };
}
const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const { category, slug } = await params;
  console.log("category " + slug);
  const blogData = await getBlogDetails({ slug });
  let article: Article | null = null;
  const blog = blogData.data;
  console.log("test: " + JSON.stringify(blog));
  console.log(blog?.article?.thumbnail);
  return (
    <>
      <section className="section-spacing">
        <div className="section-container !px-0">
          <div className="grid lg:grid-cols-[70%_1fr] gap-[50px]">
            <div className="detail-wrapper">
              <h1 className="primary-color">{blog?.article?.title}</h1>

              <div className="pagination">
                <ul className="flex flex-row flex-wrap items-center gap-3">
                  <li>
                    <Link href={"/"} className="text-[var(--primary-color)]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <HiChevronDoubleRight
                      size={20}
                      className="text-[var(--primary-color)]"
                    />
                  </li>
                  {/* <li>
                    <Link
                      href={"/Listing"}
                      className="text-[var(--primary-color)]"
                    >
                      Blog
                    </Link>
                  </li> */}
                  {/* <li>
                    <HiChevronDoubleRight
                      className="text-[var(--primary-color)]"
                      size={20}
                    />
                  </li> */}
                  <li>
                    <Link
                      href={`/${category}`}
                      className="text-[var(--primary-color)] capitalize"
                    >
                      {category?.replace(/-/g, " ")}
                    </Link>
                  </li>
                  <li>
                    <HiChevronDoubleRight
                      className="text-[var(--primary-color)]"
                      size={20}
                    />
                  </li>
                  <li className="  ">{blog?.article?.title}</li>
                </ul>
              </div>

              <div className="main-img">
                {blog?.article?.thumbnail ? (
                  <Image
                    src={blog?.article?.thumbnail}
                    alt={blog?.article?.title}
                    width={800}
                    height={400}
                    className="w-full mt-5 rounded-2xl shadow-xl h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full mt-5 rounded-2xl shadow-xl h-[400px] bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}
              </div>

              <div className="meta-info mt-5">
                <ul className="text-sm flex flex-row items-center gap-5 flex-wrap">
                  {blog?.article?.edition && (
                    <li className="flex flex-row items-center gap-2">
                      <FaRegClock
                        className="text-[var(--primary-color)]"
                        size={20}
                      />
                      {new Date(blog?.article?.edition).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </li>
                  )}

                  {/* {blog?.article?.categories?.length > 0 && (
                    <li className="flex flex-row items-center gap-2">
                      <FaRegUserCircle
                        className="text-[var(--primary-color)]"
                        size={20}
                      />
                      {blog.article.categories
                        .map((cat: any) => cat.title)
                        .join(", ")}
                    </li>
                  )}
                  {blog.source && (
                    <li className="text-gray-500 text-xs">
                      Source: {blog.source}
                    </li>
                  )} */}
                </ul>
              </div>

              <div className="details-content mt-10 text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog?.article?.long_description,
                  }}
                />
              </div>
            </div>

            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
