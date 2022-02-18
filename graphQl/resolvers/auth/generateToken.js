import jwt from "jsonwebtoken";

const generateToken = (document) => {
  return jwt.sign(
    {
      id: document.id,
      email: document.email,
      username: document.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  );
}

export default generateToken;