/**
 * Middleware Authorisation
 * 
 * isert on fetch hearders (front-end requests): 
 *  'Authorization': Bearer localStorage.getItem('jwt') 
 */
const jwt = require('jsonwebtoken')
const UserModel = require("../models/User")

module.exports = {
  connect: (req, res, next) => {
    const token = req.get('Authorization')

    if(!token) res.status(401).json({msg: 'Accès non authorisé'})

    jwt.verify(token.split(' ')[1], process.env.JWT_TOKEN, async (err, decodedToken) => {
      if (err) return res.status(401).json({msg: 'Accès non authorisé'})

      if (!decodedToken.userId) return res.status(401).json({msg: 'Accès non authorisé'})

      await UserModel.findOne({ _id: decodedToken.userId }, (err, user) => {
        if (err) return res.status(500)
        if (!user) return res.status(401).json({msg: 'Accès non authorisé'})

        req.user = user
        next()
      })

    })
  }
}