/*
  export default nos permite exportar esta clase e importara
  
  import MyLogger from './logger.js'
*/

export default class Logger {
    constructor(name) {
        this.name = name
    }

    sayMessage() {
        console.log(`[${this.name}] ${message}`)
    }
}
