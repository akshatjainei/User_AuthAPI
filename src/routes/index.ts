import express from 'express'
import user from './auth.routes'
import auth from './user.routes'

const router = express.Router()

router.get('/healthcheck' , (req , res)=>{
    res.sendStatus(200)
})
router.use(user , auth)

export default router