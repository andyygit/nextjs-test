export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="relative col-start-1 row-span-full row-start-1 max-lg:hidden"
    >
      <div className="sticky top-14.25 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] overflow-y-auto p-4 space-y-2">
        sidebar
      </div>
    </div>
  );
}
