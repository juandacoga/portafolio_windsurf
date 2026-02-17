import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero destacado */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {featuredPost && (
              <div className="mb-8">
                <BlogPostCard post={featuredPost} featured={true} />
              </div>
            )}
          </div>
        </section>

        {/* Grid de posts */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} featured={false} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
