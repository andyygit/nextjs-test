import { Menu, ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="flex h-14 items-center border-t border-gray-950/5 px-4 sm:px-6 max-lg:hidden">
      <button
        type="button"
        className="relative inline-grid size-6 place-items-center rounded-md hover:bg-gray-950/5 -ml-1.5"
      >
        <Menu size={18} strokeWidth={1} />
      </button>
      <ol className="sticky ml-4 flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap">
        <li className="flex items-center gap-2">
          <span>Layout</span>
          <ChevronRight size={18} strokeWidth={1} />
        </li>
        <li className="truncate text-gray-950">top / right / bottom / left</li>
      </ol>
    </div>
  );
}
