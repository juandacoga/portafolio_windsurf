import Header from './Header';
import Footer from './Footer';
import AboutSkeleton from './AboutSkeleton';

export default function AboutLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <AboutSkeleton />
      </main>
      <Footer />
    </div>
  );
}
