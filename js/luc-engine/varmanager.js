
export let vars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let defaultvars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let commandsList = []

export function reset() {

    commandsList = []
    vars = defaultvars

}

export function setVar(name, value) {

    vars[name] = value

}

export function getVar(name) {

    return vars[name]

}

export function log(line, color = "white") {

    let e = $("<div></div>")

    e.text(line)

    e.addClass("code " + color)

    $("#output").append(e)

}

export function addCmd(cmd) {

    commandsList.push(cmd)

}