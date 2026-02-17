export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-40 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="flex justify-between items-center">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>
    </div>
  );
}
