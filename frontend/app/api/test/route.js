import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ message: "MongoDB connected successfully ✅" });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return Response.json({ error: "Connection failed ❌" });
  }
}

