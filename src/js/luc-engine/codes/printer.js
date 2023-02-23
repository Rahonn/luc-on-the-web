import Command from "./basecode.js";
import { log } from "../varmanager.js";

export default class Printer extends Command {

    constructor(line) {

        super(line);

        this.text = this.line.slice(6);

    }

    run() {

        log(this.text);

        return true

    }

    get_data() {

        return {

            "text": this.text

        }

    }

}
