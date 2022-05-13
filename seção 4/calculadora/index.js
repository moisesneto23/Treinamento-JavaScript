// função construtoora de calculadora

function Calculadora(){
    this.dysplay= document.querySelector('.display')
    
    this.addCaractereParaDisplay = el => this.dysplay.value += el.innerText; // se tiver apenas uma linha não precisa de colchetes
    
    this.limparDisplay = () => this.dysplay.value = '';

    this.apaga1 = () => this.dysplay.value = this.dysplay.value.slice(0,-1);

    this.igual = () => this.dysplay.value = eval(this.dysplay.value)

    this.capturaClicks = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;
            if(el.classList.contains('btn-num')){
                this.addCaractereParaDisplay(el);
            };
            if(el.classList.contains('btn-clear')){
                this.limparDisplay()
            };
            if(el.classList.contains('btn-del')){
                this.apaga1()
            };
            if(el.classList.contains('btn-eq')){
                this.igual()
            }
        })
    }
   
    this.inicia = () => { // se não colocar o this. não funciona
        this.capturaClicks()
    }
}
//----------------
const calc1 = new Calculadora()
const calc2 = new Calculadora()
// ou seja ha dois objetos de calculadora criados
calc1.inicia();





/*

// função fabrica de calculadora
function criaCalc(){
    return {
        dysplay: document.querySelector('.display'),
        btnLimpar: document.querySelector('.btn-clear'),
        /*btnMult: document.querySelector(),
        btnDiv: document.querySelector(),
        btnSub: document.querySelector(),
        btnSoma: document.querySelector(btn-eq),
        btnIgual: document.querySelector('.btn-eq'),
        
        limparDisplay(){
            this.dysplay.value = '';
        },
        inixia(){
            this.clickBotoes();
            this.pressionaEnter()
        },
        apaga1(){
            this.dysplay.value = this.dysplay.value.slice(0,-1);
        },
        igual(){
            let conta = this.dysplay.value;
            try {
                conta = eval(conta)
                if(!conta){
                    alert('conta Invalida')
                    this.limparDisplay()
                    return
                }
                this.dysplay.value = conta
            } catch (error) {
                alert('conta invalida')
                this.limparDisplay()
            }
        },
        pressionaEnter(){
            this.dysplay.addEventListener('keyup' , e =>{
                if(e.keyCode === 13){
                    this.igual()
                }
            })
        },

        clickBotoes(){
            document.addEventListener('click',function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };
                if(el.classList.contains('btn-clear')){
                    this.limparDisplay()
                };
                if(el.classList.contains('btn-del')){
                    this.apaga1()
                };
                if(el.classList.contains('btn-eq')){
                    this.igual()
                };
            }.bind(this))
        },
        btnParaDisplay(valor){
            this.dysplay.value += valor;
        }
    }

}
const calculadora = criaCalc()
calculadora.inixia()*/