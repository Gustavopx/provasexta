import { Router } from "express"
import {semaforo, diaSemana, Fatorial} from "./service.js"

const server = Router();

server.get('/semaforo/:cor',(req,resp)=>{
    try{ 
        let resposta= semaforo(req.params.cor);
        resp.send({resposta});
    }
    catch (err){
        resp.status(404).send({error:err.message})
    }
})

server.get('/diasemana',(req,resp)=>{ 

try{
    let dia = Number(req.query.dia);
    let nome = diaSemana(dia);
    
    resp.send({nome:nome});

}
catch(err){
    resp.status(404).send({error:err.message})
}
})

server.get('/fatorial', (req, resp)=>{
    try{
        let n = Number(req.query.n);
        let r= Fatorial(n);

        resp.send({
            fatorial:r
        })
    }
    catch(err){
        resp.status(404).send({error:err.message})
    }
})



export default server;
