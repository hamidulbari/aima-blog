import HomePage from "./Home";

interface ListingPageProps {
  searchParams?: Promise<{
    page?: string;
    category?: string;
    keyword?: string;
  }>;
}

export default async function ListingPage({ searchParams }: ListingPageProps) {
  const params = searchParams ? await searchParams : {};

  // console.log("====================================");
  // console.log("LISTING PAGE");
  // console.log(params);
  // console.log("====================================");

  return <HomePage searchParams={params} />;
}
