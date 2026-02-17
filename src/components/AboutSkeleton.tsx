'use client';

import { UI } from './ui';
import ProjectSkeleton from './ui/ProjectSkeleton';
import TalkSkeleton from './ui/TalkSkeleton';

export default function AboutSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        {/* About Me Section Skeleton */}
        <section className="py-16 bg-white">
          <UI.PageContainer>
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Profile Image Skeleton */}
                <div className="order-2 lg:order-1">
                  <UI.SkeletonElement variant="rectangular" width="w-full" height="h-80" />
                </div>

                {/* About Content Skeleton */}
                <div className="order-1 lg:order-2 space-y-4">
                  <UI.SkeletonElement variant="text" width="w-1/2" height="h-10" />
                  <div className="space-y-3">
                    <UI.SkeletonElement variant="text" width="w-full" height="h-4" />
                    <UI.SkeletonElement variant="text" width="w-full" height="h-4" />
                    <UI.SkeletonElement variant="text" width="w-5/6" height="h-4" />
                  </div>
                  <UI.SkeletonElement variant="text" width="w-28" height="h-10" />
                </div>
              </div>
            </div>
          </UI.PageContainer>
        </section>

        {/* Projects Section Skeleton */}
        <section className="py-16 bg-gray-50">
          <UI.PageContainer>
            <UI.SectionHeading>&nbsp;</UI.SectionHeading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <ProjectSkeleton key={item} />
              ))}
            </div>
          </UI.PageContainer>
        </section>

        {/* Talks Section Skeleton */}
        <section className="py-16 bg-white">
          <UI.PageContainer>
            <UI.SectionHeading>&nbsp;</UI.SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <TalkSkeleton key={item} />
              ))}
            </div>
          </UI.PageContainer>
        </section>
      </main>
    </div>
  );
}
