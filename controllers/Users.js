import User from "../models/Users.js";
import bycript from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";

export const createUser = async (req, res) => {
    const {username, password, email} = req.body
    const user = {
        username,
        email,
        password: await bycript.hash(password, 10),
    }
    
    try {
       await User.create(user) 
       res.json({
           "message": "User Created"
       })
    } catch (error) {
        console.log(error);
    }
}




export const loginUser = async (req, res) => {
    const {username, password} = req.body
    const userData = User.findOne({
        where: {
            username: username
        }
    })

    if (!userData) {
        res.json({
            "message": "user not found"
        })
    }

    const validUser = await bycript.compare(password, userData.password)

    if (!validUser) {
        res.json({
            "message": "password incorrect"
        })
    }

    const token = jsonwebtoken.sign({
        id: userData.id,
        username: userData.username,
        email: userData.email
    },"SHSHSHSH",
      {expiresIn: "id"}
    )

    return res.json({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        token
    })

}

export const getUser = async (req, res) => {
    const { sortBy } = req.query
    console.log(sortBy);
        try {
            const user = await User.findAll();
            res.send(user);
        } catch (err) {
            console.log(err);
        }   
}




