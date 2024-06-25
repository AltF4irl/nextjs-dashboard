import { fetchFilteredCustomers, fetchTableCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

const Page = async ({searchParams}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');

  const formattedCustomers: FormattedCustomersTable[] = customers.map(
    (customer) => {
      return {
        ...customer,
        total_pending: `${customer.total_pending}`,
        total_paid: `${customer.total_paid}`,
      };
    },
  );

  return (
    <div className="w-full">
      <CustomersTable customers={formattedCustomers} />
    </div>
  );
};

export default Page;
