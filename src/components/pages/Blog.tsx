import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Search,
  Calendar,
  User,
  Clock,
  Tag,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Award,
  Share2,
  MessageSquare,
  Bookmark,
  Heart,
  Filter,
  ArrowRight,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  likes: number;
  comments: number;
  featured?: boolean;
}

const CATEGORIES = [
  "Beginner Tips",
  "Advanced Skills",
  "Test Preparation",
  "Driving Psychology",
  "Road Safety",
  "Instructor Insights",
];

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "5 Essential Tips for First-Time Drivers in East London",
    excerpt:
      "Navigate East London's busy streets confidently with these proven beginner techniques that will help you master urban driving.",
    content: "",
    author: "Sarah Johnson",
    date: "2023-09-15",
    readTime: "5 min",
    category: "Beginner Tips",
    tags: ["beginners", "east london", "confidence", "urban driving"],
    imageUrl:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    likes: 124,
    comments: 32,
    featured: true,
  },
  {
    id: "2",
    title: "How to Master Parallel Parking in Tight London Spaces",
    excerpt:
      "Learn the step-by-step technique our instructors use to help students conquer one of driving's most challenging skills.",
    content: "",
    author: "Michael Chen",
    date: "2023-08-28",
    readTime: "7 min",
    category: "Advanced Skills",
    tags: ["parking", "techniques", "london", "skills"],
    imageUrl:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?w=800&q=80",
    likes: 98,
    comments: 24,
  },
  {
    id: "3",
    title: "Driving Test Day: What to Expect and How to Prepare",
    excerpt:
      "Our expert instructors reveal insider tips to help you stay calm and pass your driving test on the first attempt.",
    content: "",
    author: "Emma Williams",
    date: "2023-09-02",
    readTime: "8 min",
    category: "Test Preparation",
    tags: ["test", "preparation", "anxiety", "success"],
    imageUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    likes: 156,
    comments: 41,
  },
  {
    id: "4",
    title: "Overcoming Driving Anxiety: A Student's Journey",
    excerpt:
      "Read how one of our students went from terrified to confident on London's busiest roads using these mental techniques.",
    content: "",
    author: "James Peterson",
    date: "2023-08-15",
    readTime: "6 min",
    category: "Driving Psychology",
    tags: ["anxiety", "confidence", "mental health", "success story"],
    imageUrl:
      "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&q=80",
    likes: 203,
    comments: 57,
  },
  {
    id: "5",
    title: "Night Driving in London: Essential Safety Tips",
    excerpt:
      "Discover how to navigate London after dark with confidence using these proven safety techniques from our experienced instructors.",
    content: "",
    author: "Olivia Thompson",
    date: "2023-09-10",
    readTime: "5 min",
    category: "Road Safety",
    tags: ["night driving", "safety", "london", "visibility"],
    imageUrl:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&q=80",
    likes: 87,
    comments: 19,
  },
  {
    id: "6",
    title: "From Instructor to Student: Lessons I've Learned",
    excerpt:
      "Our senior instructor shares surprising insights from 15 years of teaching East London drivers that will change how you approach learning.",
    content: "",
    author: "David Wilson",
    date: "2023-08-20",
    readTime: "9 min",
    category: "Instructor Insights",
    tags: ["instructor", "experience", "teaching", "learning"],
    imageUrl:
      "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&q=80",
    likes: 112,
    comments: 28,
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_POSTS);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(MOCK_POSTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    let result = posts;

    if (searchTerm) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (activeTab === "featured") {
      result = result.filter((post) => post.featured);
    } else if (activeTab === "popular") {
      result = [...result].sort((a, b) => b.likes - a.likes);
    } else if (activeTab === "recent") {
      result = [...result].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    }

    setFilteredPosts(result);
  }, [posts, searchTerm, selectedCategory, activeTab]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const featuredPost = posts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + Math.random() * 10,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
              Professional Driving Tips & Resources
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Expert advice, DVSA-approved guidance, and practical driving tips from East London's premier automatic driving instructors
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div
              className={`relative transition-all duration-300 ${isSearchFocused ? "scale-105" : ""}`}
            >
              <Input
                type="text"
                placeholder="Search for driving tips, techniques, or topics..."
                className="pl-10 py-6 bg-white/10 backdrop-blur-md border-blue-400/30 focus:border-blue-300 text-white placeholder:text-blue-200/70 rounded-full"
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-blue-100 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
      </section>

      {/* Content Section */}
      <section className="container mx-auto max-w-6xl py-12 px-4 md:px-8">
        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-10 pb-2">
          {[
            {
              id: "all",
              label: "All Posts",
              icon: <BookOpen className="h-4 w-4" />,
            },
            {
              id: "featured",
              label: "Featured",
              icon: <Award className="h-4 w-4" />,
            },
            {
              id: "popular",
              label: "Most Popular",
              icon: <TrendingUp className="h-4 w-4" />,
            },
            {
              id: "recent",
              label: "Recent",
              icon: <Clock className="h-4 w-4" />,
            },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-100 text-blue-800"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && activeTab !== "popular" && activeTab !== "recent" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-500" />
              Featured Article
            </h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {featuredPost.category}
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-slate-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime} read
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <span className="flex items-center text-rose-500">
                          <Heart className="h-4 w-4 mr-1" />
                          {featuredPost.likes}
                        </span>
                        <span className="flex items-center text-blue-500">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {featuredPost.comments}
                        </span>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            {filteredPosts.length === 0
              ? "No articles found"
              : `${filteredPosts.length} Article${filteredPosts.length !== 1 ? "s" : ""}`}
          </h2>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Filter className="h-4 w-4" />
            <span>Filtered by:</span>
            <span className="font-medium text-blue-600">
              {selectedCategory || activeTab !== "all"
                ? `${selectedCategory || activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`
                : "All"}
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                  {post.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <div className="flex space-x-3">
                      <button className="flex items-center text-slate-400 hover:text-rose-500 transition-colors">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="flex items-center text-slate-400 hover:text-blue-500 transition-colors">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                      <button className="flex items-center text-slate-400 hover:text-yellow-500 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center">
                      Read
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-slate-100 inline-block p-6 rounded-full mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No articles found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search or filter to find what you're looking
              for
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
                setActiveTab("all");
              }}
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white py-16 px-4 md:px-8 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + Math.random() * 10,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
              Professional Driving Tips Delivered
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive DVSA-approved driving advice, special offers on automatic driving lessons, and early access to new educational resources
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-white/10 border-blue-400/30 focus:border-blue-300 text-white placeholder:text-blue-200/70"
              required
            />
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6">
              Subscribe
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-blue-200/70 text-sm mt-4"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </section>

      {/* Related Content */}
      <section className="container mx-auto max-w-6xl py-16 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Additional Resources
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our professional resources to help you become a confident automatic driver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
          >
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Free Learning Resources
            </h3>
            <p className="text-slate-600 mb-4">
              Download our DVSA-approved theory test practice questions, hazard perception guides, and automatic driving technique resources.
            </p>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium"
            >
              Access Resources
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100"
          >
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Book an Automatic Lesson
            </h3>
            <p className="text-slate-600 mb-4">
              Ready to start driving? Book your first automatic driving lesson with one of our DVSA-approved instructors in East London.
            </p>
            <Button
              variant="link"
              className="text-purple-600 hover:text-purple-800 p-0 h-auto font-medium"
            >
              Book Now
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
          >
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Ask an Instructor
            </h3>
            <p className="text-slate-600 mb-4">
              Have a specific question about automatic driving? Our DVSA-approved instructors are here to help with personalized professional advice.
            </p>
            <Button
              variant="link"
              className="text-green-600 hover:text-green-800 p-0 h-auto font-medium"
            >
              Ask a Question
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
