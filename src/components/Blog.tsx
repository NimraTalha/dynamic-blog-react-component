import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";  // Import Image from next/image

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 ${
        isDarkBackground ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'
      }`}
    >
      {/* Image */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={250}
        className="rounded-t-lg w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
      />
      
      {/* Title */}
      <CardTitle className="text-2xl font-semibold mt-4 text-center text-gray-800">
        {post.title}
      </CardTitle>
      
      {/* Description */}
      <CardContent className="text-center mt-4 px-4">
        <p className="text-lg text-gray-600">{post.description}</p>
      </CardContent>
      
      {/* Date and Read More */}
      <div className="flex flex-col items-center mt-6 space-y-2">
        <p className={`text-sm font-medium ${isDarkBackground ? 'text-slate-400' : 'text-slate-500'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-3 text-lg font-medium rounded-lg transition-all ${
            isDarkBackground ? 'bg-pink-600 hover:bg-pink-500' : 'bg-green-600 hover:bg-green-500'
          } text-white text-center shadow-lg hover:shadow-xl`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
