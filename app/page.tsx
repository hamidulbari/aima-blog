import HomePage from "./Listing/Home";

interface HomeProps {
  searchParams?: Promise<{
    page?: string;
    category?: string;
    keyword?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};

  return <HomePage searchParams={params} />;
}