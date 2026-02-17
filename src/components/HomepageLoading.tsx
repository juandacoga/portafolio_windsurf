'use client';

import Header from './Header';
import Footer from './Footer';
import HomepageSkeleton from './HomepageSkeleton';

export default function HomepageLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <HomepageSkeleton />
      </main>
      <Footer />
    </div>
  );
}
