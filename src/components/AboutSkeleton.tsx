export default function AboutSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        {/* About Me Section Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Profile Image Skeleton */}
                <div className="order-2 lg:order-1">
                  <div className="w-full h-80 bg-gray-200 rounded-2xl animate-pulse"></div>
                </div>

                {/* About Content Skeleton */}
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-1/2"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-28"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section Skeleton */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-1/4 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-video bg-gray-200 animate-pulse"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
                      <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talks Section Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-1/6 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-32 h-24 bg-gray-200 rounded-lg animate-pulse shrink-0"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                        </div>
                        <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-24"></div>
                      </div>
                    </div>
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
