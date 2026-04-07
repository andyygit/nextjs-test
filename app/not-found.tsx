import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center ">
      <div>
        <h1 className="inline-block my-0 mr-5 pr-6 text-2xl font-bold align-top leading-12 border-r border-gray-400">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-sm font-light leading-12 m-0">
            Pagina nu a fost gasita.
          </h2>
        </div>
      </div>
    </div>
  );
}
