export default function BlogSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        {/* Hero destacado Skeleton */}
        <section className="py-16 bg-linear-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="w-full h-64 lg:h-80 bg-gray-200 rounded-xl animate-pulse"></div>
                  </div>
                  <div className="order-1 lg:order-2 space-y-4">
                    <div className="h-10 bg-gray-200 rounded-full animate-pulse w-24"></div>
                    <div className="space-y-3">
                      <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de posts Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-full h-40 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
