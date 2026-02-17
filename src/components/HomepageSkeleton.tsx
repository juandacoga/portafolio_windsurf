export default function HomepageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        {/* About Me Section Skeleton */}
        <section className="py-16 bg-linear-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder skeleton */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="w-full h-80 bg-gray-200 rounded-2xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Content skeleton */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-3/4"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-1/3 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured Post Skeleton */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-24"></div>
                </div>
              </div>
              
              {/* Other Posts Skeleton */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="h-8 bg-gray-200 rounded-lg animate-pulse w-1/2"></h3>
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-xl border border-gray-200">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse shrink-0"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                          <div className="h-7 bg-gray-200 rounded animate-pulse w-16"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
