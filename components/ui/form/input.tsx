export default function BasicInput({
  type,
  label,
  inputId,
  inputName,
  iconPrefix,
  children,
  inputPlaceholder,
  value,
  onInputChange,
}: {
  type: 'text' | 'email' | 'password';
  label: string;
  inputId: string;
  inputName: string;
  iconPrefix?: string;
  children: React.ReactNode;
  inputPlaceholder?: string;
  value: string;
  onInputChange: (key: string, value: string) => void;
}) {
  return (
    <div className="col-span-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          {iconPrefix && (
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              {iconPrefix}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            name={inputName}
            placeholder={inputPlaceholder || ''}
            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={value}
            onChange={(event) => {
              onInputChange(inputName, event.target.value);
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
