import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-3xl p-4">
      <h2>Home</h2>
      <Link href="/tickets" className="underline">View tickets</Link>
    </div>
  );
};

export default HomePage;

