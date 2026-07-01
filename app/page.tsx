import HomePage from "./(listing)/Home";

interface HomeProps {
  searchParams?:
    | { page?: string; category?: string; keyword?: string }
    | Promise<{ page?: string; category?: string; keyword?: string }>;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <HomePage searchParams={searchParams} />
    </>
  );
}
