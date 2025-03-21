import bcrypt from "bcrypt";   
import prisma from "../lib/prisma.js" 
export const register = async (req, res)=>{
    const { username, email, password } = req.body;

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
};

export const login = (req, res)=>{
    console.log("login endpoint")
}

export const logout = (req, res)=>{
    console.log("Register endpoint")
}