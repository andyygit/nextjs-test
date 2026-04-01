export default function Skeleton() {
  return (
    <div className="m-4 p-4 animate-pulse">
      <p className="h-28 w-1/2 bg-gray-200 rounded-lg dark:bg-neutral-700"></p>
      <p className="mt-4 h-4 w-2/3 bg-gray-200 rounded-lg dark:bg-neutral-700"></p>
      <ul className="mt-4 space-y-2">
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
        <li className="w-4/5 h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
      </ul>
    </div>
  );
}
