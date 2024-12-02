
"use client";
import React from "react";
import { useRouter } from "next/router";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Image from "next/image";

interface PostProps {
  params: {
    id: string;
  };
}

// Full list of posts
const posts = [
  {
    id: "1",
    title: "HTML: The Foundation of the Web",
    description: `HTML (Hypertext Markup Language) is the cornerstone of web development, the building block that structures every web page we visit. It acts as the skeleton that gives form to content, allowing browsers to render the text, images, and multimedia we interact with daily. From basic text formatting to embedding complex forms and videos, mastering HTML is essential for any aspiring web developer.`,
    date: "28/11/2024",
    image: "/images/1.jpg",
  },
  {
    id: "2",
    title: "CSS Secrets for Stunning Websites",
    description: `CSS (Cascading Style Sheets) transforms static HTML into visually stunning web pages. It's what gives a website its unique style—colors, fonts, layouts, and animations. Beyond simple styling, CSS is a powerhouse that enables responsive design, ensuring websites look perfect on any screen size. Learn advanced CSS techniques like Flexbox, Grid, and animations that make web pages come alive.`,
    date: "29/11/2024",
    image: "/images/2.jpg",
  },
  {
    id: "3",
    title: "JavaScript: The Brain of the Browser",
    description: `JavaScript is the dynamic force behind interactive web pages, turning static content into engaging user experiences. Whether it’s form validation, interactive buttons, or real-time data updates, JavaScript is the key to making websites lively and functional. This blog delves into the power of JavaScript, showcasing how it enhances user experience and drives complex web applications.`,
    date: "30/11/2024",
    image: "/images/3.jpg",
  },
  {
    id: "4",
    title: "Responsive Design with Flexbox & Grid",
    description: `In today’s mobile-first world, responsive design is essential. Flexbox and Grid, two revolutionary CSS layout models, enable developers to create designs that adapt seamlessly to any screen size. This post explores core concepts of Flexbox and Grid, with practical examples for designing responsive layouts that look stunning on desktops, tablets, and mobile devices.`,
    date: "01/12/2024",
    image: "/images/4.png",
  },
  {
    id: "5",
    title: "Exploring the World of Robotic Engineering",
    description: `Robotic engineering combines mechanical, electrical, and computer engineering to create intelligent machines. From autonomous vehicles to robotic surgery, robots are transforming industries and reshaping our future. This blog explores cutting-edge advancements and the role of AI in robotics, showcasing how innovations are pushing the boundaries of what machines can achieve.`,
    date: "02/12/2024",
    image: "/images/5.png",
  },
  {
    id: "6",
    title: "TypeScript: Strong Typing for JavaScript",
    description: `TypeScript enhances JavaScript by introducing static typing, making your code more reliable and easier to maintain. By catching errors early and offering powerful features like interfaces and generics, TypeScript ensures robust and scalable applications. This post explores how TypeScript simplifies debugging and improves development workflows.`,
    date: "03/12/2024",
    image: "/images/6.jpg",
  },
  {
    id: "7",
    title: "Tailwind CSS: Faster UI Design",
    description: `Tailwind CSS revolutionizes UI development by providing utility-first classes that allow for rapid, customizable designs directly in your HTML. Tailwind empowers developers to build sleek, functional interfaces efficiently, reducing the need for traditional stylesheets while improving productivity.`,
    date: "04/12/2024",
    image: "/images/7.png",
  },
  {
    id: "8",
    title: "Next.js: Building the Future of the Web",
    description: `Next.js is a game-changer in web development, offering server-side rendering (SSR) and static site generation (SSG) that boost performance and SEO. With seamless React integration, Next.js allows developers to create fast, scalable web applications, changing the way we build modern websites.`,
    date: "05/12/2024",
    image: "/images/8.jpg",
  },
  {
    id: "9",
    title: "SEO Best Practices for Developers",
    description: `SEO (Search Engine Optimization) is vital for ensuring your website ranks high on search engines and attracts organic traffic. This post explores best practices like using semantic HTML, optimizing images, and improving site performance to enhance SEO, ensuring your website reaches the widest possible audience.`,
    date: "06/12/2024",
    image: "/images/9.jpg",
  },
  {
    id: "10",
    title: "Web Security Essentials",
    description: `Web security is a critical concern in today’s digital age. Developers must implement robust security practices to safeguard user data and ensure the integrity of their code. This blog highlights common vulnerabilities and provides actionable tips to fortify web applications against cyberattacks.`,
    date: "07/12/2024",
    image: "/images/10.jpg",
  },
];

const Post = ({ params }: PostProps) => {
  const { id } = params;

  // Find the post by id
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
  }

  // Helper function to render paragraphs
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="text-justify mt-4">{para.trim()}</p>
    ));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-8">{post.title}</h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={800}
          className="mt-6"
        />
      )}
      <div className="mt-6">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
};

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  return <Post params={{ id: String(id) }} />;
};

export default PostPage;
