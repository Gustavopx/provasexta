export function semaforo(cor){
    if (cor=='verde')
    return'pode passar';

    else if(cor=='vermelho'| cor=='amarelo')
    return 'aguarde'; 

    else
    return 'invalido'; 
} 

export function diaSemana(dia){
    if(dia==0)
    return 'domingo';

    else if(dia==1)
    return 'segunda';
    
    else if(dia==2)
    return 'terça'

    else if(dia==3)
    return 'quarta';
    
    else if(dia==4)
    return 'quinta'

    else if(dia==5)
    return 'sexta';
    
    else if(dia==6)
    return 'sabado'

    else 
    return'dia invalido'
}

export function fatorial(numero){

    let i= numero;
    for(let cont=1; cont<=numero; cont++){
        i= i * (numero - cont);
        i++;
    }
    return i;
}

