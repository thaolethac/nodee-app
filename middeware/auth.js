const jwt = require('jsonwebtoken')
const JWT = "(AC`FJs8rbm-L}MRpT5{n?F(^V9]2^s282z4b/C!+*X]9xCXWQ"

const auth = (req, res, next) => {
    const token = req.header('x-access-token')

    if(!token) {
        return res.status(406).json({err : "No auth...."})
    }
    const verify = jwt.verify(token, JWT )

    if(!verify){
        return res.status(406).json({err: "Token failed"})
    }

    req.user_id = verify.id
    next()
}
module.exports =  auth
