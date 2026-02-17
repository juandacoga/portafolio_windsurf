'use client';

import { UI } from './UI';

export default function TalkSkeleton() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <UI.SkeletonElement variant="rectangular" width="w-full md:w-32" height="h-24" />
        <div className="flex-1 space-y-3">
          <UI.SkeletonElement variant="text" width="w-3/4" height="h-6" />
          <UI.SkeletonElement variant="text" width="w-full" height="h-4" />
          <UI.SkeletonElement variant="text" width="w-5/6" height="h-4" />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <UI.SkeletonElement variant="text" width="w-16" height="h-4" />
              <UI.SkeletonElement variant="text" width="w-20" height="h-4" />
            </div>
            <UI.SkeletonElement variant="text" width="w-24" height="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
