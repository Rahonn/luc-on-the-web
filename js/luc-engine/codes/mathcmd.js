import { getVar, log, setVar } from "../varmanager.js";
import Command from "./basecode.js";

export default class MathCmd extends Command {

    constructor(line) {

        super(line);

        this.lineNOSTART = this.line.slice(5)

        let spaceSplit = this.lineNOSTART.split(" ")

        this.varname = spaceSplit[0]
        this.op = spaceSplit[1]
        this.val1 = spaceSplit[2]
        this.val2 = spaceSplit[3]

    }

    run() {
        
        try {
            
            let num1 = this.val1
            let num2 = this.val2

            if (/[^0-9]/.exec(this.val1) && num1 != "@") {

                num1 = parseFloat(getVar(this.val1))

            }

            if (/[^0-9]/.exec(this.val2) && num2 != "@") {

                num2 = parseFloat(getVar(this.val2))

            }

            if (num1 != "@" && num2 != "@") {

                num1 = parseFloat(num1)
                num2 = parseFloat(num2)

            }
            
            if (num1 == NaN || num2 == NaN) {

                return false

            }


            if (this.op == "+") {

                setVar(this.varname, num1 + num2)

            } else if (this.op == "-") {

                setVar(this.varname, num1 - num2)

            } else if (this.op == "/") {

                setVar(this.varname, num1 / num2)

            } else if (this.op == "*") {

                setVar(this.varname, num1 * num2)

            } else if (this.op == "%") {

                setVar(this.varname, num1 % num2)

            } else if (this.op == "**") {

                setVar(this.varname, num1 ** num2)

            } else if (this.op == "RAND") {

                if (num1 == "@" && num2 == "@") {

                    setVar(this.varname, Math.random())

                } else if (num1 != "@" && num2 != "@") {

                    setVar(this.varname, Math.floor(Math.random() * (num2 - num1 + 1)) + num1)

                } else {

                    return false

                }

            } else {

                return false

            }

            
            return true

        } catch {
            
            return false

        }

    }

    get_data() {

        return {

            "lineNOSTART": this.lineNOSTART,
            "varname": this.varname,
            "op": this.op,
            "val1": this.val1,
            "val2": this.val2,

        }

    }


}
