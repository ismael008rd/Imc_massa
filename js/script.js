const btnFechar= document.querySelector('.btn_close')
const modal = document.querySelector('.modal')
const peso= document.querySelector('.peso')
const altura = document.querySelector('.altura')
const btn_calcular= document.querySelector('.btn_calcular')
const img= document.querySelector('.img')
const imcR= document.querySelector('.imcR')

let iform_imc= document.querySelector('.infor_imc')
console.log(iform_imc.innerHTML)


const imcInforma=[
    {
        estado:'muito abaixo do peso',
        texto:'Seu IMC indica que você está muito abaixo do peso. É importante buscar orientação médica para garantir uma abordagem saudável para ganhar peso e melhorar sua saúde geral.',
        imgUrl:'img/muito_abaixo_do_peso.jpg'
    },
    {
        estado:'abaixo do peso',
        texto:'Seu IMC sugere que você está abaixo do peso. Considerando sua saúde, seria benéfico procurar aconselhamento profissional para alcançar um peso mais adequado e garantir uma dieta equilibrada.',
        imgUrl:'img/abaixo_do_peso.jpg'
    },
    {
        estado:'Peso ideal',
        texto:'Parabéns! Seu IMC está dentro da faixa considerada normal. Continue mantendo um estilo de vida saudável, com uma dieta equilibrada e atividade física regular',
        imgUrl:'img/peso_ideal.jpg'
    },
    {
        estado:'Sobrepeso',
        texto:'Seu IMC indica que você está acima do peso. Conversar com um profissional de saúde pode ajudar a desenvolver um plano para alcançar um peso mais saudável e reduzir os riscos associados ao excesso de peso',
        imgUrl:'img/acimar_do_peso.jpg'
    },
    {
        estado:'Obesidade grau I',
        texto:'Você está na faixa de obesidade grau I. É importante tomar medidas para melhorar sua saúde, como modificar a dieta e aumentar a atividade física. Consultar um profissional de saúde pode fornecer orientação personalizada.',
        imgUrl:'img/obesidade_grau1.jpg'
    },
    {
        estado:'Obesidade grau II',
        texto:'Seu IMC sugere obesidade grau II. É crucial buscar apoio médico para desenvolver estratégias eficazes de perda de peso, reduzindo assim os riscos associados a esse nível de obesidade.',
        imgUrl:'img/obesidade_grau2.jpg'
    },
    {
        estado:'Obesidade grau III',
        texto:'Você está na categoria de obesidade mais severa (grau III). Consultar um profissional de saúde é fundamental para criar um plano abrangente que inclua mudanças significativas no estilo de vida e, se necessário, intervenções médicas.',
        imgUrl:'img/obesidade_grau3.jpg'
    },
]



btnFechar.addEventListener('click',()=>{
    modal.style.display='none'
    console.log('clicado')
})

function validarAltura(altura){
   const padraoAltura= /^\d+(\.\d+)?$/
   return padraoAltura.test(altura)
}

function CalcularImc(){
 
    let imcResult;
  
  const resultpeso = parseFloat(peso.value)
  const resultaltura= parseFloat(altura.value)



    if(!resultpeso || !resultaltura){
        alert('por favor, preencha todos os campos.')
        return
    }
    if(!validarAltura(resultaltura)){
        alert("Altura inválida. Certifique-se de seguir o formato correto.")
        return
    }
    

    const imc = parseFloat((resultpeso/resultaltura**2).toFixed(2))
       
  console.log(imc)

  if (imc<=16.99) {
    imcResult='Muito abaixo do peso'
    console.log('Muito abaixo do peso');
    imcR.innerHTML=imc
} else if (imc>=17 && imc<=18.4) {
    imcResult='Abaixo do peso'
    console.log('Abaixo do peso');
    imcR.innerHTML=imc
} else if (imc >= 18.4 && imc<=24.9) {
    imcResult='peso normal'
    console.log('peso normal');
    imcR.innerHTML=imc
} else if (imc >= 25 && imc<=29.9) {
    imcResult='Acimar do peso'
    imcR.innerHTML=imc
    console.log('acimar do peso')
} else if (imc >=30 && imc <=34.9) {
    imcResult='Obesidade grau I'
    imcR.innerHTML=imc

    console.log('Obesidade grau I');
} else if (imc >=35 && imc<= 40) {
    imcResult='Obesidade grau II'
    imcR.innerHTML=imc
    console.log('Obesidade grau II');
} else if (imc >40) {
    imcR.innerHTML=imc
    imcResult='Obesidade grau III'
    console.log('Obesidade grau III');
} 


    switch(imcResult){
        case 'Muito abaixo do peso':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[0].texto
            img.setAttribute('src',imcInforma[0].imgUrl)
            
        break
        case 'Muito abaixo do peso':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[0].texto
            img.setAttribute('src',imcInforma[0].imgUrl)
            
        break
        case 'Abaixo do peso':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[1].texto
            img.setAttribute('src',imcInforma[1].imgUrl)
            
        break
        case 'peso normal':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[2].texto
            img.setAttribute('src',imcInforma[2].imgUrl)
            
        break
        case 'Acimar do peso':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[3].texto
            img.setAttribute('src',imcInforma[3].imgUrl)
            
        break
        case 'Obesidade grau I':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[4].texto
            img.setAttribute('src',imcInforma[4].imgUrl)
            
        break
        case 'Obesidade grau II':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[5].texto
            img.setAttribute('src',imcInforma[5].imgUrl)
            
        break
        case 'Obesidade grau III':
            modal.style.display='block'
            iform_imc.innerHTML=imcInforma[6].texto
            img.setAttribute('src',imcInforma[6].imgUrl)
            
        break
        default:

    }
}

btn_calcular.addEventListener('click', CalcularImc)

