/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";



const posts = [
  {
    id: "1",
    title: "HTML: The Foundation of the Web",
    description: `HTML (HyperText Markup Language) forms the backbone of the internet. Every webpage we interact with is built on HTML, making it essential for web developers to master. From basic text formatting to embedding multimedia, HTML structures the content of the web. Whether you're creating a simple portfolio or a complex web application, understanding HTML is the first step toward building a career in web development.`,
    date: "01/12/2024",
    image: "/images/1.jpg",
  },
  {
    id: "2",
    title: "CSS Secrets for Stunning Websites",
    description: `CSS (Cascading Style Sheets) breathes life into static HTML pages. It handles everything from colors and layouts to fonts and animations. Advanced concepts like Flexbox and Grid allow developers to create responsive designs that work seamlessly on all devices. Mastering CSS not only improves the aesthetic appeal of websites but also enhances user experience.`,
    date: "02/12/2024",
    image: "/images/2.jpg",
  },
  {
    id: "3",
    title: "JavaScript: The Brain of the Browser",
    description: `JavaScript transforms static pages into dynamic experiences. Whether it's form validation, interactive content, or real-time updates, JavaScript powers the interactivity on the web. It's used in everything from simple websites to large-scale applications, making it a must-learn for developers looking to create engaging user experiences.`,
    date: "03/12/2024",
    image: "/images/3.jpg",
  },
  {
    id: "4",
    title: "Responsive Design with Flexbox & Grid",
    description: `In the era of mobile-first design, responsive web development is crucial. Flexbox and Grid provide developers with powerful tools to create layouts that adapt to different screen sizes. Flexbox excels at single-axis layout control, while Grid is ideal for two-dimensional layout systems, making it easier than ever to ensure your website looks great on any device.`,
    date: "04/12/2024",
    image: "/images/4.png",
  },
  {
    id: "5",
    title: "Exploring the World of Robotic Engineering",
    description: `Robotics combines mechanical, electrical, and computer engineering to create intelligent machines capable of performing complex tasks. From autonomous vehicles to surgical robots, this field is pushing the boundaries of what machines can achieve. The integration of AI and machine learning is further accelerating advancements, making robotics one of the most exciting areas of innovation today.`,
    date: "05/12/2024",
    image: "/images/5.png",
  },
  {
    id: "6",
    title: "TypeScript: Strong Typing for JavaScript",
    description: `TypeScript enhances JavaScript by introducing static typing, making code more reliable and easier to maintain. It offers powerful features like interfaces and generics, allowing developers to catch errors early. TypeScript is ideal for large-scale applications where maintaining code quality and scalability is essential.`,
    date: "06/12/2024",
    image: "/images/6.jpg",
  },
  {
    id: "7",
    title: "Tailwind CSS: Faster UI Design",
    description: `Tailwind CSS revolutionizes front-end development by offering utility-first classes that streamline the process of building user interfaces. It allows developers to create custom designs directly in HTML, reducing the need for traditional stylesheets. This efficiency makes Tailwind a popular choice among modern web developers.`,
    date: "07/12/2024",
    image: "/images/7.png",
  },
  {
    id: "8",
    title: "Next.js: Building the Future of the Web",
    description: `Next.js is a React framework that offers server-side rendering and static site generation, enhancing both performance and SEO. It simplifies the process of building fast, scalable web applications and is widely used by developers for its powerful features and seamless React integration.`,
    date: "08/12/2024",
    image: "/images/8.jpg",
  },
  {
    id: "9",
    title: "SEO Best Practices for Developers",
    description: `Search Engine Optimization (SEO) ensures your website ranks high in search engine results, driving organic traffic. Developers can improve SEO by using semantic HTML, optimizing images, and improving site performance. Following best practices helps ensure your content reaches the widest possible audience.`,
    date: "09/12/2024",
    image: "/images/9.jpg",
  },
  {
    id: "10",
    title: "Web Security Essentials",
    description: `Web security is crucial in protecting both user data and the integrity of your web applications. Common vulnerabilities include XSS, SQL injection, and CSRF attacks. Implementing security best practices such as input validation, secure authentication, and data encryption can help mitigate risks and protect your users.`,
    date: "10/12/2024",
    image: "/images/10.jpg",
  },
];
export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post =posts.find ((p)=> p.id === id);
  if (!post) {
    return (
      <div className="text-2xl font-bold  text-center mt-10">
        Post Not Found
      </div>
    )
  };
  const renderParagraphs =(description:string)=>{
    return description .split("/n").map((para, index)=>(
      <p key ={index} className="mt-4 text-justify">
        {para.trim()}
      </p>

    ))
  }
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl  text-3xl font-bold text-emerald-400">
        {" "} 
        {post.title}</h1>
        {post.image &&(
          <img 
          src={post.image}
          alt={post.title}/>
        )}
      <CommentSection postId={post.id}/>
      <AuthoreCard/>
    </div>
  )

}