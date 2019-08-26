import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  const [, token] = authHeader.split(' ');

  // return jwt.verify(token, authConfig.secret, function(err, decoded) {
  //   if (err) {
  //     return res.json({
  //       success: false,
  //       message: err,
  //     });
  //   }
  //   req.user = decoded;
  //   return next();
  // });
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    return next();
  } catch (err) {
    return res.status(401).json({ err });
  }
};
