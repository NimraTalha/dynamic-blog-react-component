import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";  // Import Image from next/image

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 ${isDarkBackground ? 'bg-white/70 text-slate-800' : 'text-white/75'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      {/* Use Image component from next/image */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={200}
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <CardContent className="text-center">
        <p className="text-sm">{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-white bg-red-600 rounded hover:bg-emerald-400 ${isDarkBackground ? 'bg-black hover:bg-red-500' : 'bg-black hover:bg-emerald-400'}`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
