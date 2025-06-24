import Link from "next/link";
import { Heading } from '@/components/heading'
import { buttonVariants } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title='Home' description='Welcome to TicketBounty' />
      <div className="flex-1 flex flex-col items-center">
          <Link href={ticketsPath} className={buttonVariants({ variant: 'default'})}>View tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;

