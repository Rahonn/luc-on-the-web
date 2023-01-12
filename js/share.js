function genLink() {

    let url = new URL(location.href);

    if ($("#showcasebox").is(":checked")) {

        $("#link").text(url.origin + "/edit.html?showcase&code=" + sessionStorage.getItem("code"))

    } else {

        $("#link").text(url.origin + "/edit.html?code=" + sessionStorage.getItem("code"))

    }



}

$(window).on("load", function () {

    genLink()

    $("#showcasebox").on("click", function () {

        genLink()

    })

})