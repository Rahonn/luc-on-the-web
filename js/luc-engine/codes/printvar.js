import { getVar, log } from "../varmanager.js";
import Command from "./basecode.js";

export default class PrintVar extends Command {

    constructor(line) {

        super(line);

        this.varname = this.line.slice(9);

    }

    run() {


        log(getVar(this.varname))

        return true


    }

    get_data() {

        return {

            "varname": this.varname

        }

    }

}
