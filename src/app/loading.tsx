import LoadingSkeleton from '@/components/fallback/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col items-center m-auto">
      <LoadingSkeleton />
    </div>
  );
}
