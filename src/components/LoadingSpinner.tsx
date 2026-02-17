export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}
