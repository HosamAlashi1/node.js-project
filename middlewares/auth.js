const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        return res.status(401).send({message:"unAuthorized"})
    }
    const token = authHeader.split(' ')[1];// [0] => bearer , [1] => token
    
    try {
        const decode = jwt.verify(token,process.env.SECRETKEY);
        // save user name to user has login in backend side 
        req._id = decode._id;
        next()
    } catch (error) {
        return res.status(401).send({message:"unAuthorized"})
    }
}