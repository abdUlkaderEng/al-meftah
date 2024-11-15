import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const data = await prisma.commercialEstate.findMany();

  return NextResponse.json(data);
}
