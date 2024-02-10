import { NextRequest, NextResponse } from "next/server";
import { db } from "@/services/db";
import * as z from "zod";
import { getToken } from "next-auth/jwt";

const proxySchema = z.object({
  name: z.string().min(1, "Name of proxy is required").max(100),
  ip: z.string().min(1, "Ip is required").max(100),
  login: z.string().min(1, "Login is required").max(100),
  password: z.string().min(1, "Password is required").max(100),
});

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = await req.json();

    const { name, ip, login, password } = proxySchema.parse(body);

    const newProxy = await db.proxy.create({
      data: {
        name,
        ip,
        login,
        password,
        user: {
          connect: {
            id: Number(token.sub),
          },
        },
      },
    });

    return NextResponse.json(
      {
        data: newProxy,
        message: "Server created",
      },
      { status: 200 }
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

export async function DELETE(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const body = await req.json();

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const user = await db.proxy.delete({
      where: {
        id: Number(body.id),
        userId: Number(token.sub),
      },
    });

    return NextResponse.json(
      {
        data: user,
        message: "Server deleted",
      },
      { status: 200 }
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
