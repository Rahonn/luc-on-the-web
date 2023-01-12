import * as varvarmanager from "./varmanager.js"
import Printer from "./codes/printer.js"
import { Comment, COMMENT_CHAR } from "./codes/comment.js"
import ErrorOut from "./codes/errorout.js"
import SetVars from "./codes/setvars.js"
import PrintVar from "./codes/printvar.js"
import Input from "./codes/input.js"


export function getCommand(line) {

    if (/^PRINT /.exec(line)) {

        return new Printer(line)

    }

    if (line.startsWith(COMMENT_CHAR) || line.trim() == "") {

        return new Comment(line)

    }

    if (/^SET/.exec(line)) {

        return new SetVars(line)

    }

    if (/^PRINTVAR /.exec(line)) {

        return new PrintVar(line)

    }

    if (/^INPUT /.exec(line)) {

        return new Input(line)

    }

    return new ErrorOut(line)


}
