import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: "Account created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
