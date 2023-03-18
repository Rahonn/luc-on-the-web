import Command from "./basecode.js";
import { setVar } from "../varmanager.js";


export default class SetVars extends Command {

    constructor(line) {

        super(line);
        this.findData()

    }

    findData() {

        this.text = this.line.slice(4)
        let spaceSplit = this.text.split(" ")

        this.name = spaceSplit[0]

        this.value = ""

        for (let i = 2; i < spaceSplit.length; i++) {


            if (i == spaceSplit.length - 1) {

                this.value += spaceSplit[i]

            } else {

                this.value += spaceSplit[i] + " "

            }

            

        }


    }

    run() {


        setVar(this.name, this.value)

        return true

    }

    get_data() {

        return {

            "text": this.text,
            "name": this.name,
            "value": this.value

        }

    }

}
