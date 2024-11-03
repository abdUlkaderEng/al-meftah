import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client"

export async function GET(request: NextRequest) {
    const data =await prisma.apartment.findMany({
        where: {apartmentStatus: "NEW_BUILD"}
    })
    return NextResponse.json(data)
}