import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  like_count: number;
  comments_count: number;
  timestamp: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration - replace with actual Instagram API integration
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      caption: 'Another student passed their test today! 🎉 Congratulations to Sarah on passing first time with only 2 minors! #DrivingSuccess #PassedTest',
      media_url: '/images/certifications/18.jpg',
      permalink: 'https://instagram.com/p/example1',
      media_type: 'IMAGE',
      like_count: 127,
      comments_count: 23,
      timestamp: '2024-07-28T10:00:00Z'
    },
    {
      id: '2',
      caption: 'Behind the scenes with our amazing instructor Mike! Teaching parallel parking like a pro 🚗 #InstructorLife #DrivingLessons',
      media_url: '/images/certifications/DVSA.png',
      permalink: 'https://instagram.com/p/example2',
      media_type: 'IMAGE',
      like_count: 89,
      comments_count: 15,
      timestamp: '2024-07-27T15:30:00Z'
    },
    {
      id: '3',
      caption: 'New car alert! 🚨 Just added this beauty to our fleet - dual controls and all the latest safety features. Ready for your lesson? #NewCar #ModernFleet',
      media_url: '/images/certifications/C8.png',
      permalink: 'https://instagram.com/p/example3',
      media_type: 'IMAGE',
      like_count: 156,
      comments_count: 31,
      timestamp: '2024-07-26T09:15:00Z'
    },
    {
      id: '4',
      caption: 'Theory test tips coming your way! Swipe for our top 5 tips to pass your theory test first time 📚 #TheoryTest #DrivingTips',
      media_url: '/images/certifications/C2.png',
      permalink: 'https://instagram.com/p/example4',
      media_type: 'IMAGE',
      like_count: 203,
      comments_count: 47,
      timestamp: '2024-07-25T14:20:00Z'
    },
    {
      id: '5',
      caption: 'Student spotlight! Meet James who went from nervous beginner to confident driver in just 15 lessons 🌟 #StudentSuccess #DrivingJourney',
      media_url: '/images/certifications/9.png',
      permalink: 'https://instagram.com/p/example5',
      media_type: 'IMAGE',
      like_count: 178,
      comments_count: 29,
      timestamp: '2024-07-24T11:45:00Z'
    },
    {
      id: '6',
      caption: 'Sunday motivation! Remember, every expert was once a beginner. Start your driving journey with us today! #SundayMotivation #LearnToDrive',
      media_url: '/images/certifications/PassPlus.png',
      permalink: 'https://instagram.com/p/example6',
      media_type: 'IMAGE',
      like_count: 94,
      comments_count: 18,
      timestamp: '2024-07-23T16:00:00Z'
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center mb-4"
            >
              <Instagram className="h-8 w-8 text-pink-600 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Follow Our Journey
              </h2>
            </motion.div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Loading our latest Instagram posts...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4">
                <div className="animate-pulse">
                  <div className="bg-gray-300 h-64 rounded-md mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <Instagram className="h-16 w-16 text-pink-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Instagram Feed
          </h2>
          <p className="text-gray-600 mb-6">
            Unable to load Instagram posts at the moment. Please check back later.
          </p>
          <Button
            onClick={() => window.open('https://instagram.com/drive.dojo', '_blank')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow us on Instagram
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="h-8 w-8 text-pink-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow Our Journey
            </h2>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Get inspired by our latest student successes, behind-the-scenes moments, 
            and driving tips. Join our community of over 2,000+ learners!
          </p>
          
          <Button
            onClick={() => window.open('https://instagram.com/drive.dojo', '_blank')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Instagram className="mr-2 h-4 w-4" />
            Follow @drive.dojo
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  
                  <button
                    onClick={() => window.open(post.permalink, '_blank')}
                    className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="h-4 w-4 text-gray-700" />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1 text-pink-500" />
                        {post.like_count}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1 text-blue-500" />
                        {post.comments_count}
                      </span>
                    </div>
                    <span>{formatDate(post.timestamp)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open('https://instagram.com/drive.dojo', '_blank')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Instagram className="mr-2 h-4 w-4" />
            View More on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
