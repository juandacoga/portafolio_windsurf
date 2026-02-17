'use client';

import HomepageContent from './HomepageContent';
import HomepageLoading from './HomepageLoading';
import { useLoadingState } from '../hooks/useLoadingState';
import Header from './Header';
import Footer from './Footer';

export default function HomepageWrapper() {
  const loading = useLoadingState(500);

  if (loading) {
    return <HomepageLoading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <HomepageContent />
      </main>
      <Footer />
    </div>
  );
}
