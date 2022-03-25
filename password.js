const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to Password Validator. Please enter password to validate.", function(input){
    tokens = input.split(' ')

    let passWord = tokens[0];

    if(passWord.length < 10){
        console.log(`
        ███▄    █  ▒█████   ▐██▌ 
        ██ ▀█   █ ▒██▒  ██▒ ▐██▌ 
       ▓██  ▀█ ██▒▒██░  ██▒ ▐██▌ 
       ▓██▒  ▐▌██▒▒██   ██░ ▓██▒ 
       ▒██░   ▓██░░ ████▓▒░ ▒▄▄  
       ░ ▒░   ▒ ▒ ░ ▒░▒░▒░  ░▀▀▒ 
       ░ ░░   ░ ▒░  ░ ▒ ▒░  ░  ░ 
          ░   ░ ░ ░ ░ ░ ▒      ░ 
                ░     ░ ░   ░                                             ░                          ░        ░ 
        Password is invalid. Not enough characters.`)
    }else if(passWord.length >= 10){
        console.log(
        `
        ▓██   ██▓▓█████   ██████  ▐██▌ 
        ▒██  ██▒▓█   ▀ ▒██    ▒  ▐██▌ 
         ▒██ ██░▒███   ░ ▓██▄    ▐██▌ 
         ░ ▐██▓░▒▓█  ▄   ▒   ██▒ ▓██▒ 
         ░ ██▒▓░░▒████▒▒██████▒▒ ▒▄▄  
          ██▒▒▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░ ░▀▀▒ 
        ▓██ ░▒░  ░ ░  ░░ ░▒  ░ ░ ░  ░ 
        ▒ ▒ ░░     ░   ░  ░  ░      ░ 
        ░ ░        ░  ░      ░   ░    
        ░ ░      
          Password is valid!`
        )
    }

    reader.close()

});