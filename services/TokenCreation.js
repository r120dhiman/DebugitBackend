const jwt=require('jsonwebtoken');
const key=process.env.KEY;

function createjwttoken(user) {
    const payload={
        email:user.email,
        first_name:user.first_name,
        last_name:user.last_name
    }
    const token=jwt.sign(payload, key);
    return token;
}


function vaildatetoken(token){
    const payload=jwt.verify(token ,key);
    return payload;
}

module.exports={createjwttoken,vaildatetoken};