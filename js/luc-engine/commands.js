import * as varvarmanager from "./varmanager.js"
import Printer from "./codes/printer.js"
import { Comment, COMMENT_CHAR } from "./codes/comment.js"


export function getCommand(line) {

    if (/^PRINT/.exec(line)) {

        return new Printer(line)

    }

    if (new RegExp("/^" + COMMENT_CHAR + "/").exec(line)) {

        return new Comment(line)

    }

    return new Comment(line)


}
