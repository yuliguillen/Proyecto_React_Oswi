import {Router} from "express"

const router=new Router()

//Obtener la info
router.get('/info', infoContrller.index)

//Enviar la info
router.get('/info', infoContrller.store)

//Consultar la info especifica
router.get('/info:id', infoContrller.detail)

export default router 