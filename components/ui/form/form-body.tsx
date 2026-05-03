export default function FormBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-32 max-w-xl mx-auto">
      {children}
    </div>
  );
}
