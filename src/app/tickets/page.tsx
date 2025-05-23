import { Suspense } from 'react';
import { Heading } from '@/components/heading'
import { Spinner } from '@/components/spinner';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketsPage = () => {

    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <Heading title='Tickets' description='All your tickets in one place'/>
            
            {/* Suspense is a React component. Hover over it to learn more. */}
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    )
};

export default TicketsPage;