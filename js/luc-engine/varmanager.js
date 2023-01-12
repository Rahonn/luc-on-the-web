
export let vars = {

    "LOTW": "1.0.0",
    "VERSION": "8.0.2"

}


export let defaultvars = {

    "LOTW": "1.0.0",
    "VERSION": "8.0.2"

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