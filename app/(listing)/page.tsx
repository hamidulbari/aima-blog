import HomePage from "./Home";

interface ListingPageProps {
  searchParams?:
    | { page?: string; category?: string; keyword?: string }
    | Promise<{ page?: string; category?: string; keyword?: string }>;
}

export default function ListingPage({ searchParams }: ListingPageProps) {
  return <HomePage searchParams={searchParams} />;
}
