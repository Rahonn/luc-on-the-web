import { runLUC } from "./luc-engine/runner.js"
import { output, reset } from "./luc-engine/varmanager.js";

function main() {

    $("#runbtn").on("click", async function() {

        $("#output").empty()

        let loadingtext = $("<div></div>")

        loadingtext.text("Loading...")

        loadingtext.addClass("code blue")

        $("#output").append(loadingtext)

        $("*").addClass("loading")

        let l = $("#code").length;

        code = ""

        for (let i = 0; i < l; i++) {

            code += $("#code").get(i).innerText + "\n"

        } 

        await runLUC(code)

        let ol = output.split("\n")

        $("#output").empty()

        for (let i = 0; i < ol.length; i++) {

            let e = $("<div></div>")

            e.text(ol[i])

            e.addClass("code white")

            $("#output").append(e)

        }

        reset()

        $("*").removeClass("loading")

    })

}

$(window).on("load", () => {

    main()

})
