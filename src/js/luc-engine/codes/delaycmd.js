import { delay } from "../runner.js";
import Command from "./basecode.js";

export default class Delay extends Command {

    constructor(line) {

        super(line);
        this.time = this.line.slice(6)

    }

    async run() {

        try {

            await delay(parseFloat(this.time) * 1000)

        } catch {

            return false

        }

        return true

    }

    get_data() {

        return {

            "time": this.time

        }

    }

}
