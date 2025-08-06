import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const authorize = async (req, res, next) => {
    try{
            let token;
            if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
                token = req.headers.authorization.split(' ')[1];
            }
            if(!token) {
                return res.status(401).json({
                    message: 'Unauthorized access'
                });
            } 
           const deccoded= jwt.verify(token, process.env.JWT_SECRET);  
           const user = await User.findById(deccoded.userId);
           if(!user) {
                return res.status(401).json({
                    message: 'Unauthorized access'
                });
            }
              req.user = user;
            next();
    }
    catch(error) {
        res.status(401).json({
            message: 'Unauthorized access',
            error: error.message
        });
        
    }
}
export default authorize;