import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


const adminCheck = async () => {
  const email = await prisma.adminUser.findMany()
  console.log(email)
  return email
}
export default adminCheck
