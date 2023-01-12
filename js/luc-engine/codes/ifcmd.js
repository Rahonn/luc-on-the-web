import { getVar, setVar, log } from "../varmanager.js";
import Command from "./basecode.js";

export default class IfCmd extends Command {

    constructor(line) {

        super(line);

        this.arg2isNum = null
        this.arg2isVar = null
        this.arg2isStr = null

        this.text = this.line.slice(3)

        
        let spaceSpilt = this.text.split(" ")
        
        this.varname = spaceSpilt[0]
        this.arg1 = spaceSpilt[1]
        this.op = spaceSpilt[2]
        this.arg2 = spaceSpilt[3]

        let conSplit = this.text.split(":")

        this.iftrue = conSplit[1]
        this.iffalse = conSplit[2]

        this.iftest()

    }

    iftest() {

        if (Number.isNaN(parseFloat(this.arg1))) {

            this.arg1isNum = false

        } else {

            this.arg1isNum = true
            this.arg1isVar = false

        }

        if (Number.isNaN(parseFloat(this.arg2))) {

            this.arg2isNum = false

        } else {

            this.arg2isNum = true
            this.arg2isVar = false

        }

        if (/^\$/.exec(this.arg1.toString())) {

            this.arg1isVar = true

        } else {

            this.arg1isVar = false

        }

        if (/^\$/.exec(this.arg2.toString())) {

            this.arg2isVar = true

        } else {

            this.arg2isVar = false

        }

        if (/^!.+$/.exec(this.arg1.toString())) {

            this.arg1isStr = true

        } else {

            this.arg1isStr = false

        }

        if (/^!.+$/.exec(this.arg2.toString())) {

            this.arg2isStr = true

        } else {

            this.arg2isStr = false

        }

        if (/^[!]/.exec(this.arg1.toString()) && /[!]$/.exec(this.arg1.toString())) {

            this.arg1isStr = true

        } else {

            this.arg1isStr = false

        }

        if (/^[!]/.exec(this.arg2.toString()) && /[!]$/.exec(this.arg2.toString())) {

            this.arg2isStr = true

        } else {

            this.arg2isStr = false

        }

        if (this.arg1isNum) {

            this.arg1isNum = true
            this.arg1isVar = false
            this.arg1isStr = false

        }

        if (this.arg1isVar) {

            this.arg1isNum = false
            this.arg1isVar = true
            this.arg1isStr = false

        }

        if (this.arg1isStr) {

            this.arg1isNum = false
            this.arg1isVar = false
            this.arg1isStr = true

        }

        if (this.arg2isNum) {

            this.arg2isNum = true
            this.arg2isVar = false
            this.arg2isStr = false

        }

        if (this.arg2isVar) {

            this.arg2isNum = false
            this.arg2isVar = true
            this.arg2isStr = false

        }

        if (this.arg2isStr) {

            this.arg2isNum = false
            this.arg2isVar = false
            this.arg2isStr = true

        }

    }

    iftestfinal() {

        if (this.arg1isVar) {

            this.arg1 = getVar(this.arg1.slice(1))

        }

        if (this.arg1isStr) {

            this.arg1 = this.arg1.slice(1, this.arg1.length - 1)

        }

        if (this.arg2isNum) {

            this.arg2 = parseFloat(this.arg2)

        }

        if (this.arg2isVar) {

            this.arg2 = getVar(this.arg2.slice(1))

        }

        if (this.arg2isStr) {

            this.arg2 = this.arg2.slice(1, this.arg2.length - 1)

        }

        if (this.arg1isNum) {

            this.arg1 = parseFloat(this.arg1)

        }

    }

    run() {
        
        try {
            
            this.iftestfinal()
            this.iftest()
            this.iftestfinal()
            
        } catch {
            
            return false
            
        }

        let didIf = false

        try {
            
            if (this.op == "<") {

                if (this.arg1 < this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

            if (this.op == ">") {

                if (this.arg1 > this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

            if (this.op == "==") {
                
                if (this.arg1 == this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

            if (this.op == "!=") {

                if (this.arg1 != this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

            if (this.op == ">=") {

                if (this.arg1 >= this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

            if (this.op == "<=") {

                if (this.arg1 <= this.arg2) {

                    setVar(this.varname, this.iftrue)
                    didIf = true

                } else {

                    setVar(this.varname, this.iffalse)
                    didIf = true

                }

            }

        } catch {
            
            return false

        }

        return didIf

    }

    get_data() {

        return {

            "varname": this.varname,
            "arg1": this.arg1,
            "arg2": this.arg2,
            "op": this.op,
            "iftrue": this.iftrue,
            "iffalse": this.iffalse,
            "text": this.text,
            "arg1isNum": this.arg1isNum,
            "arg2isNum": this.arg2isNum,
            "arg1isVar": this.arg1isVar,
            "arg2isVar": this.arg2isVar,
            "arg1isStr": this.arg1isStr,
            "arg2isStr": this.arg2isStr

        }

    }

}
