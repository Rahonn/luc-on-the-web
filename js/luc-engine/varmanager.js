
export let vars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let defaultvars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let commandsList = []

export let output = []

export function reset() {

    commandsList = []
    vars = defaultvars
    output = []

}

export function setVar(name, value) {

    vars[name] = value

}

export function getVar(name) {

    return vars[name]

}

export function log(line, color = "white") {

    output.push({ line, color })

}

export function display(elem) {

    for (let i = 0; i < output.length; i++) {

        let e = $("<div></div>")

        e.text(output[i].line)

        e.addClass("code " + output[i].color)

        $("#output").append(e)

    }

}

export function addCmd(cmd) {

    commandsList.push(cmd)

}