import jwt from 'jsonwebtoken'

export const authenticateLogin=(req,res,next)=>{
    const header=req.get('Auth')
    if(header){
        const token=header.split(" ")[0]
        
        jwt.verify(token,'RuPayBank',(error,payload)=>{
            if(error){
                // console.log(error)
                res.status(401).send({message:'Invalid Token'})
            }else{
                next()
            }
        })
    }
}