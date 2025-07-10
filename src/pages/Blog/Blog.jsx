import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, Calendar, User, Clock, Tag, Filter } from 'lucide-react';
import styles from './Blog.module.scss';

// Import blog post images (you would replace these with your actual imports)
import BlogImage1 from '../../assets/blog/licensing-expo.jpg';
import BlogImage2 from '../../assets/blog/ecommerce-trends.jpg';
import BlogImage3 from '../../assets/blog/custom-packaging.jpg';
import BlogImage4 from '../../assets/blog/digital-marketing.jpg';
import BlogImage5 from '../../assets/blog/customer-strategy.jpg';
import BlogImage6 from '../../assets/blog/brand-identity.jpg';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const sectionRef = useRef(null);
  
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Licensing Expo 2025: Our Top Takeaways",
      excerpt: "From life-sized mascots to mind-blowing merch collabs, Licensing Expo 2025 was a full house of inspo and insight. Held in the buzzing, blinding brilliance of Las Vegas between the 20th and 22nd of May 2025, it brought together the biggest names in licensing, branding, and ecommerce – and we were right there in the thick of it all.",
      image: BlogImage1,
      category: "events",
      author: "Sarah Johnson",
      date: "May 28, 2025",
      readTime: "5 min read",
      slug: "licensing-expo-2025-takeaways"
    },
    {
      id: 2,
      title: "E-commerce Trends That Will Dominate 2025",
      excerpt: "The e-commerce landscape is constantly evolving. From AI-powered personalization to sustainable shipping solutions, we break down the top trends that are reshaping online retail in 2025 and how brands can leverage them for growth.",
      image: BlogImage2,
      category: "ecommerce",
      author: "Mark Williams",
      date: "May 15, 2025",
      readTime: "4 min read",
      slug: "ecommerce-trends-2025"
    },
    {
      id: 3,
      title: "The Power of Custom Packaging in Brand Experience",
      excerpt: "Unboxing has become a crucial touchpoint in the customer journey. Discover how innovative packaging design can elevate your brand experience, drive social sharing, and create memorable moments for your customers.",
      image: BlogImage3,
      category: "design",
      author: "Emma Thompson",
      date: "May 8, 2025",
      readTime: "6 min read",
      slug: "custom-packaging-brand-experience"
    },
    {
      id: 4,
      title: "Digital Marketing Strategies That Actually Convert",
      excerpt: "Cut through the noise with proven digital marketing approaches that deliver real results. From content marketing to performance ads, learn how to build a strategy that connects with your audience and drives conversions.",
      image: BlogImage4,
      category: "marketing",
      author: "Alex Chen",
      date: "April 29, 2025",
      readTime: "7 min read",
      slug: "digital-marketing-strategies-convert"
    },
    {
      id: 5,
      title: "From Attraction to Advocacy: Building a Customer Strategy",
      excerpt: "The customer journey is more complex than ever. We explore how to create a holistic strategy that not only attracts new customers but turns them into loyal advocates for your brand through exceptional experiences.",
      image: BlogImage5,
      category: "strategy",
      author: "Jessica Lee",
      date: "April 22, 2025",
      readTime: "5 min read",
      slug: "building-customer-strategy"
    },
    {
      id: 6,
      title: "The Anatomy of a Successful Brand Identity",
      excerpt: "What makes a brand identity truly resonate with its audience? We dissect the key elements of successful brand identities and provide a framework for creating a cohesive visual and verbal identity that stands out.",
      image: BlogImage6,
      category: "design",
      author: "David Miller",
      date: "April 15, 2025",
      readTime: "6 min read",
      slug: "successful-brand-identity"
    }
  ];
  
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'design', label: 'Design & Production' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'events', label: 'Events' }
  ];

  // Filter posts based on category and search query
  useEffect(() => {
    let posts = [...blogPosts];
    
    // Filter by category
    if (activeCategory !== 'all') {
      posts = posts.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(posts);
  }, [activeCategory, searchQuery]);

  // Initialize filtered posts
  useEffect(() => {
    setFilteredPosts(blogPosts);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`${styles.blogSection} ${isVisible ? styles.visible : ''}`} 
      ref={sectionRef}
    >
      <div className={styles.blogBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.chevronPattern}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <div className={styles.headerContent}>
            
            <h1 className={styles.blogTitle}>Our Blog</h1>
            <p className={styles.blogSubtitle}>
              Insights, strategies, and inspiration to help you grow your brand from <span className={styles.highlight}>concept</span> to <span className={styles.highlight}>customer</span>.
            </p>
          </div>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className={styles.searchButton}>
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.categoryNav}>
          <div className={styles.categoryFilter}>
            <Filter size={16} />
            <span>Filter by:</span>
          </div>
          <div className={styles.categoriesList}>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.featuredPost}>
          <a href={`/blog/${blogPosts[0].slug}`} className={styles.featuredPostLink}>
            <div className={styles.featuredPostContent}>
              <div className={styles.featuredPostText}>
                <div className={styles.featuredLabel}>Featured Post</div>
                <h2 className={styles.featuredPostTitle}>{blogPosts[0].title}</h2>
                <p className={styles.featuredPostExcerpt}>{blogPosts[0].excerpt}</p>
                <div className={styles.featuredPostMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <User size={14} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={14} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <div className={styles.readMoreLink}>
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
              <div className={styles.featuredPostImage}>
                <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                <div className={styles.featuredImageOverlay}></div>
              </div>
            </div>
          </a>
        </div>
        
        <div className={styles.blogGrid}>
          {filteredPosts.slice(1).map(post => (
            <a 
              key={post.id}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
            >
              <div className={styles.blogImageWrapper}>
                <img src={post.image} alt={post.title} className={styles.blogImage} />
                <div className={styles.blogImageOverlay}></div>
                <div className={styles.blogCategory}>
                  <Tag size={12} />
                  <span>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                </div>
              </div>
              <div className={styles.blogContent}>
                <h3 className={styles.blogPostTitle}>{post.title}</h3>
                <p className={styles.blogPostExcerpt}>{post.excerpt}</p>
                <div className={styles.blogPostMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className={styles.blogReadMore}>
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className={styles.resetButton}
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
        
        <div className={styles.pagination}>
          <button className={`${styles.paginationButton} ${styles.active}`}>1</button>
          <button className={styles.paginationButton}>2</button>
          <button className={styles.paginationButton}>3</button>
          <button className={`${styles.paginationButton} ${styles.next}`}>
            <span>Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>Subscribe to our newsletter</h3>
            <p className={styles.newsletterDescription}>
              Stay up to date with the latest industry insights, trends, and strategies.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
          <div className={styles.chevronDecoration}></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;