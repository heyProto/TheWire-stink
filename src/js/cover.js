import Util from './utility.js'

document.addEventListener("DOMContentLoaded", function (event) {

    let dimension = Util.getScreenSize(),
        mode = (dimension.width <= 500) ? 'mobile' : 'laptop',
        originals_container,
        cover_container,
        feeds_container,
        digests_container,
        opinions_container;

    if (mode === 'laptop') {
        Util.getJSON('https://cdn.protograph.pykih.com/e0a2f448867aece1242dd088/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                originals_container = document.getElementById("originals_container");
                if (data.length > 0) {
                    data.map((d,i) => {
                        let createDiv = document.createElement('div');
                        createDiv.id = 'ProtoCard-originals'+i;
                        createDiv.className= 'ProtoCard-originals';
                        originals_container.appendChild(createDiv);
                        let createMarginDiv = document.createElement('div');
                        createMarginDiv.style.marginBottom = "20px";
                        originals_container.appendChild(createMarginDiv);
                        setTimeout(function(){
                            new ProtoEmbed.initFrame(document.getElementById("ProtoCard-originals"+i), data[i].iframe_url, "col7");
                        },0)
                    })
                } else {
                    $(originals_container).siblings(".column-title").hide();
                }
            }
        });

        Util.getJSON('https://cdn.protograph.pykih.com/07415e50157c8048d7523830/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                feeds_container = document.getElementById("feeds_container");
                if (data.length > 0) {
                    data.map((d,i) => {
                        let createDiv = document.createElement('div');
                        createDiv.id = 'ProtoCard-feeds'+i;
                        createDiv.className= 'ProtoCard-feeds';
                        feeds_container.appendChild(createDiv);
                        let createMarginDiv = document.createElement('div');
                        createMarginDiv.style.marginBottom = "20px";
                        feeds_container.appendChild(createMarginDiv);
                        setTimeout(function(){
                            new ProtoEmbed.initFrame(document.getElementById("ProtoCard-feeds"+i), data[i].iframe_url, "col3");
                        },0)
                    })
                } else {
                    $(feeds_container).siblings(".column-title").hide();
                }
            }
        });

        Util.getJSON('https://cdn.protograph.pykih.com/445ea87bd708c3d1cb90e0d0/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                cover_container = document.getElementById("cover_container");
                if (data.length > 0) {
                    data.map((d,i) => {
                        let createDiv = document.createElement('div');
                        createDiv.id = 'ProtoCard-cover'+i;
                        createDiv.className= 'ProtoCard-cover';
                        cover_container.appendChild(createDiv);
                        let createMarginDiv = document.createElement('div');
                        createMarginDiv.style.marginBottom = "20px";
                        cover_container.appendChild(createMarginDiv);
                        setTimeout(function(){
                            new ProtoEmbed.initFrame(document.getElementById("ProtoCard-cover"+i), data[i].iframe_url, "col16");
                        },0)
                    })
                } else {
                    $(cover_container).siblings(".column-title").hide();
                }
            }
        });


    }

    if (mode === 'mobile')  {
        //Set Tab counts and container counts.
        $('.proto-mobile-grid-navigation .proto-mobile-grid-navigatio-tab').each((i, e) => {
            $(e).attr('data-tab', i);
            var active_tab = $(e).hasClass('proto-active-tab');
            if (active_tab) {
                var tab_content = $('.proto-tab-content')[i];
                $(tab_content).addClass('proto-tab-active-content');
            }
        });
        $('.proto-mobile-grid-navigation').sticky({ zIndex: 10});
        $('.proto-mobile-grid-navigation .proto-mobile-grid-navigatio-tab').on('click', (e) => {
            let tabIndex = +e.currentTarget.getAttribute('data-tab'),
                $tab = $($('.proto-mobile-grid-navigatio-tab')[tabIndex]),
                $tabContent = $($('.proto-tab-content')[tabIndex]);

            $('.proto-mobile-grid-navigatio-tab.proto-active-tab').removeClass('proto-active-tab');
            $tab.addClass('proto-active-tab');

            $('.proto-tab-content.proto-tab-active-content').removeClass('proto-tab-active-content');
            $tabContent.addClass('proto-tab-active-content');
        });

        $('.hamburger-icon').on('click', (e) => {
            $('.mobile-navigations-screen').addClass('mobile-navigations-screen-slide-in')
        });

        $('.close-icon').on('click', (e) => {
            $('.mobile-navigations-screen').removeClass('mobile-navigations-screen-slide-in')
        })

        // $('#dropdownMenuButton').on('click', (e) => {
        //     $('.protograph-app-navbar').addClass('protograph-app-navbar-slide-in');
        //     $('body').css('overflow', 'hidden');
        //     $('.container.proto-container').css('overflow', 'hidden');
        // });
        // $('#protograph_app_close_menu').on('click', (e) => {
        //     $('.protograph-app-navbar').removeClass('protograph-app-navbar-slide-in');
        //     $('body').css('overflow', 'initial');
        //     $('.container.proto-container').css('overflow', 'initial');
        // });

        Util.getJSON('https://cdn.protograph.pykih.com/e0a2f448867aece1242dd088/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                originals_container = document.getElementById("originals_container");
                data.map((d,i) => {
                    let createDiv = document.createElement('div');
                    createDiv.id = 'ProtoCard-originals'+i;
                    createDiv.className= 'ProtoCard-originals';
                    originals_container.appendChild(createDiv);
                    let createMarginDiv = document.createElement('div');
                    createMarginDiv.style.marginBottom = "20px";
                    originals_container.appendChild(createMarginDiv);
                    setTimeout(function(){
                        new ProtoEmbed.initFrame(document.getElementById("ProtoCard-originals"+i), data[i].iframe_url, "col4");
                    },0)
                })
            }
        });

        Util.getJSON('https://cdn.protograph.pykih.com/07415e50157c8048d7523830/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                feeds_container = document.getElementById("feeds_container");
                data.map((d,i) => {
                    let createDiv = document.createElement('div');
                    createDiv.id = 'ProtoCard-feeds'+i;
                    createDiv.className= 'ProtoCard-feeds';
                    feeds_container.appendChild(createDiv);
                    let createMarginDiv = document.createElement('div');
                    createMarginDiv.style.marginBottom = "20px";
                    feeds_container.appendChild(createMarginDiv);
                    setTimeout(function(){
                        new ProtoEmbed.initFrame(document.getElementById("ProtoCard-feeds"+i), data[i].iframe_url, "col4");
                    },0)
                })
            }
        });

        Util.getJSON('https://cdn.protograph.pykih.com/445ea87bd708c3d1cb90e0d0/index.json', function (err, data){
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                cover_container = document.getElementById("cover_container");
                if (data.length > 0) {
                    data.map((d,i) => {
                        let createDiv = document.createElement('div');
                        createDiv.id = 'ProtoCard-cover'+i;
                        createDiv.className= 'ProtoCard-cover';
                        cover_container.appendChild(createDiv);
                        let createMarginDiv = document.createElement('div');
                        createMarginDiv.style.marginBottom = "20px";
                        cover_container.appendChild(createMarginDiv);
                        setTimeout(function(){
                            new ProtoEmbed.initFrame(document.getElementById("ProtoCard-cover"+i), data[i].iframe_url, "col4");
                        },0)
                    })
                } else {
                    $(cover_container).siblings(".column-title").hide();
                }
            }
        });

    }
    // $(".banner-div a:empty").parent("p").css("display", "none");

    Util.getJSON('https://cdn.protograph.pykih.com/6a0fa6737a3d04e17e13cf99/index.json', function (err, data){
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            digests_container = document.getElementById("digests_container");
            if (data.length > 0) {
                data.map((d,i) => {
                    let createDiv = document.createElement('div');
                    createDiv.id = 'ProtoCard-digests'+i;
                    createDiv.className= 'ProtoCard-digests';
                    digests_container.appendChild(createDiv);
                    let createMarginDiv = document.createElement('div');
                    createMarginDiv.style.marginBottom = "20px";
                    digests_container.appendChild(createMarginDiv);
                    setTimeout(function(){
                        new ProtoEmbed.initFrame(document.getElementById("ProtoCard-digests"+i), data[i].iframe_url, "col4");
                    },0)
                })
            } else {
                $(digests_container).siblings(".column-title").hide();
            }
        }
    });


    Util.getJSON('https://cdn.protograph.pykih.com/3740bcb8d2ddb492d80964cb/index.json', function (err, data){
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            opinions_container = document.getElementById("opinions_container");
            if (data.length > 0) {
                data.map((d,i) => {
                    let createDiv = document.createElement('div');
                    createDiv.id = 'ProtoCard-opinions'+i;
                    createDiv.className= (mode == "mobile" && (i+1)%2 == 0) ? 'ProtoCard-opinions div-without-margin-right' : 'ProtoCard-opinions'  ;
                    opinions_container.appendChild(createDiv);
                    let createMarginDiv = document.createElement('div');
                    createMarginDiv.style.marginBottom = "20px";
                    opinions_container.appendChild(createMarginDiv);
                    setTimeout(function(){
                        new ProtoEmbed.initFrame(document.getElementById("ProtoCard-opinions"+i), data[i].iframe_url, "col2");
                    },0)
                })
            } else {
                $(opinions_container).siblings(".column-title").hide();
            }
        }
    });

});

