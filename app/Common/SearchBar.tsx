"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBarContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentKeyword = searchParams?.get("keyword") || "";
  const currentCategory = searchParams?.get("category") || "all";

  const [keyword, setKeyword] = useState(currentKeyword);

  // Synchronize state with URL search param changes
  useEffect(() => {
    setKeyword(currentKeyword);
  }, [currentKeyword]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (currentCategory && currentCategory !== "all") {
      params.set("category", currentCategory);
    }
    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }
    params.set("page", "1"); // Reset to first page on search

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar w-full mt-4 flex flex-row">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="rounded-s-full w-full focus:!border-[#034b8a] px-5 py-2 border-2 border-r-0 border-[var(--primary-color)] bg-transparent text-black"
        placeholder="Search"
      />
      <button
        type="submit"
        className="h-[50px] cursor-pointer hover:bg-[#034b8a] hover:border-[#034b8a] w-[70px] bg-[var(--primary-color)] border-2 flex justify-center items-center border-[var(--primary-color)]"
      >
        <FaSearch className="text-white" size={22} />
      </button>
    </form>
  );
}

export default function SearchBar() {
  return (
    <Suspense fallback={
      <div className="search-bar w-full mt-4 flex flex-row">
        <input
          type="text"
          disabled
          className="rounded-s-full w-full focus:!border-[#034b8a] px-5 py-2 border-2 border-r-0 border-[var(--primary-color)] bg-transparent text-black opacity-50"
          placeholder="Search..."
        />
        <button
          disabled
          className="h-[50px] w-[70px] bg-[var(--primary-color)] border-2 flex justify-center items-center border-[var(--primary-color)] opacity-50"
        >
          <FaSearch className="text-white" size={22} />
        </button>
      </div>
    }>
      <SearchBarContent />
    </Suspense>
  );
}
