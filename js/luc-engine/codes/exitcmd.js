import Command from "./basecode.js";

export default class ExitCmd extends Command {

    constructor(line) {

        super(line);

    }

    run() {

        return true

    }

    get_data() {

        return null

    }


}
