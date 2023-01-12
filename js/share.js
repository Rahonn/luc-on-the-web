import { gethcaptchasitekey } from "./info.js";

async function ajax(url, data, type, dataType) {

    let result = await $.ajax(url, {

        type: type,
        data: data,
        dataType: dataType

    });

    return result;

}



function hcaptload() {

    hcaptcha.render($(".capt")[0], {

        theme: "dark",
        sitekey: gethcaptchasitekey(),
        callback: async (token) => {

            let res = await ajax("../php/verifycapt.php", {

                token: token

            }, "POST", "json")

            if (res.success == true) {

                $(".capt").hide()
                $(".nobot").show()
                genLink()

            }

        }

    })

}

function genLink() {

    let url = new URL(location.href);

    if ($("#showcasebox").is(":checked")) {

        $("#link").text(url.origin + "/edit.html?showcase&code=" + sessionStorage.getItem("code"))

    } else {

        $("#link").text(url.origin + "/edit.html?code=" + sessionStorage.getItem("code"))

    }



}

$(window).on("load", function () {

    hcaptload()

})