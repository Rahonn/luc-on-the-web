import * as varvarmanager from "./varmanager.js"
import Printer from "./codes/printer.js"
import { Comment, COMMENT_CHAR } from "./codes/comment.js"
import ErrorOut from "./codes/errorout.js"


export function getCommand(line) {

    if (/^PRINT/.exec(line)) {

        return new Printer(line)

    }

    if (new RegExp("/^" + COMMENT_CHAR + "/").exec(line) || line.trim() == "") {

        return new Comment(line)

    }

    return new ErrorOut(line)


}
