import { CircleCheck, Ban, Info } from 'lucide-react';

export default function Alert({
  type,
  message,
}: {
  type: 'success' | 'danger' | 'info';
  message: string;
}) {
  const color =
    type === 'success'
      ? 'bg-green-100 border-green-600 text-green-700'
      : type === 'danger'
        ? 'bg-red-100 border-red-600 text-red-700'
        : type === 'info'
          ? 'bg-yellow-100 border-yellow-600 text-yellow-700'
          : '';
  const icon =
    type === 'success' ? (
      <CircleCheck size={14} />
    ) : type === 'danger' ? (
      <Ban size={14} />
    ) : type === 'info' ? (
      <Info size={14} />
    ) : (
      ''
    );
  return (
    <div className={`border rounded-sm shadow-md ${color}`}>
      <div className="flex p-2 items-center">
        {icon}
        <div className="ms-3">
          <p className="text-sm font-light">{message}</p>
        </div>
      </div>
    </div>
  );
}
