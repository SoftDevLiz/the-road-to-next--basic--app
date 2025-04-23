import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-3xl">Home</h2>
      <Link href={ticketsPath} className="underline text-3xl">View tickets</Link>
    </div>
  );
};

export default HomePage;

