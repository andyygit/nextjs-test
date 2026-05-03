export default function FormDivider({ text }: { text: string }) {
  return (
    <div className="col-span-full">
      <div className="grid grid-cols-3 items-center text-gray-400 mt-2">
        <hr />
        <p className="text-sm text-center">{text}</p>
        <hr />
      </div>
    </div>
  );
}
