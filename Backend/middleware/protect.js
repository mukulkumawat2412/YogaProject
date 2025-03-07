
import jwt from 'jsonwebtoken';

import User from "../models/userModel.js"

const protect = async (req, res, next) => {

  const auth = req.headers.authorization
   console.log(auth)
  
  if (auth?.startsWith('Bearer')) {

    const token = auth.split(' ')[1];

    // console.log(token);

    const { id } = jwt.verify(token, 'hello-this-is-my-secret-string');

    const user = await User.findById(id);

    if (user) {

      req.user = user;

      next();
    }

  } else {

    return res.status(404).json({

      message: 'No token found',
    });
  }
};

export default protect;