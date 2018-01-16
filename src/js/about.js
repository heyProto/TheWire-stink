import Util from './utility.js'

$(document).ready(function(){
    var mode = window.innerWidth <= 500 ? 'mobile' : 'laptop';

    document.getElementById('facebook-share-link').href = 'http://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
    document.getElementById('twitter-share-link').href = 'http://twitter.com/share?url=' + window.location.href;

    if (mode === 'laptop') {
        $("#sticker").sticky({ topSpacing: 0, bottomSpacing: 400});
        $('.related-articles-link').sticky({ topSpacing: 20, bottomSpacing: 400});
        $('#cont-button').on('click', (e) => {
            $('#cont-button').css('display', 'none');
            document.getElementById('article').className = 'article-area';
            $('.single-index-value').addClass('activate-click');
            $('body').scrollspy({
                target: '#myNavbar',
                offset: 70
            });
        })
        Util.getJSON('https://cdn.protograph.pykih.com/04437aa71365b4eac710d54c/index.json', function (err, data) {
            if (err != null) {
                alert('Something went wrong: ' + err);
            } else {
                let originals_container = document.getElementById("more_articles_container");
                if(data.length > 0){
                    for (let i = 0; i < 4; i++) {
                        let createDiv = document.createElement('div');
                        createDiv.id = 'ProtoCard-more-articles' + i;
                        createDiv.className = 'ProtoCard-more-articles';
                        originals_container.appendChild(createDiv);
                        let createMarginDiv = document.createElement('div');
                        // createMarginDiv.style.marginBottom = "20px";
                        // originals_container.appendChild(createMarginDiv);
                        setTimeout(function () {
                            new ProtoEmbed.initFrame(document.getElementById("ProtoCard-more-articles" + i), data[i].iframe_url, "col4");
                        }, 0)
                    }
                } else {
                    $(originals_container).siblings(".column-title").hide();
                }
            }
        });
    }

    if (mode == 'mobile' ) {
        $('#cont-button').on('click', (e) => {
            $('#cont-button').css('display', 'none');
            document.getElementById('article').className = 'article-area';
            $('.single-index-value').addClass('activate-click');
            $('body').scrollspy({
                target: '#myNavbar',
                offset: 70
            });
            $('.single-index-value').on('click', (e) => {
                setTimeout(function() {
                    $('.navigation-links').removeClass('navigation-links-slide-up');
                    setTimeout((e) => {
                        $('.navigation-links').css('display', 'none');
                    }, 500);
                    $('#protograph_filter_icon').css('display', 'block');
                    $('#protograph_filter_close_icon').css('display', 'none');
                }, 250);
            });
        })

        $('.hamburger-icon').on('click', (e) => {
            $('.mobile-navigations-screen').addClass('mobile-navigations-screen-slide-in')
        });

        $('.close-icon').on('click', (e) => {
            $('.mobile-navigations-screen').removeClass('mobile-navigations-screen-slide-in')
        })

        $('#protograph_filter_icon').on('click', ((e) => {
            $('.protograph-app-filter-icon').addClass('block-events');
            $('.navigation-links').css('display', 'block');
            setTimeout((i) => {
                $('.navigation-links').addClass('navigation-links-slide-up');
            }, 0);
            $('#protograph_filter_icon').css('display', 'none');
            $('#protograph_filter_close_icon').css('display', 'block');
            setTimeout((i) => {
                $('.protograph-app-filter-icon').removeClass('block-events');
            }, 500);
        }));

        $('#protograph_filter_close_icon').on('click', ((e) => {
            $('.protograph-app-filter-icon').addClass('block-events');
            $('.navigation-links').removeClass('navigation-links-slide-up');
            setTimeout((i) => {
                $('.navigation-links').css('display', 'none');
                $('.protograph-app-filter-icon').removeClass('block-events');

            }, 500);
            $('#protograph_filter_icon').css('display', 'block');
            $('#protograph_filter_close_icon').css('display', 'none');
        }));
    }

});
Util.getJSON('https://cdn.protograph.pykih.com/bd88ce325d5266c298ec1b60/index.json', function (err, data){
    if (err != null) {
        alert('Something went wrong: ' + err);
    } else {
        let related_container = document.getElementById("related_container");
        if(data.length > 0){
            data.map((d,i) => {
                let createDiv = document.createElement('div');
                createDiv.id = 'ProtoCard-originals'+i;
                // createDiv.className= 'ProtoCard-originals';
                related_container.appendChild(createDiv);
                let createMarginDiv = document.createElement('div');
                createMarginDiv.style.marginBottom = "20px";
                related_container.appendChild(createMarginDiv);
                setTimeout(function(){
                    new ProtoEmbed.initFrame(document.getElementById("ProtoCard-originals"+i), data[i].iframe_url, "col4");
                },0)
            })
        } else {
            $(related_container).siblings(".column-title").hide();
        }
    }
});
// if(document.getElementById('cont-button')){
//     document.getElementById('cont-button').onclick = function(e){
//         document.getElementById('cont-button').style.display = 'none';
//         document.getElementById('article').className='article-area';
//     }
// }