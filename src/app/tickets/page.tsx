import { Suspense } from 'react';
import { Heading } from '@/components/heading'
import { Spinner } from '@/components/spinner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TicketList from '@/features/ticket/components/ticket-list';

const TicketsPage = () => {

    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <Heading title='Tickets' description='All your tickets in one place'/>

            {/* A form to create new tickets with */}
            <Card className="w-full max-w-[420px] self-center">
                <CardHeader>
                    <CardTitle>Create Ticket</CardTitle>
                    <CardDescription>Create a new ticket</CardDescription>
                </CardHeader>
                <CardContent>
                    <CreateTicketForm />
                </CardContent>
            </Card>
            
            {/* Suspense is a React component. Hover over it to learn more. */}
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    )
};

export default TicketsPage;