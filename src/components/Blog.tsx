import React from "react";
import Link from "next/link"; 
import Image from "next/image"; 
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500`}
    >
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
        <div className="flex flex-col items-center mt-4">
          <p className="text-xs text-gray-500 mt-2">{post.date}</p>
          
            <Link href={`/posts/${post.id}`} passHref
            className={`hover:underline mt-4 block w-full px-6 py-2 ${
              isDarkBackground ? "bg-emerald-500" : "bg-red-500"
            } text-white rounded-lg hover:bg-red-600 transition-colors duration-300
              text-center`}
          >
            Read More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
