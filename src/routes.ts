import { Router,Request,Response } from "express";

const router = Router();

router.get("/",(request : Request ,response : Response)=>{
    return response.json({mensagem : 'Olá Node e Express'});
})

router.get("/usuarios")

export {router}