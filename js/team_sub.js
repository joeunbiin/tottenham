var usedata;
$.ajax({
    type: "GET",
    url: "js/team_sub.json",
    beforeSend: function (xhr) {
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType("application/json");
        }
    },
    success: function (data) {
        usedata = data;
        console.log(usedata)
        team_sub();
    },
    error: function (abc) {
        alert(abc.status + "오류발생");
    },
})

function team_sub() {
    var team_subList = "";
    for (let i in usedata.team_sub1) {
        team_subList += `<li><div><img src="${usedata.team_sub1[i].Photo}" alt=""></div>`
        team_subList += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub1[i].Name}</p></div>`
        team_subList += `<div class="nation"><p>${usedata.team_sub1[i].Nation}</p></div></div>`
        team_subList += `<div class="number"><p>${usedata.team_sub1[i].Number}</p></div></div></div></div></li>`
    }
    $('#team_sub1').append(`<ul>${team_subList}</ul>`)

    var team_subList2 = "";
    for (let i in usedata.team_sub2) {
        team_subList2 += `<li><div><img src="${usedata.team_sub2[i].Photo}" alt=""></div>`
        team_subList2 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub2[i].Name}</p></div>`
        team_subList2 += `<div class="nation"><p>${usedata.team_sub2[i].Nation}</p></div></div>`
        team_subList2 += `<div class="number"><p>${usedata.team_sub2[i].Number}</p></div></div></div></div></li>`
    }
    $('#team_sub2').append(`<ul>${team_subList2}</ul>`)

    var team_subList3 = "";
    for (let i in usedata.team_sub3) {
        team_subList3 += `<li><div><img src="${usedata.team_sub3[i].Photo}" alt=""></div>`
        team_subList3 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub3[i].Name}</p></div>`
        team_subList3 += `<div class="nation"><p>${usedata.team_sub3[i].Nation}</p></div></div>`
        team_subList3 += `<div class="number"><p>${usedata.team_sub3[i].Number}</p></div></div></div></div></li>`
    }
    $('#team_sub3').append(`<ul>${team_subList3}</ul>`)

    var team_subList4 = "";
    for (let i in usedata.team_sub4) {
        team_subList4 += `<li><div><img src="${usedata.team_sub4[i].Photo}" alt=""></div>`
        team_subList4 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub4[i].Name}</p></div>`
        team_subList4 += `<div class="nation"><p>${usedata.team_sub4[i].Nation}</p></div></div>`
        team_subList4 += `<div class="number"><p>${usedata.team_sub4[i].Number}</p></div></div></div></div></li>`
    }
    $('#team_sub4').append(`<ul>${team_subList4}</ul>`)

    var team_subList5 = "";
    for (let i in usedata.team_sub5) {
        team_subList5 += `<li><div><img src="${usedata.team_sub5[i].Photo}" alt=""></div>`
        team_subList5 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub5[i].Name}</p></div>`
        team_subList5 += `<div class="nation"><p>${usedata.team_sub5[i].Nation}</p></div></div></div></div></div></li>`
    }
    $('#team_sub5').append(`<ul>${team_subList5}</ul>`)

    var team_subList6 = "";
    for (let i in usedata.team_sub6) {
        team_subList6 += `<li><div><img src="${usedata.team_sub6[i].Photo}" alt=""></div>`
        team_subList6 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub6[i].Name}</p></div>`
        team_subList6 += `<div class="nation"><p>${usedata.team_sub5[i].Nation}</p></div></div></div></div></div></li>`
    }
    $('#team_sub6').append(`<ul>${team_subList6}</ul>`)

    var team_subList7 = "";
    for (let i in usedata.team_sub7) {
        team_subList7 += `<li><div><img src="${usedata.team_sub7[i].Photo}" alt=""></div>`
        team_subList7 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub7[i].Name}</p></div>`
        team_subList7 += `<div class="nation"><p>${usedata.team_sub7[i].Nation}</p></div></div></div></div></div></li>`
        
    }
    $('#team_sub7').append(`<ul>${team_subList7}</ul>`)

    var team_subList8 = "";
    for (let i in usedata.team_sub8) {
        team_subList8 += `<li><div><img src="${usedata.team_sub8[i].Photo}" alt=""></div>`
        team_subList8 += `<div class="player_box"><div class="mwrap"><div class="info"><div class="lwrap"><div class="name"><p>${usedata.team_sub8[i].Name}</p></div>`
        team_subList8 += `<div class="nation"><p>${usedata.team_sub8[i].Nation}</p></div></div></div></div></div></li>`
    }
    $('#team_sub8').append(`<ul>${team_subList8}</ul>`)
}