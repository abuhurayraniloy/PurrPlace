import bcrypt from "bcrypt";    
export const register = async (req, res)=>{
    const { username, email, password } = req.body;

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //Create new user
}

export const login = (req, res)=>{
    console.log("Register endpoint")
}

export const logout = (req, res)=>{
    console.log("Register endpoint")
}