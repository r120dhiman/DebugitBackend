const mongoose= require('mongoose');

function DB_Connection(url) {
    mongoose.connect(url).then(() => {
      console.log(`DB with url ${url} connected scussfully`)
    }
    ).catch((error ) => {
      console.log(`Ohh some error occured while connecting with the ${url} . Here is the error have a look on it ${error}`)
    }
    )
}
module.exports={DB_Connection}