// RANDOM PASSWORD GENERATOR
function generatedpassword(length,includeuppercase,includelowercase,includenumbers,includesymbol){
    const uppercasechars="QWERTYUIOPLKJHGFDSAZXCVBNM";
    const lowercasechars="qwertyuioplkjhgfdsazxcvbnm";
    const numberschars="123456789";
    const symbolchars="|!£$%&/()=?^_:;°ç@#[]§";
    let allowedchars=" ";
    let password=" ";

    allowedchars += includeuppercase?uppercasechars:" ";
    allowedchars += includelowercase?lowercasechars:" ";
    allowedchars += includenumbers?numberschars:" ";
    allowedchars += includesymbol?symbolchars:" ";

    if(passwordlength<=0){
        return `(PASSWORD SHOULD BE AT LEAST ONE CHARACTER)`
    }

    if (allowedchars.length===0){
        return `(MINIMUM ONE SET OF SYMBOL MUST BE SELECTED)`

    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length)
        password+=allowedchars[randomindex];

    }







    return password;

}





const passwordlength=12;
const includeuppercase=true;
const includelowercase=true;
const includenumbers=true;
const includesymbol=true;

const password=generatedpassword(passwordlength,
                                 includeuppercase,
                                 includelowercase,
                                 includenumbers,
                                 includesymbol);

console.log(` GENERATED PASSWORD: ${password}`);