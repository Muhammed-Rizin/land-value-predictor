export default function JsonPreview({ formData }) {
  return (
    <details className="mt-8 group">
      <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 p-4 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
        <span className="text-xs font-mono font-medium uppercase">
          Developer Mode: JSON Payload
        </span>
        <span className="transition group-open:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </summary>
      <div className="bg-slate-900 p-4 text-xs text-emerald-400 rounded-lg mt-2 overflow-x-auto">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </details>
  );
}
