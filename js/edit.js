import { runLUC } from "./luc-engine/runner.js"
import { loadTemp, saveTemp } from "./luc-engine/saving.js";
import { reset, commandsList, log } from "./luc-engine/varmanager.js";

function loadTempData() {

    $("#code").empty()

    let lines = atob(loadTemp()).split("\n");


    for (let i = 0; i < lines.length; i++) {

        let rapper = $("<div></div>")

        rapper.text(lines[i])

        $("#code").append(rapper)


    }

}

function loadCode(ec) {

    $("#code").empty()

    let lines = atob(ec).split("\n");


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

async function run() {

    if ($("#runbtn").hasClass("disabled")) {

        return;

    }

    $("#output").empty()

    $("#code").attr("contenteditable", "false")
    $("#code").addClass("disabled")
    $("#runbtn").addClass("disabled")

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

    $("*").removeClass("loading")


    let lines = code.split("\n")


    for (let i = 0; i < commandsList.length; i++) {


        if (commandsList[i].constructor.name == "RunIfCmd") {

            if (commandsList[i].iftrue == "EXIT" || commandsList[i].iffalse == "EXIT") {

                break;

            }

        }


        if (commandsList[i].constructor.name == "ExitCmd") {

            break;

        }

        if (!await commandsList[i].run()) {



            log("Error!!!", "red")
            log(lines[i], "white")
            log(" ^", "blue")
            log(" | Error on this line!", "blue")

            break

        }

    }

    reset()

    $("#code").attr("contenteditable", "true")
    $("#code").removeClass("disabled")
    $("#runbtn").removeClass("disabled")

}

async function main() {

    
    let url = new URL(location.href);

    let showcasemode = (url.searchParams.get("showcase") != null || url.searchParams.get("showcase") == "y");
    let code = url.searchParams.get("code");



    $(".input").hide()
    $("#input").val("")
    
    
    if (loadTemp() != null && code == null) {
        
        loadTempData()
        
    }

    if (code != null && code != "null") {

        loadCode(code)

    }

    if (showcasemode) {

        $(".top").hide()
        await run()
        $("#code").attr("contenteditable", "false")
        $("#code").addClass("disabled")
        $("#runbtn").addClass("disabled")

    }
    
    $("#runbtn").on("click", async function() {
        
        await run()


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
