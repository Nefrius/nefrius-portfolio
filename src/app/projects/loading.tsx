'use client';

import Skeleton from '@/components/ui/Skeleton';

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Skeleton variant="text" className="h-12 w-64 mb-4" />
          <Skeleton variant="text" className="h-6 w-96" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton variant="text" className="h-8 w-3/4" />
              <Skeleton variant="text" className="h-4 w-full" />
              <Skeleton variant="text" className="h-4 w-5/6" />
              <div className="flex gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16" />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Skeleton variant="text" className="h-4 w-24" />
                <Skeleton variant="circular" className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 