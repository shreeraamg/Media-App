import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Posts";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
