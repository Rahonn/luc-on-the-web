import { log, setVar } from "../varmanager.js";
import Command from "./basecode.js";

// input class here
export default class Input extends Command {

    constructor(line) {

        super(line);
        this.varname = this.line.slice(6)

    }

    async run() {

        let i = await getInput()

        setVar(this.varname, i)
        log(i, "green")
        return true;

    }

    get_data() {

        return {

            "varname": this.varname

        }

    }

}


export async function getInput() {

    return new Promise(res => {

        $(".input").show()
        $("#input").val("")
        
        $("#input").on("keydown", async function (evt) {
            if (evt.key == "Enter") {
                $(".input").hide()
                let v = $("#input").val()
                $("#input").val("")
                $("#input").off("keydown")
                $("#enterbtn").off("click")
                res(v)
            }
        });

        $("#enterbtn").on("click", async function () {
            $(".input").hide()
            let v = $("#input").val()
            $("#input").val("")
            $("#input").off("keydown")
            $("#enterbtn").off("click")
            res(v)
        });

    })

}



