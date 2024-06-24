import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between mb-4 md:mb-8">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Loading ..."
          disabled
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <CustomersTableSkeleton />
    </div>
  );
}
