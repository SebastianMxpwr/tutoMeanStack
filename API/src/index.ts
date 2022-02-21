import app from './app'
import {startConnection} from './db'

async function main(){
    startConnection();
    await  app.listen(app.get('port'))
    console.log(`server en puerto ${app.get('port')}`)

}

main()
    





