 // -----------------------time 1 ------------------------------------

const time = [...document.querySelectorAll(".ti1")]
const caixaMae01 = document.querySelector("#caixaComando01")
const caixaEscolhido = document.querySelector("#caixaEscolhido01")
let caixapontuacao01 = document.querySelector("#caixaPontuacao01")

const teste = document.querySelector("#teste")
const caixaPontuacaoTaotal = document.querySelector("#pontuacaoTotalNumero")
const botao01 = document.querySelector("#botao01")
const botaoPtotal = document.querySelector("#botaoPtotal")

//times e pontuação de quem ganhoun
let timee1 = "time1"
let timee2 = "time4"
let timee3 = "time5"
//salvar os times escolhidos
const salvarpontuacao =(pontuacaoparcial01)=>{
    localStorage.setItem("pontuacaoparcial", pontuacaoparcial01)
}
const carregarpontuacao = () =>{
    const pontuacaoparcial = localStorage.getItem("pontuacaoparcial")
    if(pontuacaoparcial){
       const escolhido01 = caixaEscolhido.firstChild.textContent
        if(escolhido01 === timee1){
          caixapontuacao01.innerHTML = 10
        }else{
          caixapontuacao01.innerHTML = 0
        }
         }
}
const SalvarTimeEscolhido = (timeEscolhido01,) =>{
    localStorage.setItem("timeEscolhido", timeEscolhido01)

}

const carregarTimeEscolhido = () =>{
    const timeEscolhido = localStorage.getItem("timeEscolhido")
    if(timeEscolhido){
    caixaEscolhido.innerHTML = `<strong>${timeEscolhido}</strong>`
    //`Time escolhido</br> <strong>${timeEscolhido}</strong>`
    }
}
carregarTimeEscolhido()
carregarpontuacao()

time.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado = evt.target
        timeClicado.classList.toggle("selecionado01")
        time.forEach(Div=>{
           if(Div !== timeClicado)
           Div.classList.remove("selecionado01")
        })
    })
})
botao01.addEventListener("click",(evt)=>{
    const pegarTime = [...document.querySelectorAll(".selecionado01")]
    pegarTime.map((upu)=>{
        // aqui está vindo os times vindo do html
        let timeEscolhido01 = upu.textContent
        
        if(timeEscolhido01 === timee1){
          caixapontuacao01.innerHTML = 10
        }else{
          caixapontuacao01.innerHTML = 0
        }
        let pontuacaoparcial01 = caixapontuacao01.textContent
        salvarpontuacao(pontuacaoparcial01)
      
       const dados = {
            timeEscolhido01,
            pontuacaoparcial01
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador01"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
              console.log(enviar)
             //os dados ja estão vindo do back end aqui
              caixaEscolhido.innerHTML = `${timeEscolhido01}`
                  SalvarTimeEscolhido(timeEscolhido01)
                 
         }) 
        })//Time escolhido</br> <strong>${timeEscolhido01}</strong>
      })
   
//-----------------time2-------------------------------------------

const time2 = [...document.querySelectorAll(".ti2")]
const caixaMae02 = document.querySelector("#caixaComando02")
const caixaEscolhido2 = document.querySelector("#caixaEscolhido02")
let caixapontuacao02 = document.querySelector("#caixaPontuacao02")
const botao2 = document.querySelector("#botao02")
//times e pontuação de quem ganhou

const salvarpontuacao02 = (pontuacaoparcial02) =>{
  localStorage.setItem("pon", pontuacaoparcial02)
}

const carregarpontuacao002 = () =>{
const pon_tuacao = localStorage.getItem("pon")
if(pon_tuacao){
   if(escolhido02 === timee2){
    caixapontuacao02.innerHTML = 10
}else{
    caixapontuacao02.innerHTML = 0
}
}
}
let escolhido02 = caixaEscolhido2.textContent
const SalvarTimeEscolhido02 = (timeEscolhido02) =>{
    localStorage.setItem("timeEscolhidoo", timeEscolhido02)
}

const carregarTimeEscolhidoo = () =>{
    const timeEscolhidoo = localStorage.getItem("timeEscolhidoo")
    if(timeEscolhidoo){
        caixaEscolhido2.innerHTML = `<strong> ${timeEscolhidoo}</strong>`
    }
}
carregarTimeEscolhidoo()
carregarpontuacao002()

time2.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        let timeClicado2 = evt.target
       timeClicado2.classList.toggle("selecionado02")
       time2.forEach(Div02=>{
        if(Div02 !== timeClicado2)
        Div02.classList.remove("selecionado02")
       })
    })
})
botao2.addEventListener("click",(evt)=>{
    const pegarTime2 = [...document.querySelectorAll(".selecionado02")]
    pegarTime2.map((upu)=>{
        // aqui está vindo os times vindo do html
        let timeEscolhido02 = upu.textContent
        console.log(timeEscolhido02)
        if(timeEscolhido02 === timee2){
          caixapontuacao02.innerHTML = 10
        }else{
          caixapontuacao02.innerHTML = 0
        }
      let pontuacaoparcial02 = caixapontuacao02.textContent
      salvarpontuacao02(pontuacaoparcial02)
      
        let dados = {
            timeEscolhido02,
            pontuacaoparcial02
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador02"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
                const arrayEnviarr = Object.values(enviar)
                const buscarTime = arrayEnviarr.filter((upu)=>{
                
                  teste.innerHTML = upu.pontuacaoparcial02
                })
                //s dados ja estão vindo do back end aqui
              
                  caixaEscolhido2.innerHTML = `<strong>${timeEscolhido02}</strong>`
                  SalvarTimeEscolhido02(timeEscolhido02)
                  })
    
            })
})
//------------------------time3-----------------------------------
const time3 = [...document.querySelectorAll(".ti3")]
const caixaMae03 = document.querySelector("#caixaComando03")
const caixaEscolhido3 = document.querySelector("#caixaEscolhido03")
let caixapontuacao03 = document.querySelector("#caixaPontuacao03")
const botao3 = document.querySelector("#botao03")
//times e pontuação de quem ganhou
const salvarpontuacao03 = (pontuacaoparcial03) =>{
    localStorage.setItem("pontuacaoparciaal", pontuacaoparcial03)
}

const carregarpontuacao003 = () =>{
  const pontuacaoparciaal = localStorage.getItem("pontuacaoparciaal")
  if(pontuacaoparciaal){
    const escolhido03 = caixaEscolhido3.firstChild.textContent
    if(escolhido03 === timee3){
      caixapontuacao03.innerHTML = 10
  }else{
      caixapontuacao03.innerHTML = 0
  }
  }
}

const SalvarTimeEscolhidooo = (timeEscolhido03) =>{
    localStorage.setItem("timeEscolhidooo", timeEscolhido03 )
}

const carregarTimeEscolhidooo = () =>{
    const timeEscolhidooo = localStorage.getItem("timeEscolhidooo")
    if(timeEscolhidooo){
    caixaEscolhido3.innerHTML = `<strong>${timeEscolhidooo}</strong>`
    }
}
carregarTimeEscolhidooo()
carregarpontuacao003()
time3.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        const timeClicado3 = evt.target
       timeClicado3.classList.toggle("selecionado03")
       time3.forEach(Div03=>{
        if(Div03 !== timeClicado3)
        Div03.classList.remove("selecionado03")
       })
    })
})
botao3.addEventListener("click",(evt)=>{
    const pegarTime3 = [...document.querySelectorAll(".selecionado03")]
    pegarTime3.map((upu)=>{
        // aqui está vindo os times vindo do html
        let timeEscolhido03 = upu.textContent

        if(timeEscolhido03 === timee3){
            caixapontuacao03.innerHTML = 10
        }else{
           caixapontuacao03.innerHTML = 0
        }
    let pontuacaoparcial03 = caixapontuacao03.firstChild.textContent
      
        salvarpontuacao03(pontuacaoparcial03)

        let dados = {
            timeEscolhido03,
            pontuacaoparcial03
               }
             let cabecalho = {
              method: "POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(dados)
          }
              const endPoint = "http://localhost:3000/gleitonjogador03"
              fetch(endPoint, cabecalho)
              .then(res => res.json())
              .then(enviar=>{
                //s dados ja estão vindo do back end aqui
                  console.log(enviar)
                  caixaEscolhido3.innerHTML = `<strong>${timeEscolhido03}</strong>`
                  SalvarTimeEscolhidooo(timeEscolhido03)
              })
        
        //-------------enviar para banco de dados-----------
   
   })
})
const salvarPontuacaoTotal = (total) =>{
  localStorage.setItem("totalPontuacao", total )
}
const mostrarpontuacaototal = () =>{
  const totalPontuacao = localStorage.getItem("totalPontuacao")
 if(totalPontuacao){
  caixaPontuacaoTaotal.innerHTML = totalPontuacao
 }
}
mostrarpontuacaototal()
let total = 0
botaoPtotal.addEventListener("click",()=>{
let pont01 = caixapontuacao01.firstChild.textContent
let pont02 = caixapontuacao02.firstChild.textContent
let pont03 = caixapontuacao03.firstChild.textContent

let po01 = parseInt(pont01)
let po02 = parseInt(pont02)
let po03 = parseInt(pont03)

 total += po01 + po02 + po03 
caixaPontuacaoTaotal.innerHTML = total

salvarPontuacaoTotal(total)

console.log(total)
let dadosP = {
 total 
}
let cabecalhoTotal = {
  method: "POST",
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify(dadosP)
}
const endPointTotal = "http://localhost:3000/gleitonTotal"
fetch(endPointTotal, cabecalhoTotal)
.then(res => res.json())
.then(enviarTotal =>{
  console.log(enviarTotal)
  
})

console.log(todosPontos)

})





// const salvarPontuacaoTotal = (total) =>{
//   localStorage.setItem("totalPontuacao", total )
// }
// const mostrarpontuacaototal = () =>{
//   const totalPontuacao = localStorage.getItem("totalPontuacao")
//  if(totalPontuacao){

//  }
// }


