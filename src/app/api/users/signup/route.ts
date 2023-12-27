import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import generateUniqueId from "generate-unique-id";
connect();

export async function POST(request: NextRequest) {
  try {
    // get request parameters
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // check if user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    /// generate unique id
    let gui = generateUniqueId({
      length: 4,
      useLetters: false,
    });

    // create new user
    const newUser = new User({
      userId: `HR${gui}`,
      username,
      email,
      password: hashedPassword,
    });

    const savedUserData = await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: savedUserData,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
