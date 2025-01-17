'use client';

import Skeleton from '@/components/ui/Skeleton';

export default function ContactLoading() {
  return (
    <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <Skeleton variant="text" className="h-12 w-48 mx-auto" />

          <div className="flex justify-center space-x-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} variant="circular" className="h-8 w-8" />
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <Skeleton variant="text" className="h-8 w-48 mb-6" />
            
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton variant="text" className="h-4 w-24" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ))}

              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 