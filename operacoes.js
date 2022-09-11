module.exports = {
    subtrair (num1,num2){
    return num1-num2;
},
    multiplicar(num1,num2){
        if(num1 == 0 || num2 == 0 ){
            return "Não se pode dividir por zero";
        } else{
         return num1*num2;                     
        }
},
    dividir(num1,num2){
        if(num1 == 0 || num2 == 0 ){
            return "Não se pode dividir por zero"
        } else{
            return num1/num2; 
        }                    
},
    somar(num1,num2){
        return num1+num2;
},
    calcular (num1,num2,operacao){
        return operacao(num1,num2);
    }
}