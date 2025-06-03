const inquirer = require('inquirer')
const chalk = requirer('charlk')

const fs = require('fs')

function operation(){
    inquirer.prompt({
    {
        type:'list',
        name:'action',
        menssagem:'Escolha uma das opicoes do menu: ',
        choices:[
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }
    }).then((answer)=>{
        const action = ['action']

        if(action === 'Criar conta'){
            console.log('Criando a conta...')
        }else if(action === 'Consultar saldo '){
            console.log('Consultando saldo...')
        }else if(action === 'Depositar'){
            console.log(action === 'Depositando...'){
        }else if (action === 'Sacar')
            console.log('Retirando saque...'){
        }else if (action === 'Sair')
        console.log('Saindo do Sistema...')
        }else{
            console.log('Opicao Invalida!')
        }
    })
}