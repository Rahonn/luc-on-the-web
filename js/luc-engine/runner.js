import * as varmanager from "./varmanager.js";
import { getCommand } from "./commands.js";


export async function runLUC(code) {

    let lines = code.split("\n");

    for (let i = 0; i < lines.length; i++) {

        varmanager.addCmd(getCommand(lines[i]));

    }

    for (let i = 0; i < varmanager.commandsList.length; i++) {

        varmanager.commandsList[i].run()

    }

}

export function delay(delayInms) {

    return new Promise(resolve => setTimeout(resolve, delayInms));

}