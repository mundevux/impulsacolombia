import React from 'react';
import Blog from './Blog';

const BlogSection = () => {
  const blogs = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Blog 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Blog 3',
      description: 'In hac habitasse platea dictumst. Duis bibendum ligula ac metus fermentum, nec mattis metus dapibus.',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto py-12">
        <p className=' text-lg md:text-xl font-bold text-amber-600'>Sala de </p>
        <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Prensa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index}>
            <Blog image={blog.image} title={blog.title} description={blog.description} />
            <a href={blog.link} className="bg-amber-400 hover:bg-amber-500 transition text-white text-base font-bold rounded-lg p-2">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
