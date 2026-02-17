'use client';

import { UI } from './UI';

export default function ProjectSkeleton() {
  return (
    <div className={UI.CLASSES.CARD_BASE}>
      <UI.SkeletonElement variant="rectangular" width="w-full" height="aspect-video" />
      <div className="p-4 space-y-2">
        <UI.SkeletonElement variant="text" width="w-3/4" height="h-5" />
        <UI.SkeletonElement variant="text" width="w-full" height="h-4" />
        <UI.SkeletonElement variant="text" width="w-2/3" height="h-4" />
        <div className="flex gap-2">
          <UI.SkeletonElement variant="text" width="w-16" height="h-6" />
          <UI.SkeletonElement variant="text" width="w-20" height="h-6" />
        </div>
      </div>
    </div>
  );
}
