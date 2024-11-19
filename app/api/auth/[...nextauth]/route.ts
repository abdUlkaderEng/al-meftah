import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import router from "next/router";
const getUserByEmail =async (email:string) => {
  return await prisma.adminUser.findUnique({
    where: { email },
  });
}
const verifyPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
}


export const authOptions :AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
       authorize(credentials,req) {
        const { userName, password } = credentials as {
          userName: string;
          password: string;
          
         };
         
        //  if(email === getUserByEmail(email) )
        if (userName !== "abdulkader")
           throw new Error("invalid user name")
         if(password !=="123")
          throw new Error("invalid password")
        
          return {id:"123",name:"johnDoe",email:"john@gmail.com"}
        },
      }),
  ],
  pages: {
    signIn: '/validation', // Custom sign-in page
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
