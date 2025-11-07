import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, mobile, email, password } = await req.json();

    // 🔹 Basic validation
    if (!name || !mobile || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // 🔹 Validate mobile format
    if (!/^\d{10}$/.test(mobile)) {
      return new Response(
        JSON.stringify({ error: "Invalid mobile number format" }),
        { status: 400 }
      );
    }

    // 🔹 Connect to database
    await connectDB();

    // 🔹 Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User with this email or mobile already exists" }),
        { status: 400 }
      );
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Create new user
    const newUser = new User({
      name,
      mobile,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
