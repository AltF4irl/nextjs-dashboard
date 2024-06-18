import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';




export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ArrowPathRoundedSquareIcon className="h-12 w-12" />
      <p className="text-[44px]">gitgud</p>
    </div>
  );
}
