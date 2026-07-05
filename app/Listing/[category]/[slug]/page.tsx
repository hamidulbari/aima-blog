import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import Sidebar from "../../../Common/Sidebar";
import { getBlogDetails } from "../../../actionCreator/home.actionCreator";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaListUl } from "react-icons/fa";
import noImg from "../../../../public/images/noimg.jpg";
interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const PostPage = async ({ params }: PostPageProps) => {
  // ✅ Logging goes INSIDE the function
  const { category, slug } = await params;
  const blogData = await getBlogDetails({ slug });

  console.log("blogData.data");
  console.dir(blogData.data, { depth: null });

  console.log("Keys:", Object.keys(blogData.data));

  if (!blogData?.status || !blogData?.data) {
    notFound();
  }

  //const blog = blogData.data;
  const blog = blogData.data.article;
  const latestArticles = blogData.data.latest_articles ?? [];
  const relatedArticles = blogData.data.related_articles ?? [];
  console.log("BLOG OBJECT");
  console.dir(blog, { depth: null });
  console.log("BLOG TITLE:", blog?.title);
  console.log("BLOG THUMBNAIL:", blog?.thumbnail);
  console.log("BLOG CONTENT:", blog?.content?.length);

  return (
    <>
      <section className="section-spacing">
        <div className="section-container !px-0">
          <div className="grid lg:grid-cols-[70%_1fr] gap-[50px]">
            <div className="detail-wrapper">
              <h1 className="primary-color">{blog?.title}</h1>

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
                  <li>
                    <Link
                      href={"/Listing"}
                      className="text-[var(--primary-color)]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <HiChevronDoubleRight
                      className="text-[var(--primary-color)]"
                      size={20}
                    />
                  </li>
                  <li>
                    <Link
                      href={`/Listing?category=${category}`}
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
                  <li className="truncate max-w-[200px]">{blog?.title}</li>
                </ul>
              </div>

              <div className="main-img">
                {blog.thumbnail ? (
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full mt-5 rounded-2xl shadow-xl h-[200px] lg:h-[400px] object-cover"
                  />
                ) : (
                  <Image
                    src={noImg}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="w-full mt-5 rounded-2xl shadow-xl h-[240px] lg:h-[400px]  object-cover"
                  />
                )}
              </div>

              <div className="meta-info mt-10">
                <ul className="text-sm flex flex-row items-center gap-5 flex-wrap">
                  {blog.edition && (
                    <li className="flex flex-row items-center gap-2">
                      <FaRegClock
                        className="text-[var(--primary-color)]"
                        size={20}
                      />
                      {new Date(blog.edition).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  )}

                  {blog.categories && blog.categories.length > 0 && (
                    <li className="flex flex-row items-center gap-2">
                      <FaListUl
                        className="text-[var(--primary-color)]"
                        size={20}
                      />
                      {blog.categories.map((cat: any) => cat.title).join(", ")}
                    </li>
                  )}

                  {blog.source && (
                    <li className="flex flex-row items-center gap-2">
                      <FaRegUserCircle
                        className="text-[var(--primary-color)]"
                        size={20}
                      />{" "}
                      {blog.source}
                    </li>
                  )}
                </ul>
              </div>

              <div className="details-content mt-5 text-justify">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.long_description || blog.short_description || "",
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
