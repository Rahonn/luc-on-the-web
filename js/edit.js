import { runLUC } from "./luc-engine/runner.js"
import { loadTemp, saveTemp } from "./luc-engine/saving.js";
import { display, output, reset } from "./luc-engine/varmanager.js";

function loadTempData() {

    $("#code").empty()

    let lines = atob(loadTemp()).split("\n");


    for (let i = 0; i < lines.length; i++) {

        let rapper = $("<div></div>")

        rapper.text(lines[i])

        $("#code").append(rapper)


    }

}

function saveTempData() {

    let l = $("#code").length;

    code = ""

    for (let i = 0; i < l; i++) {

        code += $("#code").get(i).innerText + "\n"

    }

    saveTemp(code)

}

function main() {

    $(".input").hide()


    if (loadTemp() != null) {

        loadTempData()

    }

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

        $("#output").empty()

        display($("#output"))

        reset()

        $("*").removeClass("loading")

    })

    $("#code").on("DOMSubtreeModified", () => {

        saveTempData()

    })

    $("#code").on("input", () => {

        saveTempData()

    })

}

$(window).on("load", () => {

    main()

})
