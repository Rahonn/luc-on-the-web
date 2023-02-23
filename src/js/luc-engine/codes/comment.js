import Command from "./basecode.js";

export class Comment extends Command {

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

export const COMMENT_CHAR = "#"
