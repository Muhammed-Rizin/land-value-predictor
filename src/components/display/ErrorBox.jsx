export default function ErrorBox({ error }) {
  if (!error) return null;

  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
      {error}
    </div>
  );
}
