import React from 'react'

export const Feature = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Featured Blog: Navigation</h2>
        <p className="text-center text-lg mb-8">
          Explore the latest trends and tips in web development with our featured articles on
          essential topics like HTML, CSS, JavaScript, and more. Stay up-to-date with the newest
          tools and techniques.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">HTML: The Foundation of the Web</h3>
            <p className="text-gray-600 text-base mb-4">
              Learn how HTML forms the backbone of every webpage. Master the building blocks of the
              web, from basic structure to advanced HTML5 features.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-700 transition-all duration-300"
            >
              Read More
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">CSS: Styling the Web</h3>
            <p className="text-gray-600 text-base mb-4">
              Dive into the world of CSS and learn how to transform a webpage’s design. Explore Flexbox,
              Grid, and animations for creating responsive and beautiful layouts.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
