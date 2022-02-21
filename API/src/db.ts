import {connect} from 'mongoose'


export async function startConnection() {

    await connect('mongodb://localhost/photogalary', {

    })
    console.log("Base de datos conectada");
    

}



