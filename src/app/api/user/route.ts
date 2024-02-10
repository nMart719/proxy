import { NextResponse } from "next/server";
import { db } from "@/services/db";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  password: z
    .string()
    .min(8, "Password must have more than 8 characters")
    .max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, password } = userSchema.parse(body);
    console.log("POST /api/user");
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this name already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        user: userWithoutPassword,
        message: "User created",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
