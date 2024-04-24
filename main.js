// start with declaration variables
let setPara = document.getElementById('setPara');
let country = document.getElementsByClassName('country')
let countryImage = document.getElementById('countryImage');
let phoneNumber  = document.getElementById('phone-number');
let mail = document.getElementById('mail');
let address = document.getElementById('address');
let header = document.querySelector('header');
let frist_thick = document.getElementById('frist-thick')
let second_thick = document.getElementById('second-thick')
let third_thick = document.getElementById('third-thick')
let fourt_thick = document.getElementById('fourt-thick')
let fifth_thick = document.getElementById('fifth-thick')
let sixth_thick = document.getElementById('sixth-thick')
let seventh_thick = document.getElementById('seventh-thick')
let eighth_thick = document.getElementById('eighth-thick')
let ninth_thick = document.getElementById('ninth-thick')
let y_tick = document.getElementsByClassName('y-tick')
let path = document.querySelectorAll('.path')

// declaration countries
let morocco = document.getElementById('morocco');
let reime_ruanda = document.getElementById('reime-ruanda') 
let nigeria = document.getElementById('nigeria');
let togo  = document.getElementById('togo');
let ghana = document.getElementById('ghana');
let reime_ghana = document.getElementById('reime-ghana');
let drc = document.getElementById('drc');
let ivorycoast = document.getElementById('ivorycoast')
let burkina  = document.getElementById('burkina')
let niger = document.getElementById('niger');
let gabon = document.getElementById('gabon');
let ethiopia = document.getElementById('ethiopia')
let kenya = document.getElementById('kenya');
let uganda  = document.getElementById('uganda');
let tanzania = document.getElementById('tanzania');
let ghana_2  = document.getElementById('ghana')
// end of declaration



path.forEach(pays => {
    pays.addEventListener('click', () => {
        // Remove the 'selected-country' class from the previously selected button
        const prevSelectedPays = document.querySelector('.selected');
        if (prevSelectedPays && prevSelectedPays !== pays) {
            prevSelectedPays.classList.remove('selected');
        }

        // Toggle the 'selected-country' class for the currently clicked button
        pays.classList.toggle('selected');
    });
});


// start with morocco 
morocco.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Morocco";
    country[0].innerText="Reime Morocco";
    countryImage.src = "images/morocco.png";
    phoneNumber.innerText="+212 674494786"
    mail.innerText="morocco@netisgroup.net";
    address.innerText="the casablanca................";
    header.innerText = "2010";
    y_tick[0].innerText ="2010"
})

// end wih morocco

// start with reime-ruanda
reime_ruanda.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Reime-ruanda";
    country[0].innerText="reime-ruanda";
    countryImage.src = "images/ruanda.jpg";
    phoneNumber.innerText="+29 949403040"
    mail.innerText="reime_ruanda@netisgroup.net"
    address.innerText="the reime_ruanda................"
    header.innerText = "2020"
    y_tick[0].innerText ="2020"

})
// end with reime-ruanda


// start with nigeria
nigeria.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Nigeria";
    country[0].innerText="Reime Nigeria";
    countryImage.src = "images/nigeria.png";
    phoneNumber.innerText="+202 89494900"
    mail.innerText="nigeria@netisgroup.net"
    address.innerText="the nigeria................"
    header.innerText = "2021"
    y_tick[0].innerText ="2021"
})
// end with reime-ruanda

// start with reime-ruanda
togo.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Togo";
    country[0].innerText="Reime Togo";
    countryImage.src = "images/togo.png";
    phoneNumber.innerText="+29 944933339"
    mail.innerText="togo@netisgroup.net"
    address.innerText="the togo................"
    header.innerText = "2019"
    y_tick[0].innerText ="2019"
})
// end with reime-ruanda
// start with ghana and reime-ghana
ghana,ghana_2.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Ghana";
    country[0].innerText="Ghana";
    countryImage.src = "images/ghana.jpg";
    phoneNumber.innerText="+212 78394786"
    mail.innerText="ghana@netisgroup.net"
    address.innerText="the ghana................"
    header.innerText = "2018"
    y_tick[0].innerText ="2018"
})
reime_ghana.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Reime Ghana";
    country[0].innerText="Reime Ghana";
    countryImage.src = "images/ghana.jpg";
    phoneNumber.innerText="+212 78174786"
    mail.innerText="reime_ghana@netisgroup.net"
    address.innerText="the reime_ghana................"
    header.innerText = "2017"
    y_tick[0].innerText ="2017"
})
// end with ghana and reime-ghana

// start with drc
drc.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in  Drc";
    country[0].innerText="Reime Drc";
    countryImage.src = "images/drc.jpg";
    phoneNumber.innerText="+212 079737494"
    mail.innerText="drc@netisgroup.net"
    address.innerText="the drc................"
    header.innerText = "2016"
    y_tick[0].innerText ="2016"
})
// end with drc

// start with ivorycoast
ivorycoast.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Cote d'ivoire";
    country[0].innerText="Reime Cote d'ivoire";
    countryImage.src = "images/d'ivoire.jpg";
    phoneNumber.innerText="+212 5222-29582";
    mail.innerText="info.group@netisgroup.net"
    address.innerText="The ivorycoast Business center building, 4th floor,No.2 Mandarona lot, Sidi Maarouf,Zenith Center, Casablanca 20270, Morocco"
    header.innerText = "2013"
    y_tick[0].innerText ="2013"
})
// end with ivorycoast

// start with burkina
burkina.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Burkina";
    country[0].innerText="Reime Burkina";
    countryImage.src = "images/burkina.jpg";
    phoneNumber.innerText="+212 973494786"
    mail.innerText="burkina@netisgroup.net"
    address.innerText="the burkina................"
    header.innerText = "2011"
    y_tick[0].innerText ="2011"
})
// end with burkina

// start with niger
niger.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in  Niger";
    country[0].innerText="Reime Niger";
    countryImage.src = "images/niger.jpg";
    phoneNumber.innerText="+212 984494786"
    mail.innerText="niger@netisgroup.net"
    address.innerText="the niger................"
    header.innerText = "2010"
    y_tick[0].innerText ="2010"
})

// end with niger

// start with ethiopia
ethiopia.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in  Ethiopia";
    country[0].innerText="Reime Ethiopia";
    countryImage.src = "images/ethiopia.jpg";
    phoneNumber.innerText="+22 6394786"
    mail.innerText="ethiopia@netisgroup.net"
    address.innerText="the ethiopia................"
    header.innerText = "2010"
    y_tick[0].innerText ="2010"
})
// end with ethiopia

// start with gabon
gabon.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Gabon";
    country[0].innerText="Reime Gabon";
    countryImage.src = "images/gabon.jpg";
    phoneNumber.innerText="+2 674494786"
    mail.innerText="gabon@netisgroup.net"
    address.innerText="the gabon................"
    header.innerText = "2009"
    y_tick[0].innerText ="2009"
})

// end with gabon

// kenya with gabon

kenya.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in Kenya";
    country[0].innerText="Reime Kenya";
    countryImage.src = "images/kenya.jpg";
    phoneNumber.innerText="+22 9994786"
    mail.innerText="kenya@netisgroup.net"
    address.innerText="the kenya................"
    header.innerText = "2017"
    y_tick[0].innerText ="2017"
})
// end with gabon

// start with uganda
uganda.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in uganda";
    country[0].innerText="Reime uganda";
    countryImage.src = "images/uganda.jpg";
    phoneNumber.innerText="+212 6744988838"
    mail.innerText="uganda@netisgroup.net"
    address.innerText="the uganda................"
    header.innerText = "2013"
    y_tick[0].innerText ="2013"
})
// end with uganda

// start with tanzania
tanzania.addEventListener('click',()=>{
    setPara.innerText="Setup of Netis Group in tanzania";
    country[0].innerText="Reime tanzania";
    countryImage.src = "images/tanzania.jpg";
    phoneNumber.innerText="+212 7783338"
    mail.innerText="tanzania@netisgroup.net"
    address.innerText="the tanzania................"
    header.innerText = "2018"
    y_tick[0].innerText ="2018"
})

// end with tanzania