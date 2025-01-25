import { Request,Response } from "express"

class CreaterUserController{
   handle(request : Request, response : Response) {
    return response.json([
            {
                nome: 'Rafael'
            },
            {
                nome : 'Alcenir'
            },
            {
                nome: 'João Vitor'
            }
        ]
    )
 }
}


export {CreaterUserController}