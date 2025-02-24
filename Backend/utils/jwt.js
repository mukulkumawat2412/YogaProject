import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {
    const secretString = "hello-this-is-my-secret-string"
    return jwt.sign(payload , secretString , {expiresIn : '20D'})
    
}