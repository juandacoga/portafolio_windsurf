import Header from './Header';
import Footer from './Footer';
import BlogSkeleton from './BlogSkeleton';

export default function BlogLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <BlogSkeleton />
      </main>
      <Footer />
    </div>
  );
}
