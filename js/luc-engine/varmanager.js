
export let vars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let defaultvars = {

    "LOTW": "0.0.1",
    "VERSION": "0.0.1"

}


export let commandsList = []

export let output = ""

export function reset() {

    commandsList = []
    vars = defaultvars
    output = ""

}

export function log(line) {

    output += line + "\n"

}

export function addCmd(cmd) {

    commandsList.push(cmd)

}