import Command from "./basecode.js";

export default class ErrorOut extends Command {

    constructor(line) {

        super(line);


    }

    run() {

        return false

    }

    get_data() {

        return null

    }

}
