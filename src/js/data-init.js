import Util from './utility.js'

$(document).ready((e) => {

  let dimension = Util.getScreenSize(),
    mode;
  if (dimension.width <= 500){
    mode = 'mobile';
  } else {
    mode = 'laptop';
  }
  if (mode === 'laptop'){
    $('.filter-column').sticky({ topSpacing: 0 });
  }

  if (mode === 'mobile'){
    $('#protograph_filter_icon').on('click', ((e) => {
      $('.protograph-app-filter-icon').addClass('block-events');
      $('.protograph-filter-area').css('display', 'block');
      setTimeout((e) => {
        $('.protograph-filter-area').addClass('protograph-filter-area-slide-up');
      },0);
      $('#protograph_filter_icon').css('display', 'none');
      $('#protograph_filter_close_icon').css('display', 'block');
      setTimeout((i) => {
        $('.protograph-app-filter-icon').removeClass('block-events');
      }, 500);
    }));

    $('#protograph_filter_close_icon').on('click', ((e) => {
      $('.protograph-app-filter-icon').addClass('block-events');
      $('.protograph-filter-area').removeClass('protograph-filter-area-slide-up');
      setTimeout((e) => {
        $('.protograph-filter-area').css('display', 'none');
        $('.protograph-app-filter-icon').removeClass('block-events');
      },500);
      $('#protograph_filter_icon').css('display', 'block');
      $('#protograph_filter_close_icon').css('display', 'none');
    }));

    $('#dropdownMenuButton').on('click', (e) => {
      $('.protograph-app-navbar').addClass('protograph-app-navbar-slide-in');
      $('body').css('overflow', 'hidden');
      $('.container.proto-container').css('overflow', 'hidden');
    });

    $('#protograph_app_close_menu').on('click', (e) => {
      $('.protograph-app-navbar').removeClass('protograph-app-navbar-slide-in');
      $('body').css('overflow', 'initial');
      $('.container.proto-container').css('overflow', 'initial');
    });
  }

});

var x = new ProtoGraph.Card.toMaps()
  x.init({
  selector: document.querySelector('#card-list-div'),
  dataURL: 'https://cdn.protograph.pykih.com/cbe9b09e0abd2b0c52a039d0/index.json',
  topoURL: 'https://cdn.protograph.pykih.com/ie-mobbed/src/data/india-topo.json',
  chartOptions: {
    chartTitle: 'Mob Justice in India',
    height: 500,
    defaultCircleColor: '#ED1C24'
  },
  filterConfigurationJSON: {
    colors: {
      house_color: '#ED1C24',
      text_color: '#343434',
      active_text_color: '#ED1C24',
      filter_summary_text_color: '#ffffff',
      filter_heading_text_color: '#ffffff'
    },
    selected_heading: 'Filters',
    reset_filter_text: 'Reset'
  },
  filters: [
    {
      propName: 'genre',
      alias: 'Genre'
    },
    {
      propName: 'subgenre',
      alias: 'Sub Genre'
    },
     {
      propName: 'country',
      alias: 'Country'
    },
    {
      propName: 'state',
      alias: 'State'
    },
    {
      propName: 'city',
      alias: 'City'
    },
    {
      propName: 'byline',
      alias: 'Byline'
    },
    {
      propName: 'hasdata',
      alias: 'Has Data?'
    },
    {
      propName: 'hasimage',
      alias: 'Has Image?'
    },
    {
      propName: 'hasvideo',
      alias: 'Has Video?'
    },
    {
      propName: 'interactive',
      alias: 'Is Interactive?'
    },
    {
      propName: 'sponsored',
      alias: 'Is Sponsored?'
    }
  ]
})
x.renderLaptop();