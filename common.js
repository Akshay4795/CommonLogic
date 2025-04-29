$(function() {
  //Filter Bar
  $('.filterBar div').on('click', function() {
      if($(this).hasClass('active')) return;

    $(this).addClass('active').siblings().removeClass('active');
  });

  //Common Dialog
      //needed to remove Apriso's default HR that is added to the footer of the popup
      $('.Popup .FORM_FOOT > hr').remove();

      //seperating label and input on different lines
      $('.Popup .Form').children('tbody').children('tr').children('td').addClass('Popuprow');
      $('.Popuprow').css({"display": "flex"});

      //Add padding to non-required fields
      $('.Popup .FormContainer .Label').not('.Required').next().css({'padding-bottom': '14px'});


      //Prompts for required fields
      $('.Popup .FormContainer .Required').each(function(index, _item){
          //adding prompt
          $('.Popup .FormContainer .Required').eq(index).next().after('<td class="required-prompt" style="display: block; font-size: 10px; color: #7D8790; padding: 0 0 10px 0;">Enter valid ' + $(".Popup .FormContainer .Required").eq(index).html() + '</td>');
      });
  // -- end of Common Dialog -- //

//Help Icon in the Hamburger menu when the screen with is decreased
$('a > .apr-header-action.help' ).parent().on('click', function(e) {
    e.preventDefault();
  openWindow($('.help').attr('href'));
});
  var appWindowSingle;	// variable for window
  function openWindow(str){
      var indent = 20;
      var screenw = screen.width-(indent*2);
      var screenh = screen.height-(indent*6);

      var windowOptions = "";
      windowOptions += "toolbar=no";				// whether to display the browser toolbar, making buttons such as Back, Forward, and Stop available
      windowOptions += ",menubar=no";				// whether to display the menu bar
      windowOptions += ",resizable=yes";			// whether to display resize handles at the corners of the window
      windowOptions += ",scrollbars=yes";			// whether to display horizontal and vertical scroll bars
      windowOptions += ",status=yes";				// whether to add a status bar at the bottom of the window
      windowOptions += ",location=no";			// whether to display the input field for entering URLs directly into the browser
      windowOptions += ",top="+indent;			// the distance from the top of the screen that the browser window is opened
      windowOptions += ",left="+indent;			// the distance from the left of the screen that the browser window is opened
      windowOptions += ",width=1200";			// the width of the browser window
      windowOptions += ",height=800";		// the height of the browser window

      if( appWindowSingle == null || appWindowSingle.closed ) {
          // on first load of the html page or when the custom window is closed
          appWindowSingle = window.open(str, "_blank", windowOptions);
      } else {
          // if appWindowSingle is open, refresh page to URL and display window in front (focus)
          appWindowSingle.parent.location.href = str;
          appWindowSingle.focus();
      }
  }


  //TABS
  $('.tabs2 li a').on('click', function(e) {
      e.preventDefault();

  var tabs2 = $($(this).closest('.tabs2'));
  var cur = tabs2.find('.active');

      $($('a', cur).attr('href')).removeClass('show'); //hide current active class content
      cur.removeClass('active'); //remove active class from Li
  
      $(this).parent().addClass('active'); //Add active class to new Li
      $($(this).attr('href')).addClass('show'); //Show new active tab content
  });

//GOOGLE MATERIAL TABS
$('.tabs3 button').on('click', function(e) {
      e.preventDefault();

  var tabs3 = $($(this).closest('.tabs3'));
  var cur = tabs3.find('.active');

      $($('a', cur).attr('href')).removeClass('show'); //hide current active class content
      cur.removeClass('active'); //remove active class 
  
  $(this).addClass('active'); //Add active class to new button
      $($(this).find("a").attr('href')).addClass('show'); //Show new active tab content
  });


  //TOOLTIPS
  $('[data-toggle="tooltip"]:not([data-position])').tooltip({
  tooltipClass: 'tooltip2', 
  show: {
    delay: 500
  },
      position: {
          my: "left",
          at: "right"
      }
  });
  $('[data-toggle="tooltip"][data-position="top"]').tooltip({
  tooltipClass: 'tooltip2', 
  show: {
    delay: 500
  },
      position: {
          my: "bottom",
          at: "top"
      }
  });
  $('[data-toggle="tooltip"][data-position="left"]').tooltip({
  tooltipClass: 'tooltip2', 
  show: {
    delay: 500
  },
      position: {
          my: "right",
          at: "left"
      }
  });
  $('[data-toggle="tooltip"][data-position="right"]').tooltip({
  tooltipClass: 'tooltip2', 
  show: {
    delay: 500
  },
      position: {
          my: "left",
          at: "right"
      }
  });
  $('[data-toggle="tooltip"][data-position="bottom"]').tooltip({
  tooltipClass: 'tooltip2', 
  show: {
    delay: 500
  },
      position: {
          my: "top",
          at: "bottom"
      }
  });
  //EPIS - OPEN
  $('body').on('click', '.epis2', function(_e) {
  $('.epis2.tooltip-open').tooltip('close');
  $('.epis2.tooltip-open').removeClass('tooltip-open');
});
  //EPIS - CLOSE WHEN CLICK OUTSIDE
  $('body').on('mousedown touchstart', function (e) {
  
      var container = $(".epis-popup.ui-tooltip");

        // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.epis2').is(e.target)) {
          $('.epis2.tooltip-open').tooltip('close');
      $('.epis2.tooltip-open').removeClass('tooltip-open');
      }
  
});
});

  //EPIS
  function COM_EPIS_SuccessFormat(empInfo) {
      return $('<div>', {
          class: 'tooltip-container',
          html: $('<div>', {
              class: 'tooltip-inner',
              html: $('<div>', {
                  class: 'tooltip-header',
                  html: $('<div>', {
                      class: 'tooltip-header-inner',
                      html: $('<i>', {
                          class: 'material-icons',
                          text: 'account_circle'
                      })
                  })
                  .append(
                      $('<div>', {
                          class: 'user-name popup-title',
                          text: empInfo['name']
                      })
                  )
              })
              .append(
                  $('<div>', {
                      class: 'tooltip-body',
                      html:$('<div>', {
                          class: 'tooltip-body-inner',
                          html: $('<div>', {
                              class: 'user-info',
                              html: $('<ul>', {
                                  class: 'list',
                                  html: $('<li>', {
                                      class: 'list-label',
                                      text: 'BEMSID'
                                  })
                                  .append($('<li>', {
                                      class: 'list-text',
                                      text: empInfo['bemsid']
                                  }))
                                  
                                  .append($('<li>', {
                                      class: 'list-label',
                                      text: 'Phone'
                                  }))
                                  .append($('<li>', {
                                      class: 'list-text',
                                      text: empInfo['phone']
                                  }))
                                  .append($('<li>', {
                                      class: 'list-label',
                  
                                      text: 'Email'
                                  }))
                                  .append($('<li>', {
                                      class: 'list-text',
                                  }).append($('<a href="mailto:'+ empInfo['email'] + '">' + empInfo['email'] +'</a>'))
                )
                                  .append($('<li>', {
                                      class: 'list-label',
                                      text: 'Location'
                                  }))
                                  .append($('<li>', {
                                      class: 'list-text',
                                      text: empInfo['location']
                                  }))
                
                              })
                          })
                      })
                  })
              )
          })
      });
  
  }


  function COM_EPIS_ErrorFormat() {
      return $('<div>', {
          class: 'tooltip-container',
          html: $('<div>', {
              class: 'tooltip-inner',
              html: $('<div>', {
                  class: 'tooltip-header',
                  html: $('<div>', {
                      class: 'tooltip-header-inner',
                      text: 'Employee information not available'
                  })
              })
          })
      });
  }

  function COM_EPIS(bemsid, el, context, event, errorCallback) {
if($('body').data('epis2IsRunning')){
          return;
}
      
  $('body').data('epis2IsRunning', true);
      var showEmployeeInfo = function (output) {
          var content = COM_EPIS_ErrorFormat();
          if(output.Content.charAt(0) == '{') {
              if(JSON.parse(output.Content)['status'] == 'ACTIVE') {
                  var result = JSON.parse(output.Content),
                  empInfo = {};
                  empInfo['bemsid'] = bemsid;
                  empInfo['name'] = (result['employee-name'] == null) ? "":result['employee-name'].split(" ");
                  empInfo['dept'] = (result['dept'] == null) ? "":result['dept'];
                  empInfo['phone'] = (result['phone'] == null) ? "":result['phone'];
                  empInfo['email'] = (result['email'] == null) ? "":result['email'];
                  empInfo['building'] = (result['building'] == null) ? "":result['building'];
                  empInfo['floor'] = (result['floor'] == null) ? "":+result['floor'];
                  empInfo['room'] = (result['room'] == null) ? "":result['room'];
                  empInfo['location'] = "";
                  
                  if(empInfo['name'].length > 2) {
                      empInfo['name'] = empInfo['name'][0] + " " + empInfo['name'][1] + " " + empInfo['name'][2].charAt(0);
                  } else {
                      empInfo['name'] = empInfo['name'][0] + " " + empInfo['name'][1];
                  }
                  
                  if(empInfo['building']) {
                      empInfo['location'] = empInfo['building'];
                      if(empInfo['floor']) {
                          empInfo['location'] += "." + empInfo['floor'];
                          if(empInfo['room']) {
                              empInfo['location'] += ", " + empInfo['room'];
                          }
                      }
                  }
                  
                  content = COM_EPIS_SuccessFormat(empInfo);
              }
          }
          el.addClass('tooltip-open');
          el.tooltip({
              tooltipClass: 'epis-popup', 
              items: ".tooltip-open",
              content: function () {
                  return content;
              },
              //track: true,
              position: {
                  my: "right top",
                  at: "left-15 top-0",
                  of: event
              }
          }).on('mouseout focusout', function(eventMouseout) {
              eventMouseout.stopImmediatePropagation();
          });
          el.trigger('mouseenter');
          
    $('body').data('epis2IsRunning', false);
      };

      context.callOperation('COM_EPIS_OperationAjax', {"BEMSID":bemsid}, showEmployeeInfo,
          function (message) {
              if (typeof errorCallback == "function") {
                  errorCallback(message);
              } else {
                  console.log(message);
              }
          }
      );
    
  }

//Common JS for File Validation
function COM_ValidateFile(input, success) {
  var file = input[0].files[0];
  if(file) {
      var fileSize = +(Math.round(file.size / Math.pow(1024,2) + 'e+2')  + 'e-2');  //NOSONAR Reason:ValidPrecision
      var fileExt = file.name.split('.').pop();
  }
  var _Context = OperationContext.get(input.closest('div.OperationContainer').attr('class').split(' ').filter(function( cn ) {
      return cn.indexOf('Screen_') === 0;
  })[0]);
  COM_ValidateFileAJAX({"FileExtension":fileExt, "FileSize":fileSize}, input, _Context, success);
}

function COM_ValidateFileAJAX(extInputs, _input, _Context, success) {
  _Context.callOperation('COM_ValidateUpload', extInputs, success,
  function(xhr, _status, _error){
      console.log(xhr);
  });
}

//
$(function() {

  var fileInput;

  $(document).on('click', '.upload2 .btn-upload', function() {
    $('.upload2 > .VerticalLayout input[type="file"]').trigger('click');
  });

  $(document).on('change', '.upload2 > .VerticalLayout input[type="file"]', function() {
    fileInput = $(this)[0];
    var fileList = fileInput.files;
    var container = $(this).closest('.upload2');
  var MaxFileSize;
  var ValidFileExtension;
  
 if($(this).closest('.upload2').attr('data-fileSize')!== undefined)
 {
  MaxFileSize=$(this).closest('.upload2').attr('data-fileSize');//Maximum file size.Input from data attribute
 }
 else
 {
    MaxFileSize = 100;
 }
 if($(this).closest('.upload2').attr('data-fileType')!== undefined)
 {
  ValidFileExtension=$(this).closest('.upload2').attr('data-fileType').split(',');//list of valid extension.Input from data attribute
 }
 else
 {
   ValidFileExtension = '';
 } 
    if (fileList && $('.upload2 > .VerticalLayout input[type="file"]', container).val() != '') {
      $('.browse-file', container).hide();
      if ($('.VerticalLayout input[type="file"]', container).prop('multiple')) {
        $('.clear-all', container).show();
      }
  
      $.each(fileList, function(index, value) {
        
        //converting current file size bytes to Mega Bytes.
    var fileSize = +(Math.round(value.size / Math.pow(1024,2) + 'e+2')  + 'e-2');//NOSONAR Reason:ValidPrecision
    //Getting the current file extension
    var fileExt = value.name.split('.').pop();
    if((fileSize>MaxFileSize &&MaxFileSize!='') || (!ValidFileExtension.includes(fileExt)&& ValidFileExtension.length>1))//Checking for both validation and any one is true,then file will not uploaded
    {	
      
      if(!ValidFileExtension.includes(fileExt)&& ValidFileExtension.length>1)//When uploaded file extension is not within the list of valid extensions and valid extensions is not specified from data attribute
      {
        $('table', container).append('<tr><td><i class="material-icons validation-error" style="font-size:16px;">error</i></td><td><i class="material-icons" style="color:#7D8790;">attach_file</i></td><td><span class="upload-info" style="color:#7D8790" data-filename="' + value.name  + '">' + value.name + '</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
        $('table', container).append('<tr><td></td><td></td><td><span class="file-validation c2" style="color:#EB0029;"  >' + "File type not supported(Only "+ValidFileExtension+ ")"+'</span></td></tr>')
      }
      else if(fileSize>MaxFileSize &&MaxFileSize!='')//When uploaded file size is greater than max size and max size is specified from data attribute
      {
        $('table', container).append('<tr><td><i class="material-icons validation-error" style="font-size:16px;">error</i></td><td><i class="material-icons"  style="color:#7D8790;">attach_file</i></td><td><span class="upload-info" style="color:#7D8790" data-filename="' + value.name  + '">' + value.name + '</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
         $('table', container).append('<tr><td></td><td></td><td><span class="file-validation c2" style="color:#EB0029;" >' + "File size is too large"+" ("+fileSize +"MB)"+ '</span></td></tr>')
      }
      //Below code is for not uploading the file when inavlid file is browsed.
      const fileList1 = new DataTransfer();
          $.each(fileInput.files, function(key, file) {
                if(value.name !== file.name) {
                fileList1.items.add(file);
              }
          });
       fileInput.onchange = null;
          fileInput.files = fileList1.files;
    }
    else
    {
      //when both data attributes are not provided and falls within size and list of valid extensions.
      $('table', container).append('<tr><td><i class="material-icons">attach_file</i></td><td><span class="upload-info" style="color:#263746" data-filename="' + value.name  + '">' + value.name + '</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
    }				
  });
    }
  });


  $(document).on('click', '.upload2 .remove-attachment', function() {
      var fileRow = $(this).closest('tr');
      var filename = fileRow.find('.upload-info').data('filename');
      var container = $(this).closest('.upload2');
  //to remove the validation messages
    $(".upload2 table tbody tr:not(.browse-file)").remove();
        //might not work in Firefox
      const fileList = new DataTransfer();
      $.each(fileInput.files, function(key, file) {
          if(filename !== file.name) {
          fileList.items.add(file);
          }
      });
        
      fileRow.remove();
      fileInput.onchange = null;
      fileInput.files = fileList.files;
      
      if(fileInput.files.length < 1) {
          $('.browse-file', container).show();
          if ($('.VerticalLayout input[type="file"]', container).prop('multiple')) {
          $('.clear-all', container).hide();
          }
      }
    
  });

  $(document).on('click', '.upload2 .btn-clear', function() {
      COM_File_Upload_Remove_Attachment($(this));
  });

});

function COM_File_Upload_Remove_Attachment(el) {
  var container = el.closest('.upload2');
  $('tr', container).not('tr.browse-file').remove();

  $('.browse-file', container).show();
  $('.clear-all', container).hide();
  
  $('.VerticalLayout input[type="file"]', container).val('');
}

/*
** STATUS2
*/
function COM_showStatus2(selectedValue, rowKey, button) {
  $('.status2-dropdown').position({
      my: "left top",
      at: "left bottom",
      of: button,
      collision: "flip",
      within: window,
      using: function(obj, info) {
          info.element.element.css('top', obj.top);
          info.element.element.css('left', obj.left);

          //Add class based on vertical direction of dropdown
          var item_top = info.vertical != "top" ? "top" : "bottom";
          button.addClass("item_" +  item_top);
          button.removeClass("item_" + (item_top == "top"? "bottom" : "top"));
          
      }
     });


  $('li:contains("' + selectedValue + '")').addClass('active');
  $('.status2-dropdown').css('width', $('.status2 button').outerWidth());
  $('.status2-dropdown').css('visibility', 'visible');
  $('.status2-dropdown').data('rowKey', rowKey);
  
  button.parent().addClass('status2-open');
}

$(function() {

$(document).on('click', '.status2 button', function(_e) {        
      if( $('.status2-dropdown').css('visibility') == 'hidden' ) {
          var selectedValue = $(this).text();
          var rowKey = $(this).closest('tr').data('key');
          
          if($('.status2-dropdown').data('ajax') == true) {
              get_statuses(rowKey, selectedValue, $(this));
          } else {
              COM_showStatus2(selectedValue, rowKey, $(this));
          }
      } else {
          hide();
      }
});

function hide() {
  //Remove active class from current List Item
  $('.status2-dropdown li.active').removeClass('active');
  $('.status2-dropdown').css('visibility', 'hidden');
  $('tr[data-key="' + $('.status2-dropdown').data('rowKey') + '"] .status2 > div.status2-open').removeClass('status2-open');
}
  
  //On Click of List Item
$(document).on('click', '.status2-dropdown li:not(".list-padding")', function() {
  //Remove active class from current List Item
  $('.status2-dropdown li.active').removeClass('active');
  
  //Set text and circle to new status
  if($('.status2-dropdown').data('ajax') != true) $('tr[data-key="' + $('.status2-dropdown').data('rowKey') + '"] .status2 button').html($(this).html());
  
  //Close dropdown
  hide();
  });
  
  $(document).on('mouseover', '.status2-dropdown li:not(".list-padding")', function() {
  //Remove active class from current List Item
  $('.status2-dropdown li.active').removeClass('active');
});

//CLOSE ON CLICK OUT OF DROPDOWN
$(document).on('mousedown touchstart', function(e) {
  

  // if the target of the click isn't the container nor a descendant of the container
  if (!$('.status2-dropdown').is(e.target)
    && $('.status2-dropdown').has(e.target).length === 0
    && !$('.status2').is(e.target)
    && $('.status2').has(e.target).length === 0) {
      hide();
  }
});

});

/*
** GRID2
*/
$(function() { //NOSONAR Reason:CognitiveComplexity
if ($('.grid2').length) { //NOSONAR Reason:CognitiveComplexity
      OperationContext.get($('.grid2').closest('div.SubOperation[class*="Screen_"]').attr('class').split(' ').filter(function( cn ) {
          return cn.indexOf('Screen_') === 0;
      })[0]).view.onLoaded(init);
  }
var filterEventsCalledOnce = [];
  function init() {
  setTimeout(function(){
  newDateTimePicker();},1000);// new Date- time picker
      filter2(); //multifilter popup
      goToPage();
      totalRecords();
      selectAll();
      searchEdit();
  
  }

  /** Search **/
  function searchEdit(){
    $('input.filter').not('.multifiltervalue').not('.datetime').not('.DropDown').attr("placeholder", "Search");
    $('.DynamicGrid').dgAttachHandler('dataLoaded', function () {
    $('input.filter').not('.multifiltervalue').not('.datetime').not('.DropDown').attr("placeholder", "Search");
      });
  }
/** Date-time picker**/
    function newDateTimePicker(){
  // adding plugin code
  $('body').append('<script src="scripts/bng/common/components/datepicker.js"></script>');
  $('body').append('<script src="scripts/bng/common/components/mui-time-picker.js"></script>');
  //disabling the old calendar and time picker from grid
  $('.grid2 .k-i-calendar').parent('span').prop("onclick", null).off("click");
  $('.grid2 .k-i-clock').parent('span').prop("onclick", null).off("click");
  $('.grid2 date.filter.k-input').prop("onclick", null).off("click");
  
  //enabling new date time picker for datetime filter
    $('.grid2').each(function(_index,_value){
      var grid = $(this).dgGetGrid();
      grid.find(".k-picker-wrap").each(function () {
        var cusThis=$(this);
        var InputFilterName=cusThis.children('input.datetime.filter');
        if(InputFilterName.length){
        cusThis.find('.k-link-date').datepicker({
          onUpdate:function(val){
            var currValue = cusThis.children('input').val();
            var currValueSplit = currValue.split(" ");
            var currTime = currValueSplit[1] + " " + currValueSplit[2];
            if(currValue)
            {
              cusThis.children('input').val(val+' ' +currTime);
            }
            else
            {
              cusThis.children('input').val(val+' 12:00:00 AM');
            }
            grid.dgGetData(0);
            if(cusThis.find('input.datetime.filter') != null){
              cusThis.find('input.datetime.filter').trigger('change');
              }
          }
        });
        
        $(this).find('.k-link-time').muiTimePicker({
          onChange:function(val){
            if(cusThis.children('input').val()=="")
              cusThis.children('input').val( ((new Date).getMonth()+1)+'/'+(new Date).getDate()+'/'+(new Date).getFullYear()+' '+val);
            else{
              var DateFromInputBox= new Date(cusThis.children('input').val());
              cusThis.children('input').val( (DateFromInputBox.getMonth()+1)+'/'+DateFromInputBox.getDate()+'/'+DateFromInputBox.getFullYear()+' '+val);
              }
            grid.dgGetData(0);
            if(cusThis.find('input.datetime.filter') != null){
              cusThis.find('input.datetime.filter').trigger('change');
              }
          }, showSeconds: true
        });
        }
        
        //enabling date picker for date filter.
        InputFilterName=cusThis.children('input.date.filter');
        if(InputFilterName.length)
        {
          cusThis.find('.k-i-calendar').wrap('<span></span>');
          cusThis.find('.k-i-calendar').parent('span').datepicker({
          onUpdate:function(val){
            cusThis.children('input').val(val);
            grid.dgGetData(0);
          }
          });
        }
      });
    });

 }
  /*
  ** FILTER2
  */
function filter2() {
  
  $('.grid2').each(function(index, _value){
  //Disable OnClick for multifilter filters
  $(this).parent().find('.grid2 .multifiltervalue ~ a').prop("onclick", null).off("click");
  //Filter OnClick
      $(this).parent().find('.multifiltervalue').parent('.k-textbox').click(function(){
          var filterInput = $(this).children('.multifiltervalue');
          var filterName = $(this).children('.multifiltervalue').data('field');
    //Remove existing popup values and create new pop up in case filters were updated via grid Api
    if($('.filter2-' + filterName).length > 0) {
      $('.filter2-' + filterName).remove();
    }
          buildPopupFilter(filterInput, filterName, index);
    
    if(filterEventsCalledOnce.indexOf(index + "_" + filterName) == -1)
    {
      filterEventsCalledOnce.push(index + "_" + filterName);
      setFilterEvents(filterName,index);
    }
          //Open Popup
          $('.filter2-' + filterName).dialog("open");
  });
  });

  }

  function setFilterEvents(filterName, gridIndex) {

  var grid = $('.grid2').eq(gridIndex);
      var selectedFilters =  grid.dgGetFilters()['filter_' + filterName];
  var settingsConfig = grid.dgSettings('Config');
      var Dictionaries = settingsConfig.Dictionaries;
      //Checkbox OnClick
  $(document).on('click', '.'+gridIndex+ '-filter2-' + filterName + ' .filter2-checkbox > input', function() {
    var popupVars = $(this).closest('.filter2-'+filterName).data('popupVars');
      if($(this).is(':checked')) {
        $(this).closest('div.filter-list').siblings('.filter-selected').append('<div class="chip2"  data-filter="'+ $(this).val() + '">' + $(this).next().text() + '<i class="comicon chip2close" style="cursor:pointer;">close</i></div>');
        popupVars.selectedFiltersArr.push(_decode($(this).val()));
      } else {
        $(this).closest('div.filter-list').siblings('.filter-selected').find('.chip2[data-filter="'+ $(this).val() +'"]').remove();
        var index = popupVars.selectedFiltersArr.indexOf($(this).val());
        if (index > -1) popupVars.selectedFiltersArr.splice(index, 1);
      }

  });
  //Remove Filter OnClick
  $(document).on('click', '.filter2-' + filterName + ' .chip2close', function(_e) {
          var popupVars = $('.filter2-'+filterName).data('popupVars');
    var val = $(this).parent().data('filter');
    
    $(this).parent().remove();
    $('.filter2-' + filterName + ' .filter-items input[value="' + val + '"]:checked').prop('checked',false);
    var stringVal = ''+val; 
    var index = popupVars.selectedFiltersArr.indexOf(stringVal);
    if (index > -1) popupVars.selectedFiltersArr.splice(index, 1);
      });
  //Select All OnClick
  $(document).on('click','.filter2-' + filterName + ' .filter-select-all button', function(_e) {
          
          var popupVars = $('.filter2-' + filterName).data('popupVars');
          $('.filter2-' + filterName + ' .filter-selected').html("")
          Dictionaries[filterName].forEach(function(item, _i) {
      if(item['Value'] != ''){
        $('.filter2-' + filterName + ' .filter-selected').append('<div class="chip2"  data-filter="'+ _encode(item['Key']) + '">' + _decode(item['Value']) + '<i class="comicon chip2close" style="cursor:pointer;">close</i></div>');
      }
          });
          $('.filter2-' + filterName + ' .filter-items input[type=checkbox]').prop('checked', true);
          popupVars.selectedFiltersArr = [...popupVars.filterValuesArr];
      });
  //Clear Filters OnClick
  $(document).on('click', '.filter2-' + filterName + ' .filter-clear button', function(_e) {
        
          var popupVars = $('.filter2-'+filterName).data('popupVars');

    $('.filter2-' + filterName + ' .filter-selected').html("");
    $('.filter2-' + filterName + ' .filter-items input[type=checkbox]:checked').prop('checked',false);
    popupVars.selectedFiltersArr = [];
  });
  //Popup Close Button onClick
  $(document).on('click', '.popup2-' + filterName + ' .ui-dialog-titlebar-close', function() { 
          var popupVars = $('.filter2-' + filterName).data('popupVars');
    popupVars.selectedFiltersArr = (selectedFilters[0].length > 0) ? selectedFilters[0].split('|'):[];
        //Set Popup Content HTML
    var popupSelectedFilterItems = '';
    if(selectedFilters[0].length > 0) {
      popupVars.selectedFiltersArr.forEach(function(item, _i){
        popupSelectedFilterItems += '<div class="chip2" data-filter="'+ item + '">' + item + '<i class="comicon chip2close" style="cursor:pointer;">close</i></div>'
      });
    }
    var popupChkbxFilterItems = '';
    Dictionaries[filterName].forEach(function(item, i) {
      if(item['Value'] != ''){
        var checked = (popupVars.selectedFiltersArr.indexOf(item['Value']) >= 0) ? 'checked':'';
        popupChkbxFilterItems += '<div class="checkbox filter2-checkbox"><input type="checkbox" value="' + _encode(item['Key']) + '" id="checkbox_' + filterName + '_' + i + '" ' + checked + ' /><label for="checkbox_' + filterName + '_' + i + '">' + _decode(item['Value']) + '</label></div>';
      }
    });
    
    $('.filter2-'+ filterName + ' .filter-selected').html(popupSelectedFilterItems);
    $('.filter2-'+ filterName + ' .filter-items').html(popupChkbxFilterItems);
    
  });
}

  function buildPopupFilter(_filterInput, filterName, gridIndex) {
  var grid = $('.grid2').eq(gridIndex);
      var selectedFilters =  grid.dgGetFilters()['filter_' + filterName];
  var settingsConfig = grid.dgSettings('Config');
      var Titles = settingsConfig.Titles;
      var Dictionaries = settingsConfig.Dictionaries;
      var popupVars = {
          filterValuesArr: [],
          selectedFiltersArr: (selectedFilters[0].length > 0) ? selectedFilters[0].split('|'):[]
      };
      //Set Popup Content HTML
  var popupSelectedFilterItems = '';
  if(selectedFilters[0].length > 0) {
    popupVars.selectedFiltersArr.forEach(function(item, _i){
      popupSelectedFilterItems += '<div class="chip2" data-filter="'+ item + '">' + item + '<i class="comicon chip2close" style="cursor:pointer;">close</i></div>'
    });
  }
  var popupChkbxFilterItems = '';
  Dictionaries[filterName].forEach(function(item, i) {
    var checked = (popupVars.selectedFiltersArr.indexOf(item['Value']) >= 0) ? 'checked':'';
    if(item['Key'] != "(null)" && item['Key']!= -2147483648){
      popupChkbxFilterItems += '<div class="checkbox filter2-checkbox"><input type="checkbox" value="' + _encode(item['Key']) + '" id="checkbox_' + filterName + '_' + i + '" ' + checked + ' /><label for="checkbox_' + filterName + '_' + i + '">' + _decode(item['Value']) + '</label></div>';
      popupVars.filterValuesArr.push(item['Key']);
    }
      });

  var popup = '<div class="filter2-' + filterName + ' '+ gridIndex + '-filter2-' + filterName + '"><div class=inner><div class=filter-selected>' + popupSelectedFilterItems + '</div><div class="filter-actions"><div class="filter-select-all"><button class="btn btn-tertiary" style="color:#008CC8;border-bottom-color:#008CC8">Select All</button></div><div class="filter-clear"><button class="btn btn-tertiary" style="color:#008CC8;border-bottom-color:#008CC8">Clear Filters</button></div></div><div class="filter-list"><div class=filter-items>' + popupChkbxFilterItems + '</div></div></div></div>'

      $(popup).dialog({
      autoOpen: false,
      modal: true,
      resizable: false,
      draggable: false,
    height: 418,
      width: 564,
      display: 'block',
    title: 'Filter by ' + Titles[filterName],
    dialogClass: 'popup2 popup2-' + filterName,
      buttons: {
        "Apply": {
        click: function() {
                      var popupVarsData = $('.filter2-' + filterName).data('popupVars');
          
          var filters = grid.dgGetFilters();
          filters['filter_' + filterName] = [popupVarsData.selectedFiltersArr.join('|')];
          grid.dgSetFilters(filters);
              $(this).dialog("close");
          
                      if (grid.dgSettings("Config").Autofiltering) {
                          grid.dgGetData(-2, null, null, function () {
                              grid.dg().fireEvent("filter");
                          });
                      }
            },
        text: 'Apply',
        class: 'btn btn-primary'
      }
       }
    });
  
  $('.filter2-'+filterName).data('popupVars', popupVars);
  }

  /*
  ** GO TO PAGE
  */
 function goToPage() {
      //@TODO: REMOVE INLINE STYLING
      //Replace current grid page # with input field showing the current page #
  $('.grid2').each(function(_index, _value){
    var grid = $(this).dgGetGrid();
    grid.find('.pgCurrent').html('<input type="text" class="field field-text field-goto" value="' + grid.dgPageIndex() + '">');
    setGoToEvents(grid);
    //Attach Handler Function
    grid.dgAttachHandler('dataLoaded' , setGoToEvents);
  });
  }
  //Navigate to Selected Page
  function navigateToPage(grid, page) {
      //If invalid page
      if (page > grid.dgTotalPages() || page < 0) return;

      //Navigate to page
      grid.dgSettings("Runtime").Index = (page - 1) * grid.dgSettings("Config").Top;
      grid.dgGetData(0);
  }
  //Set Events
  function setGoToEvents(thisGrid) {
      //Set input field on page change
      thisGrid.find('.pgCurrent').html('<input type="text" class="field field-text field-goto" value="' + thisGrid.dgPageIndex() + '">');
      //Limits textbox to numbers only
      thisGrid.on('keydown', '.field-goto', function (e) {
          if (e.shiftKey || !((e.keyCode > 95 && e.keyCode < 106) || (e.which > 95 && e.which < 106)
              || (e.keyCode > 47 && e.keyCode < 58) || (e.which > 47 && e.which < 58)
              || e.keyCode == 8 || e.which == 18
              || e.keyCode == 13 || e.which == 13)) return false;

          if (e.which == 13 || e.keyCode == 13) {
              e.preventDefault();
              e.stopImmediatePropagation();

              navigateToPage(
                  $(this).dgGetGrid(), //Grid
                  $(this).val() //Value entered into input field
              );
          }
      });
  }

   /*
  ** RECORDS - Displays record data at bottom right of grid
  */
 function totalRecords() {
   $('.grid2').each(function(_index,_value){
    var grid = $(this).dgGetGrid();
      var settingsConfig = grid.dgSettings('Config');
      var settingsRuntime = grid.dgSettings('Runtime');
      var currentRecord = settingsRuntime.Index + 1;
      var currecordsPerPage = Number(settingsConfig.Top);
      var totalCurrentRecord = currecordsPerPage + currentRecord - 1;
      if(currecordsPerPage + currentRecord > grid.dgSettings('Runtime').TotalRecords) {
          totalCurrentRecord = grid.dgSettings('Runtime').TotalRecords;
      }
      $(this).parent().find('.Total').html('Records ' + currentRecord + '-' + totalCurrentRecord + ' / ' + grid.dgSettings('Runtime').TotalRecords);
      setTotalRecordsEvents(grid);		   
    
   });

  }

  function setTotalRecordsEvents(thisgrid) {
      thisgrid.dgAttachHandler('dataLoaded' , function (grid, _selectedItem) {
          var currentRecord = grid.dgSettings('Runtime').Index + 1; //This means the page number * number of records + 1
          var currecordsPerPage = Number(grid.dgSettings('Config').Top); //how many records per page
          var totalCurrentRecord = currecordsPerPage + currentRecord - 1; //25 + 1 - 1 = 25 This is the number of records that
          if(currecordsPerPage + currentRecord > grid.dgSettings('Runtime').TotalRecords) {
              totalCurrentRecord = grid.dgSettings('Runtime').TotalRecords;
          }
           grid.find('.Total').html('Records ' + currentRecord + '-' + totalCurrentRecord + ' / ' + grid.dgSettings('Runtime').TotalRecords);
      });
  }

  /*
  ** SELECTALL
  */
 function selectAll() {
  $('.grid2').each(function(index,_value){
  var grid = $(this); 
  var settingsConfig = grid.dgSettings('Config');
  var selection = settingsConfig.Selection;		
  if( $(this).parent().find('.grid2 .HeadF').length > 0 
      && typeof $(this).parent().find('.grid2 .HeadF td').first().data('field') === 'undefined'
      && $(this).parent().find('.grid2 .HeadF td').first().children().length == 0
      && selection.mode == 'Multiple' && selection.rowSelector == 'Select') {
          $(this).parent().find('.grid2 .HeadF td').first().html('<div class="fix selector" style="margin: 0 auto;"><input class="exclude ds selectAll'+index+'" type="checkbox" data-originalval="0" value="0" tabindex="0" id="_selectAll'+index+'"><label for="_selectAll'+index+'"></label></div>');
      } /*else if( typeof $(this).parent().find('.grid2 .HeadT td > div').first().data('field') === 'undefined'
      && $(this).parent().find('.grid2 .HeadT td > div').first().children().length == 0
      && selection.mode == 'Multiple' && selection.rowSelector == 'Select') {
          $(this).parent().find('.grid2 .HeadT td > div').first().html('<input class="exclude ds selectAll'+index+'" type="checkbox" data-originalval="0" value="0" tabindex="0" id="_selectAll'+index+'"><label for="_selectAll'+index+'"></label>');   
      }*/
  setSelectAllEvents($(this), grid, index);
  });

  }

  function setSelectAllEvents(thisobj, thisgrid, thisindex) {
      $(document).on('change', '.grid2 .selectAll'+thisindex+'', function() {
          dgSelectAll(thisgrid.attr('id'), thisobj.parent().find('.grid2 .selectAll'+thisindex+'').is(':checked'));
      });
      
      thisgrid.dgAttachHandler('selection', function (thisgrid2, _selectedItem) {
          if(thisgrid2.dgSelected().length == thisgrid2.dgGetRows().length) {
              thisobj.parent().find('.grid2 .selectAll'+thisindex+'').prop('checked', true);
          } else {
              thisobj.parent().find('.grid2 .selectAll'+thisindex+'').prop('checked', false);
          }
              
      });

      thisgrid.dgAttachHandler('dataLoaded', function (thisgrid3, _selectedItem) {
          if(thisgrid3.dgSelected().length == thisgrid3.dgGetRows().length) {
              thisobj.parent().find('.grid2 .selectAll'+thisindex+'').prop('checked', true);
          } else {
              thisobj.parent().find('.grid2 .selectAll'+thisindex+'').prop('checked', false);
          }
          
      });
  }

  //
  //HELPER FUNCTIONS
  //
  //Encode HTML String
function _encode(str) {
  return str.toString().replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}
//Decode HTML String
function _decode(val) {
  var x = document.createElement('textarea'); 
  x.innerHTML = val;
  return x.value;
}


  $.fn.updateGrid = function() {
  var config = this.dgSettings("Config");
      var gridSettings = this.dg();
      var ctrl = this;
      var urlParams = {
          action: "updateGrid",
          controlID: this.dg().id,
      }
      this.getProfileConfig(urlParams);

      ctrl.dgPost(urlParams,
          function (result) {
              result = result.split("#");
              var sorting = result.splice(0, 1);

              ctrl.html(result.join("#"));
              config.Sorting = JSON.parse(sorting);
              ctrl.dg("init", gridSettings);
              ctrl.dgInitGrid(config);
      //Initialize Grid2
              init();
              if($('.records2').length) rppInit();
          }, $.dg.error, true, null);
};

/*
** RECORDS PER PAGE - Provides the functionality to change the # of records shown per page
*/
  if ($('.records2').length) {
      OperationContext.get($('.records2').closest('div.SubOperation[class*="Screen_"]').attr('class').split(' ').filter(function( cn ) {
          return cn.indexOf('Screen_') === 0;
      })[0]).view.onLoaded(rppInit);
  }

  //Global Variables
  var numRecords;

  function rppInit() {
      //Set Variables
      numRecords = [25,50,75,100];
      console.log("Initiated");
  $('.records2').each(function(index,_value){
    var grid = $(this).dgGetGrid();
    createRecordsDiv(grid, index);
    $('.records2').dgAttachHandler('dataLoaded', createRecordsDiv);        
    
  });
  }

  function createRecordsDiv(grid, thisIndex){
      console.log('Creating RecordsPerPage div');
      
      if(grid.parent().find('.recordsPerPage').length == 0){
          var html = '<div class="recordsPerPage"></div>'
          $('.Bottom > .Right', grid).prepend(html);
      recordsPerPage(grid, thisIndex);
      }
      
  }


 function recordsPerPage(grid, _thisIndex) {
      $.each($('.records2'), function(_i, _item) {
          console.log("recordsPerPage Function");
          
          var html = '<span>Records per page</span><select class="selectRecordsPerPage"><option value="" selected disabled hidden>' + grid.dgSettings('Config').Top + '</option>';

          $.each(numRecords, function(_j, thisItem) {
              console.log("Number of Records Options");
              var target = /*grid.data('recordsperpage') || */grid.dgSettings('Config').Top; //Top = current number of records per page
              var selected = (target == thisItem) ? 'selected':'';
              html += '<option value="' + thisItem + '"' + selected + '>' + thisItem + '</option>';
          });
          html += '</select>';

          $('.Bottom > .Right > .recordsPerPage', grid).html(html);
      });

      //Attach Handler Function
      //grid.dgAttachHandler('dataLoaded' , setEvents);
      setRPPEvents(grid);
  }
  //Set Events
  function setRPPEvents(grid) {
      console.log("when is this called?");
      
          
          

          
              
              
              
          
          

          
              
      
      //Updates grid with selected value for # of records to show per page
      grid.on('change', '.selectRecordsPerPage', function () {
          console.log('Rows has been changed');
    
          var grid1 = $(this).parents('.records2');
          grid1.data('recordsperpage', $(this).val());
          grid1.dgSettings('Config').Top = Number($(this).val());
          grid1.dgGetData(-2);
      });
  
      grid.dgAttachHandler('dataLoaded', function() {
    if(grid.find('.recordsPerPage').length>1)
    {
      grid.find('.recordsPerPage').hide();
      grid.find('.recordsPerPage:first').show();
    }
  });


  }
});//END RECORDS PER PAGE

/*
** GO TO PAGE - Provides goto page functionality to grid
*/
$(function() {
  if ($('.go2').length) {
      OperationContext.get($('.go2').closest('div.SubOperation[class*="Screen_"]').attr('class').split(' ').filter(function( cn ) {
          return cn.indexOf('Screen_') === 0;
      })[0]).view.onLoaded(init);
  }

  //Global Variables
  var grid;

  function init() {
      //Set Variables
      grid = $('.go2');

      goToPage();
  }
 function goToPage() {
      //@TODO: REMOVE INLINE STYLING
      //Replace current grid page # with input field showing the current page #
      $('.pgCurrent').html('<input type="text" class="field field-text field-goto" value="' + grid.dgPageIndex() + '">');
      setEvents();
      //Attach Handler Function
      grid.dgAttachHandler('dataLoaded' , setEvents);
  }
  //Navigate to Selected Page
  function navigateToPage(grid2, page) {
      //If invalid page
      if (page > grid2.dgTotalPages() || page < 0) return;

      //Navigate to page
      grid2.dgSettings("Runtime").Index = (page - 1) * grid2.dgSettings("Config").Top;
      grid2.dgGetData(0);
  }
  //Set Events
  function setEvents() {
      //Set input field on page change
      $('.pgCurrent').html('<input type="text" class="field field-text field-goto" value="' + grid.dgPageIndex() + '">');
      //Limits textbox to numbers only
      $(document).on('keydown', '.field-goto', function (e) {
          if (e.shiftKey || !((e.keyCode > 95 && e.keyCode < 106) || (e.which > 95 && e.which < 106)
              || (e.keyCode > 47 && e.keyCode < 58) || (e.which > 47 && e.which < 58)
              || e.keyCode == 8 || e.which == 18
              || e.keyCode == 13 || e.which == 13)) return false;

          if (e.which == 13 || e.keyCode == 13) {
              e.preventDefault();
              e.stopImmediatePropagation();

              navigateToPage(
                  $(this).dgGetGrid(), //Grid
                  $(this).val() //Value entered into input field
              );
          }
      });
  }
});//END GO TO PAGE

/*
** DROPDOWN2 - Standard dropdown/select field
*/
(function($) {
var dropdown2_counter = 1;
  // Dropdown2
  $.dropdown2 = function(element, options) {
      // plugin's default options
      // this is private property and is  accessible only from inside the plugin
      var defaults = {
          width: "100%",
          class: ''
      }

      // to avoid confusions, use "plugin" to reference the current instance of the object
      var plugin = this;

      // this will hold the merged default, and user-provided options
      // plugin's properties will be available through this object like:
      // plugin.settings.propertyName from inside the plugin or
      // element.data('pluginName').settings.propertyName from outside the plugin, where "element" is the
      // element the plugin is attached to;
      plugin.settings = {}

      var $element = $(element), // reference to the jQuery version of DOM element the plugin is attached to
    uid = 'dropdown2-' + dropdown2_counter++,
    dropdown,
          dropdownList,
    ddClassList = $element.attr("Class"),
    ddClass = ddClassList.replace(" ", "-"),
    dropdownListUniqueClass = ddClass + '-dropdownList',
    dropdownSelectedUniqueClass = ddClass + '-dropdownSelected';

      // the "constructor" method that gets called when the object is created
      plugin.init = function() {

          // the plugin's final properties are the merged default and user-provided options (if any)
          plugin.settings = $.extend({}, defaults, options);

          //construct the new dropdown

          //Remove Select
          $element.hide();

          // Build & Set Variables
          options = get_options(); //Build & set options from select
          dropdown = buildDropdown(); //Build & set dropdown
          dropdownList = buildDropdownList(); //Build & set dropdown list

          //Add Dropdown to HTML
          $element.after(dropdown); //After Select
    $('body').append(dropdownList); //After dropdown

          //Set Events
          events();
      }

      // public methods
      // these methods can be called like:
      // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
      // element.data('pluginName').publicMethod(arg1, arg2, ... argn) from outside the plugin, where "element"
      // is the element the plugin is attached to;
      plugin.refreshOptions = function() {
          options = get_options(); //Build & set options from select
          dropdownList = buildDropdownList(); //Build & set dropdown list
          dropdown.next().remove();
          dropdown.after(dropdownList);
      }

      // private methods
      // these methods can be called only from inside the plugin like:
      // methodName(arg1, arg2, ... argn)
      var get_options = function() {
          var options2 = [];
          
          $element.children('option').each(function() {
              if ($element.hasClass('status-control')) {
                  options2.push(
                      $('<li>', {
                          text: this.value,
                          "data-value": this.value,
                          "aria-disabled": $(this).is('[disabled=disabled]') || $(this).prop('disabled'),
                          "aria-selected": $(this).is(':selected'),
                          class: (this.value == $element.val()) ? uid + ' dropdown-list-option--selected' : uid,
                          html: '<span class="dropdown-circle ' + this.className + '"></span><span class="text">' + this.value + '</span>'
                      })
                  );
              } else {
                  options2.push(
                      $('<li>', {
                          text: (this.text == '--' || this.text == '') ? '\xa0':this.text, //'\xa0' == &nbsp; == non breaking space
                          "data-value": this.value,
                          "aria-disabled": $(this).is('[disabled=disabled]') || $(this).prop('disabled'),
                          "aria-selected": $(this).is(':selected'),
                          class: (this.value == $element.val()) ? uid + ' dropdown-list-option--selected' : uid
                      })
                  );
              }
          });

          return options2;
      }

      var buildDropdown = function() {
          var selected = $element.children(':selected'),
              text = (selected.text() == '--') ? '\xa0':selected.text(),
              dropdown2 = $('<div>', {
              class: ($element.hasClass('status-control')) ? 'status-control dropdown-container ' + uid  + ' ' + plugin.settings.class: 'dropdown-container ' + uid + ' ' + plugin.settings.class,
              style: 'width: ' + plugin.settings.width,
              html: $('<div>', {
                  class: 'dropdown--selected ' + dropdownSelectedUniqueClass,
                  html: ($element.hasClass('status-control')) ? '<span class="dropdown-circle ' + selected.attr('class') + '"></span><span class="text">' + selected.text() + '</span>':'<span class="text">' + text + '</span>' //'\xa0' == &nbsp; == non breaking space
              })
          });
          return dropdown2;
      }

      var buildDropdownList = function() {
          var ddList = $('<div>', {
              class: 'dropdown-list-container ' + dropdownListUniqueClass,
              html: $('<ul>', {
                  class: 'dropdown-list'
              })
          });
    $.each(options, function(_key, option) {
              ddList.children('ul').append(option);
          });
    ddList.css('visibility', 'hidden');
    
    return ddList;
      }

      var openDropdownList = function() {
          dropdown.addClass('dropdown-container--open');

          dropdownList
    .position({
              "my": "left top",
              "at": "left bottom",
      "of": dropdown,
      "collision": "none"
          });
    dropdownList.css('visibility', 'visible');
    dropdownList.css('width', dropdown.outerWidth());
    
      }

      var closeDropdownList = function() {
          dropdownList.css('visibility', 'hidden');
          dropdown.removeClass('dropdown-container--open');
      }

      var events = function() {
          
          
          
              
              
                 
                  
                  
                 
              
          
          //ON DROPDOWN CLICK CREATE DROPDOWN
          $(dropdown).on('click', function() {
              var open = dropdown.hasClass('dropdown-container--open');
              if (!open) {
                  openDropdownList();
              } else {
                  closeDropdownList();
              }
          });
    //ON ITEM CLICK
    $(document).on('click', 'li:not([aria-disabled="true"]).' + uid, function() {
              dropdown.find('.text').text($(this).text());
              dropdown.find('.dropdown-circle').removeClass().addClass($('.dropdown-circle', this).attr('class'));
              dropdownList.find('li[aria-selected="true"]').attr('aria-selected', false);
      
              $(this)
              .addClass('dropdown-list-option--selected')
              .attr('aria-selected', true);
        
              $element.val($(this).data('value')).change();
              
      closeDropdownList();
    });
          
          //ON MOUSEOVER
          $(document).on('mouseover', 'li:not([aria-disabled="true"]).' + uid, function() {
              //Remove active class from current List Item
              dropdownList.find('li.dropdown-list-option--selected').removeClass('dropdown-list-option--selected');
          });

      //CLOSE ON CLICK OUT OF DROPDOWN
          $(document).on('mousedown touchstart', function(e) {
              if (!dropdown.hasClass('dropdown-container--open')) return;

              // if the target of the click isn't the container nor a descendant of the container
              if (!$(dropdownList).is(e.target)
              && $(dropdownList).has(e.target).length === 0
              && !$(dropdown).is(e.target)
              && $(dropdown).has(e.target).length === 0) {
                  closeDropdownList();
              }
          });
      }

      // fire up the plugin!
      // call the "constructor" method
      plugin.init();

  }

  // add the plugin to the jQuery.fn object
  $.fn.dropdown2 = function(options) {

      // iterate through the DOM elements we are attaching the plugin to
      return this.each(function() {

          // if plugin has not already been attached to the element
          if (undefined == $(this).data('dropdown2')) {

              // create a new instance of the plugin
              // pass the DOM element and the user-provided options as arguments
              var plugin = new $.dropdown2(this, options);

              // in the jQuery version of the element
              // store a reference to the plugin object
              // you can later access the plugin and its methods and properties like
              // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
              // element.data('pluginName').settings.propertyName
              $(this).data('dropdown2', plugin);

          }

      });

  }

})(jQuery);


// AJAX call for performance monitoring end operation
// Pairs with COM_PerformanceCheckStart to calculate duration from start to this operation
function call_COM_PerformanceCheckEnd(context, TransactionGrouping, TransactionName, OperationID, PerformanceCheckStartTimes, OtherNameValuePairs, StepSequenceNo, successCallback, errorCallback){
  var inputs = {};
inputs.TransactionGrouping = TransactionGrouping;
inputs.TransactionName = TransactionName;
inputs.OperationID = OperationID;
inputs.PerformanceCheckStartTimes = PerformanceCheckStartTimes;
inputs.OtherNameValuePairs = OtherNameValuePairs;
inputs.StepSequenceNo = StepSequenceNo;

  context.callOperation('COM_PerformanceCheckEnd', inputs,
      function(outputs){ 
    //Operation outputs: PerformanceCheckStartTimes
          if (typeof successCallback == "function")
              successCallback(outputs);
          else {
              context.outputs.PerformanceCheckStartTimes = PerformanceCheckStartTimes;
          }
      },
      function(message) {
          if (typeof errorCallback == "function")
              errorCallback(message);
          else {
      console.log(message);
    }
      });
}


/*** MULTI SELECT DROPDOWN***/
jQuery.fn.extend({

   CreateMultiSelectDropDown: function (options) {  
 
     //to store the default text and to pass it on next function
  
          var dynamicclassname = $(this)[0].className;
   
   sessionStorage.setItem("default"+dynamicclassname,options.defaultText); 
   
   var defaults = {  height:'222px',useValue : false, selectAllButton : false, createUniqueIds : false};
   
    var defaultMultiCheckBoxOption  = $.extend({}, defaults, options);
   this.hide();
  //if default text options is not passed then show default 'Select'
  if(typeof defaultMultiCheckBoxOption.defaultText!='undefined')
  {
    defaultMultiCheckBoxOption.defaultText=options.defaultText;
  }
  else{
  defaultMultiCheckBoxOption.defaultText='Select';
  }
  if(defaultMultiCheckBoxOption.selectAllButton){
    defaultMultiCheckBoxOption.height = '280px';
  }
if(defaultMultiCheckBoxOption.createUniqueIds)
{
   defaultMultiCheckBoxOption.createUniqueIds=options.createUniqueIds;
}
else{
  defaultMultiCheckBoxOption.createUniqueIds=false;
}

if(typeof defaultMultiCheckBoxOption.OnClickOnSelectAll=='undefined')
  {
    defaultMultiCheckBoxOption.OnClickOnSelectAll=true;
  }
console.log("defaultMultiCheckBoxOption.OnClickOnSelectAll " + defaultMultiCheckBoxOption.OnClickOnSelectAll);
  sessionStorage.setItem("createUniqueIds"+dynamicclassname,defaultMultiCheckBoxOption.createUniqueIds);
  sessionStorage.setItem("MSDD_Value_"+dynamicclassname,defaultMultiCheckBoxOption.useValue); 
  this.attr("multiple", "multiple");
         var divSel = $("<div class='multi-select-dropdown-selectedvalues multi-select-dropdown-selectedvalues-"+dynamicclassname+"' id = 'click_"+dynamicclassname+"' onclick='click_multiselectdropdown((this).id)'><div id='selected-values-multiselectdropdown-"+dynamicclassname+"' class='selectedText-multiselectdropdown selectedText-multiselectdropdown-"+dynamicclassname+"'>" + defaultMultiCheckBoxOption.defaultText + "</div></div>").insertBefore(this);
         divSel.css({ "width": defaultMultiCheckBoxOption.width });
         var detail = $("<div id='multi-select-dropdown-selectedvalues-"+dynamicclassname+"' class='multi-select-dropdown-list-div multi-select-dropdown-list-div-"+dynamicclassname+"'><div class='search-field-multiselectdropdown search-field-multiselectdropdown-"+dynamicclassname+"'><input type= 'text' id='search-field-multiselectdropdown-input-"+dynamicclassname+"' class='search-field-multiselectdropdown-input search-field-multiselectdropdown-input-"+dynamicclassname+"'style = 'width:"+(parseInt($('.multi-select-dropdown-selectedvalues').css("width"))-50)+"px' placeholder = 'Search' onkeyup = 'multiSelectDropdownListSearch($(this))'/><div class='search-field-multiselectdropdown-icon search-field-multiselectdropdown-icon-"+dynamicclassname+"'><i class='comicon search-icon-multiselectdropdown'>search</i></div></div><div class='multi-select-dropdown-values-list multi-select-dropdown-values-list-"+dynamicclassname+"'></div></div>").insertAfter(divSel);
   $("#search-field-multiselectdropdown-input-multi-select-dropdown").attr("placeholder", defaultMultiCheckBoxOption.placeholder).val("").focus().blur();
         detail.css({ "width": parseInt(defaultMultiCheckBoxOption.width), "max-height": defaultMultiCheckBoxOption.height });
         var multiCheckBoxDetailBody = detail.find(".multi-select-dropdown-values-list-"+dynamicclassname);
      if(defaultMultiCheckBoxOption.createUniqueIds)
      {
         this.find("option").each(function () {
                       multiCheckBoxDetailBody.append("<div class='multi-select-dropdown-list-value multi-select-dropdown-list-value-"+dynamicclassname+"'><div class = 'checkbox'><input type='checkbox'id='input-checkbox-"+dynamicclassname+"_"+$(this).text()+"' class='checkbox-multiselect-dropdown-"+dynamicclassname+"' value='" + $(this).val() + "' onclick = 'multiSelectDropdownSelectedValue((this),"+defaultMultiCheckBoxOption.useValue+");' /><label for='input-checkbox-"+dynamicclassname+"_"+$(this).text()+"'>" + $(this).text() + "</label></div><div></div></div>");
         });
      }
      else 
      {
          this.find("option").each(function () {
                      multiCheckBoxDetailBody.append("<div class='multi-select-dropdown-list-value multi-select-dropdown-list-value-"+dynamicclassname+"'><div class = 'checkbox'><input type='checkbox'id='input-checkbox_"+$(this).text()+"' class='checkbox-multiselect-dropdown-"+dynamicclassname+"' value='" + $(this).val() + "' onclick = 'multiSelectDropdownSelectedValue((this),"+defaultMultiCheckBoxOption.useValue+");' /><label for='input-checkbox_"+$(this).text()+"'>" + $(this).text() + "</label></div><div></div></div>");
          });
      }
         multiCheckBoxDetailBody.css("max-height", (parseInt($(".multi-select-dropdown-list-div-"+dynamicclassname).css("max-height")) - 72) + "px"); 
         
     //select All Deselect all button enhancement
     if(defaultMultiCheckBoxOption.selectAllButton)
     {
         var selectAllDiv = detail.find(".multi-select-dropdown-values-list-"+dynamicclassname);
         selectAllDiv.before("<div style='display:flex'><button type='button' style='width:48%; margin:0px 4px; height: fit-content;' class='btn btn-secondary' data-dynamicClass= '"+dynamicclassname+"' onclick='bngMultiSelectDDSelectAll((this),"+defaultMultiCheckBoxOption.OnClickOnSelectAll+")'>Select All</button><button type='button' style='width:48%; margin:0px 4px;height: fit-content;' class='btn btn-secondary' data-dynamicClass= '"+dynamicclassname+"' onclick='bngMultiSelectDDUnSelectAll((this),"+defaultMultiCheckBoxOption.OnClickOnSelectAll+")'>Deselect All</button></div>");
     }

  //function to close the drop down list when clicking outside the list
  $(document).click(function(e){
    var DropDownDiv = $('#click_'+dynamicclassname);
    var DropDownDivList=$('#multi-select-dropdown-selectedvalues-'+dynamicclassname);
    // If the target of the click isn't drop down list elements
    if((!DropDownDivList.is(e.target) && DropDownDivList.has(e.target).length === 0 ) ){
      //
        //if the target of the click isn't drop down itself
        if(!DropDownDiv.is(e.target) && DropDownDiv.has(e.target).length === 0){
        
        //hide the drop down list elements
        DropDownDivList.hide();
        //Set thedropdown to initial step after clicking on the outside
        $(DropDownDiv).removeClass("multi-select-dropdown-selectedvalues--open");
        //Clearing the search text when clicked outside
        $('#search-field-multiselectdropdown-input-'+dynamicclassname).val(''); 
        //To show the data again after clicking outside
        $('.multi-select-dropdown-list-value').css("display","block"); 
          

        
      }
    }
  }); 
   },
 
 
});


function click_multiselectdropdown(thisid){
   var dynamicclassname=thisid.slice(6);
   var detail = $($(".multi-select-dropdown-list-div-"+dynamicclassname));
 var inputsearch = $($(".search-field-multiselectdropdown-input-"+dynamicclassname));
 inputsearch.css({ "width" : (parseInt($('.multi-select-dropdown-selectedvalues-'+dynamicclassname).css("width"))-50)+"px"});
 detail.css({ "width" : (parseInt($('.multi-select-dropdown-selectedvalues-'+dynamicclassname).css("width")))+"px"});
   if($(".multi-select-dropdown-selectedvalues-"+dynamicclassname).hasClass('multi-select-dropdown-selectedvalues--open')){
         detail.hide();
         $(".multi-select-dropdown-selectedvalues-"+dynamicclassname).removeClass("multi-select-dropdown-selectedvalues--open");             
   }
   else
 {
         detail.show();
         $(".multi-select-dropdown-selectedvalues-"+dynamicclassname).addClass("multi-select-dropdown-selectedvalues--open");
   //Clearing the search text when  dropdown is clicked
  $('#search-field-multiselectdropdown-input-'+dynamicclassname).val(''); 
  //To show the data again after clicking outside
  $('.multi-select-dropdown-list-value').css("display","block"); 
   }
 
}
function multiSelectDropdownListSearch(_this){
   var dynamicclassname = $(_this).attr('id').slice(39);
   var items = $('.checkbox-multiselect-dropdown-'+dynamicclassname);
var val = $(_this).val().toLowerCase();
   var listval;
items.each(function(_i, item) {
         listval = $(item).attr('id').slice(15).toLowerCase();
       if (listval.indexOf(val) == -1)       
          $(item).closest('.multi-select-dropdown-list-value').css("display","none");
       else
          $($(item).closest('.multi-select-dropdown-list-value')).css("display","block");      
});
}

function multiSelectDropdownSelectedValue(value,useValue){
var dynamicClassLengthDef = 15;
var dynamicclassname = ($(value).attr('class')).slice(30);
var dynamicClassLength = dynamicclassname.length+16;
var dcLength;
  var def=sessionStorage.getItem("default"+dynamicclassname);
  var createUniqueIds = sessionStorage.getItem("createUniqueIds"+dynamicclassname);
  if(sessionStorage.getItem("createUniqueIds"+dynamicclassname) == 'true'){
      dcLength = dynamicClassLength;
  }
else {
  dcLength = dynamicClassLengthDef;
}
   var checkselectedvalue='';
   var checkbox = document.getElementsByClassName('checkbox-multiselect-dropdown-'+dynamicclassname);
   $(checkbox).each(function(_i,itemcheckbox){
         if(itemcheckbox.checked)
         {
              if(useValue)
              {
                      checkselectedvalue += $(itemcheckbox).attr('value')+', ';
              }
              else
              {
                      checkselectedvalue += $(itemcheckbox).attr('id').slice(dcLength) +', ';
              }
         }
      });
   if(checkselectedvalue != '')
         document.getElementById('selected-values-multiselectdropdown-'+dynamicclassname).innerHTML = checkselectedvalue.substring(0,checkselectedvalue.length-2);//remove , and space
   else
 {	
     //if default text options is not passed then show 'Select'
     if(def=='undefined')
  {
         document.getElementById('selected-values-multiselectdropdown-'+dynamicclassname).innerHTML = 'Select';
  }
  else 
  {
    document.getElementById('selected-values-multiselectdropdown-'+dynamicclassname).innerHTML = def;
  }
}


}

function bngMultiSelectDropDown_setValues(selectorClass, selectedValues){
$.each(selectedValues, function(index, value){
  var inputSelector = '.multi-select-dropdown-list-value-'+selectorClass+' input[value="'+ value +'"]';
  $(inputSelector).click();
});
}


function bngMultiSelectDDSelectAll(selectorEle,onclickOnSelectAll){
if(onclickOnSelectAll == true)
{
  var dynamicClass = selectorEle.getAttribute("data-dynamicClass");
  var checkbox = document.getElementsByClassName('checkbox-multiselect-dropdown-'+dynamicClass);
  $(checkbox).each(function(_i,itemcheckbox){
    if(!itemcheckbox.checked){
        itemcheckbox.click();
    }
  });
}
else
{
  
  var dynamicClassLengthDef = 15;
  var dynamicClass = selectorEle.getAttribute("data-dynamicClass");
  var checkbox = document.getElementsByClassName('checkbox-multiselect-dropdown-'+dynamicClass);
  var checkselectedvalue='';
  var def=sessionStorage.getItem("default"+dynamicClass);
  var useValueVar=sessionStorage.getItem("MSDD_Value_"+dynamicClass);
  var dynamicClassLength = dynamicClass.length+16;
  if(sessionStorage.getItem("createUniqueIds"+dynamicClass) == 'true'){
    dcLength = dynamicClassLength;
  }
  else {
    dcLength = dynamicClassLengthDef;
  }
  $(checkbox).each(function(_i,itemcheckbox){
      $(itemcheckbox).prop('checked',true);
              if(useValueVar==true || useValueVar=='True' || useValueVar == 'true')
                {
                    checkselectedvalue += $(itemcheckbox).attr('value')+', ';
                }
              else
                {
                    checkselectedvalue += $(itemcheckbox).attr('id').slice(dcLength) +', ';
                }
                
  });

  if(checkselectedvalue != '')
          document.getElementById('selected-values-multiselectdropdown-'+dynamicClass).innerHTML = checkselectedvalue.substring(0,checkselectedvalue.length-2);//remove , and space
    else
  {	
      //if default text options is not passed then show 'Select'
    if(def=='undefined')
    {
          document.getElementById('selected-values-multiselectdropdown-'+dynamicClass).innerHTML = 'Select';
    }
    else 
    {
      document.getElementById('selected-values-multiselectdropdown-'+dynamicClass).innerHTML = def;
    }
  }
}

}

function bngMultiSelectDDUnSelectAll(selectorEle,onclickOnSelectAll){
if(onclickOnSelectAll == true)
{
  var dynamicClass = selectorEle.getAttribute("data-dynamicClass");
  var checkbox = document.getElementsByClassName('checkbox-multiselect-dropdown-'+dynamicClass);
  $(checkbox).each(function(_i,itemcheckbox){
    if(itemcheckbox.checked){
        itemcheckbox.click();
    }
  });
}
else
{
  var dynamicClass = selectorEle.getAttribute("data-dynamicClass");
  var checkbox = document.getElementsByClassName('checkbox-multiselect-dropdown-'+dynamicClass);
  var def=sessionStorage.getItem("default"+dynamicClass);
  $(checkbox).each(function(_i,itemcheckbox){
      $(itemcheckbox).prop('checked',false);
  });

  if(def=='undefined')
    {
          document.getElementById('selected-values-multiselectdropdown-'+dynamicClass).innerHTML = 'Select';
    }
    else 
    {
      document.getElementById('selected-values-multiselectdropdown-'+dynamicClass).innerHTML = def;
    }
  }
}
/*** MULTI SELECT DROPDOWN***/


/*** Single Select Dropdown With Search ***/
var idselector;
var id;
(function($){
  $.fn.singleSearchDropdown = function(option){
    //Initialize defaults 
    var defaults = {
    },
    setting = $.extend({}, defaults, option);
    this.each(function(){
      var $this = $(this),
        html = '',
        html_op = '',
        counter = $('.ssdscontainer').length +1;
        id = 'ssdsid'+counter;
        idselector = '#'+id;
        var dynamicclassSingle = $(this)[0].classList[$(this)[0].classList.length-1];
        
      //Inherit width of the original dropdown.
      setting.width = parseInt($this.width())+2;
      
      //Create li list from the available option list
      $this.find('option').each(function (_e) {
        var $this_a = $(this),
          val = $this_a.val(),
          text = $this_a.html();
        if(val == null){
          val = text;
        }
        html_op += '<li data-title="'+text+'" value="'+val+'">'+text+'</li>';
      });
      
      var selectDDValue = option;
      var selectDDText = $this.children('option').filter(function(){return $(this).val()==selectDDValue}).html();
      
      //hide the original dropdown
      $this.hide();

      var searchType = $this.attr("data-search-type");
      //create html code for the new drop down with search and append the li list
      if(selectDDValue){
        html = 
        '<div class="ssdscontainer ' + dynamicclassSingle + '" id="'+id+'" style="width:'+parseInt(setting.width)+'px;">'+
          '<div class="ssdsbutton" style="width:'+parseInt(setting.width)+'px;">'+
            '<div class="ssdsbuttontext ssdssearchghost" id="select_style_text" style="width:'+(parseInt(setting.width))+'px">'+ selectDDText  +'</div>'+
          '</div>';
      }
      else{
      html = 
        '<div class="ssdscontainer ' + dynamicclassSingle + '" id="'+id+'" style="width:'+parseInt(setting.width)+'px;">'+
          '<div class="ssdsbutton" style="width:'+parseInt(setting.width)+'px;">'+
            '<div class="ssdsbuttontext ssdssearchghost" id="select_style_text" style="width:'+(parseInt(setting.width))+'px">Select</div>'+
          '</div>';
      }

      html += '<div id="select_style_ul" sid="'+id+'" class="ssdsdd" style="width:'+(parseInt(setting.width))+'px;" data-search-type = "'+ searchType +'">'+
          '<div class="ssdssearchwrapper"><div class="ssdssearch" id="ss_search">'+
          '<input type="text" class="ssdssearchbox" style="width:'+(parseInt(setting.width) - 50)+'px;" placeholder="Search"><div class="ssdsiconwrapper"><i class="comicon ssdsicon">search</i></div></div> '+
        '</div>'+
        '<div class="ssdsulbox"><ul class="ssdslist">'+html_op+'</ul></div></div>';
      html += '</div>';
      
      //append the new dropdown after the original one.
      $(html).insertAfter($this);
      
    });

    //function to perform the search and show relevant li
    $("body").delegate("div#ss_search input", "keyup", function(_e) {
      var val = $(this).val(), flag=false;
      $('#nosearch').remove();
      var searchType = $(this).parent().parent().parent().attr("data-search-type");
      if(searchType.toUpperCase().localeCompare("LINEAR") == 0 ) // To match records only if they start with the searched value
      {
        $(this).parent().parent().parent().find('li').each(function(_index, el) {
          if($(el).text().toUpperCase().substr(0, val.length) == val.toUpperCase()){
            $(el).show();
            flag=true;
          }
          else{
            $(el).hide();
          }
        });
      }
      else //To match records if they contain the searched value
      {
        $(this).parent().parent().parent().find('li').each(function(_index, el) { 
          if($(el).text().toUpperCase().indexOf(val.toUpperCase()) > -1){
            $(el).show();
            flag=true;
          }
          else{
            $(el).hide();
          }
        });
      }
      if (!flag) {$(this).parent().parent().append('<div class="ssdsnosearch" id="nosearch">Nothing Found</div>')}
    });
    
    //function to open/close the dropdown on click
    $("body").delegate( idselector + " .ssdsbutton", "click", function(_e) {
      if($('.ssdsopen').length > 0 && $(this).parent().hasClass('ssdsopen') == false){
          var ul = $('.ssdsopen').find('div#select_style_ul');
          ul.hide();
          $('.ssdsopen').removeClass('ssdsopen');
      }
      ul = $(this).parent().find('div#select_style_ul');
      if($(this).parent().hasClass('ssdsopen') == true)
      {
        ul.hide();
        $(this).parent().removeClass('ssdsopen');
      }
      else{
        $(this).parent().addClass('ssdsopen');
        ul.show();
        ul.find('.ssdssearchbox').focus();
      }
    });
    
    //function to select the clicked li element and close the dropdown
    $("body").delegate(idselector + " div#select_style_ul li", "click", function(_e) {
      var txt = $(this).data('title'),
        vl = $(this).attr('value');
        $(this).closest('div#select_style_ul').hide();
        $('.ssdscontainer').removeClass('ssdsopen');
        $(this).parents('div#select_style_ul').parent('div').find('div#select_style_text').html(txt).removeClass('ssdssearchghost');
        $(this).closest('.ssdscontainer').prev().children('option').filter(function(){return $(this).val()==vl}).prop('selected',true).change();
        $(this).parent().find('.ssdsselectedfield').removeClass('ssdsselectedfield');
        $(this).addClass('ssdsselectedfield');
    });
    
    //function to close the dropdown if clicked anywhere outside the dropdown container.
    $(document).delegate("body", "click", function(e) {
      var clickedOn=$(e.target);
      if(!clickedOn.parents().is('.ssdscontainer')){
        $('.ssdscontainer').removeClass('ssdsopen');	
        $('.ssdsdd').hide();
        $('div#ss_search').children('input').val('').trigger('keyup');
      }
    });
  }
})(jQuery);
/*** Single Select Dropdown With Search ***/

/*** SNACKBAR2 ***/
function showSnackbar2(Message,obj) {
var existSnackbar = document.getElementById('snackbar2');
if(existSnackbar){ //close any snackbar that is open currently
  existSnackbar.remove();
}
if(Message != "" && typeof Message != "undefined") {
  var snackbar = document.createElement('div');
  snackbar.id = 'snackbar2';
  document.body.appendChild(snackbar);
  var snackbarDuration = 3000;  //set default display duration
  if(arguments.length == 2) {  //check if second parameter is passed
    if(obj.actionButtonPresent == true){ //display button if set to true
      snackbar.innerHTML = Message + "<span class='snackbar2-button'>" +obj.actionButton + "</span>";
      var snackbarButton = document.querySelector('.snackbar2-button');
      snackbarButton.addEventListener("click",obj.actionFunction);
      snackbarDuration = 5000;
    }
    else{ 
      snackbar.innerHTML = Message;
    }
    if(obj.setDuration){ //set custom duration if setDuration is passed
      snackbarDuration = obj.setDuration;
    }
  }
  else if (arguments.length == 1) {
    snackbar.innerHTML = Message;
  }
  snackbar.className = "show-snackbar2";
  snackbar.addEventListener("click",function(){ snackbar.className = snackbar.className.replace("show-snackbar2", ""); });
  setTimeout(function(){ snackbar.className = snackbar.className.replace("show-snackbar2", ""); }, snackbarDuration);
}
}
/*** SNACKBAR2 ***/

/*** CHIP2 ***/
function addChip2(appendAfter,value){
//check for valid number of arguments
if(arguments.length == 2){
  var node = document.createElement("div"); 
  node.className = "chip2";
  node.innerHTML = value;
  //create child node for close icon
  var nodeicon = document.createElement("em");
  nodeicon.className = "comicon chip2close";
  nodeicon.innerHTML = "close";
  nodeicon.onclick = function(){this.parentElement.remove()};
  node.appendChild(nodeicon);
  var parent = document.getElementsByClassName(appendAfter)[0];
  //check if class name exists.
  if(parent !== undefined){
    parent.appendChild(node);
  }
}
}

function closeChip2(e){
var ele = e.target;
ele.parentElement.remove();
}
/*** CHIP2 ***/

/*** REPEAT DAY PICKER ***/
$('.repeatDayPickerIcon').click(function(){
if($(this).hasClass('selected')){
  $(this).removeClass('selected');
  var selectedDays = $(this).parent().data("selected-days");
  var curDay = $(this).data("day");
  if(selectedDays.length > 0){
    var selectedArray = selectedDays.split(",");
    
    var index = selectedArray.indexOf(curDay);
    if (index > -1){
      selectedArray.splice(index,1);
    }
    selectedDays = selectedArray.toString();
    $(this).parent().data("selected-days", selectedDays);
  }
  
}
else{
  $(this).addClass('selected');
  var selectedDays1 = $(this).parent().data("selected-days");
  var curDay1 = $(this).data("day");
  if(selectedDays1.length > 0)
    selectedDays1 = selectedDays1 + "," + curDay1;
  else
    selectedDays1 =  curDay1;

  $(this).parent().data("selected-days", selectedDays1);
}

});

function setDefaultForDayPicker(className, days){
var setClass = '.' + className;
var finalArray = [];
if(days.length>0)
{
  var selectedArray = days.split(",");
  for(var i=0; i < selectedArray.length; i++){
      if(selectedArray[i] == "Monday" || selectedArray[i] == "Tuesday" || selectedArray[i] == "Wednesday" || selectedArray[i] == "Thursday" || selectedArray[i] == "Friday" || selectedArray[i] == "Saturday" || selectedArray[i] == "Sunday" ||
        selectedArray[i] == "monday" || selectedArray[i] == "tuesday" || selectedArray[i] == "wednesday" || selectedArray[i] == "thursday" || selectedArray[i] == "friday" || selectedArray[i] == "saturday" || selectedArray[i] == "sunday"){
        finalArray.push(selectedArray[i]);
      }
  }
  var selectedDays = finalArray.toString();
  $(setClass).data("selected-days", selectedDays);
    for(var j=0; j < finalArray.length; j++){
      $(setClass + ' .repeatDayPickerIcon[data-day="'+finalArray[j]+'"]').addClass('selected');
    }
}
}
/*** REPEAT DAY PICKER ***/

/*** POP-UPS ***/

// When the user clicks on (x), close the modal
$('.popup2-close').click(function(){
$('.popup2-modal').css("display", "none");
});
// When the user clicks on cancel button, close the modal
$('.popup2-cancel').click(function(){
$('.popup2-modal').css("display", "none");
});

/*** POP-UPS ***/

/*** NOTIFICATION POP-UP ***/

// When the user clicks on (x), close the modal
$('.not-popup2-close').click(function(){
$('.not-popup2-modal').css("display", "none");
});
// When the user clicks on cancel button, close the modal
$('.not-popup2-cancel').click(function(){
$('.not-popup2-modal').css("display", "none");
});

/*** NOTIFICATION POP-UP ***/

/*** REQUIRED FIELD VALIDATION ***/
function requiredFieldValidation(targetField, errorMessage){
//Check if field is blank and error is not being displayed already
if(targetField.value == "" && !targetField.nextElementSibling.classList.contains("validation-error"))
{
  //Check for existing helper text and hide it if present
  if(targetField.nextElementSibling.classList.contains("helper") == true)
  {
    targetField.nextElementSibling.classList.add("_hide");
  }
  //create span element
  var newSpan = document.createElement("SPAN");
  newSpan.innerHTML =  errorMessage;
  newSpan.classList.add("helper","helper-text","validation-error");
  //create error icon element
  var newIcon = document.createElement("EM");
  newIcon.classList.add("comicon", "validation", "validation-error");
  newIcon.innerHTML = "error";
  //append icon and error text
  targetField.after(newSpan);
  targetField.after(newIcon);
}
//check if error is being displayed and text field has some value
else if(targetField.value != "" && targetField.nextElementSibling.classList.contains("validation-error")){
//remove error message and error icon
  while(targetField.nextElementSibling.classList.contains("validation-error"))
  {
    targetField.nextElementSibling.remove();
  }
  //show original helper text if any
  if(targetField.nextElementSibling.classList.contains("_hide"))
  {
    targetField.nextElementSibling.classList.remove("_hide")
  }
}
}
/*** REQUIRED FIELD VALIDATION ***/

/*** DISABLE BACK BUTTON ***/
/*
window.onload = function() {
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
console.log("hit back button");
if(!window.innerDocClick){
  console.log("hit back button2");
  window.history.pushState(null, "", window.location.href);
  alert("Browswer navigation is disabled because it does not work with the application");
}
}
};
document.onmouseover = function() {
  //User's mouse is inside the page.
  window.innerDocClick = true;
}
document.body.addEventListener('mouseout', function(e) {
  if (!e.relatedTarget && !e.toElement) {
  window.innerDocClick = false;
  }
});
*/
/*** DISABLE BACK BUTTON ***/

/*** SEARCH FIELDS ***/
function autocomplete(inp, arr, searchMode, empNo) //NOSONAR Reason:CognitiveComplexity
{
if(typeof empNo === 'undefined')
{
  empNo = "";
}
/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) 
  {
    var a, b, i, val = this.value,id = this.id;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "bng-autocomplete-list");
    a.setAttribute("class", "bng-autocomplete-items");
  var parentWidth = this.parentNode.offsetWidth + "px";
  a.style.width=parentWidth;
  var posTopParent = this.parentNode.offsetTop + this.parentNode.offsetHeight;
  a.style.top = posTopParent + "px";
    
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*String begins containing terms*/
  if(searchMode == "searchMode1")
  {
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) 
    {
      /*check if the item starts with the same letters as the text field value:*/
      var innerHtmlStr = "";
      var searchFoundFlag = 0;
      var splittedString = arr[i].split(" ");
      for(var j=0; j < splittedString.length; j++)
      {
        
        if (splittedString[j].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
        {
          if( j == 0)
          {
            innerHtmlStr = "<strong>" + splittedString[j].substr(0, val.length) + "</strong>";
            innerHtmlStr += splittedString[j].substr(val.length);
          }
          else{
            innerHtmlStr += " <strong>" + splittedString[j].substr(0, val.length) + "</strong>";
            innerHtmlStr += splittedString[j].substr(val.length);
          }
          searchFoundFlag = 1;
        }
        else{
          if( j == 0)
          {
            innerHtmlStr = splittedString[j];
          }
          else{
            innerHtmlStr += " ";
            innerHtmlStr += splittedString[j];
          }
          
        }
      }
      /*create a DIV element for each matching element:*/
      if(searchFoundFlag == 1){
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        //b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML = innerHtmlStr;
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*save the value in localstorage*/
          saveSearchData(id);
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
      
    }
  }
  /*Contains characters*/
  else if (searchMode == "searchMode2")
  {
    
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) 
    {
      /*check if the item starts with the same letters as the text field value:*/
      if ( arr[i].toUpperCase().includes(val.toUpperCase()) ) 
      {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        var subStrPos = arr[i].toUpperCase().indexOf(val.toUpperCase());
        b.innerHTML = "";
        b.innerHTML += arr[i].substr(0,subStrPos);
        b.innerHTML += "<strong>" + arr[i].substr(subStrPos, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(subStrPos+val.length, arr[i].length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*save the value in localstorage*/
          saveSearchData(id);
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }
  });

  inp.addEventListener("focusin", function (e) 
{
    var a,b,c,i,val = this.value,id = this.id;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
      currentFocus = -1;
  /*Get the recent search data from localStorage*/
  var retrievedData = localStorage.getItem(id+empNo+"SearchItem");
    var searchvalue = JSON.parse(retrievedData);
    if (searchvalue != null && searchvalue != "['']" && searchvalue.length!=0)
  {
      /*create a DIV element that will contain the items of recent search:*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "bng-autocomplete-list");
      a.setAttribute("class", "bng-autocomplete-items");
    /*create a SPAN element that will contain the access_time icon*/
    c = document.createElement("SPAN");
    c.classList.add("bng-acesss-time");
    c.innerHTML = "<em class='comicon'>access_time</em>";
    
    var parentWidth = this.parentNode.offsetWidth + "px";
    a.style.width=parentWidth;
    
    var posTopParent = this.parentNode.offsetTop + this.parentNode.offsetHeight;
    a.style.top = posTopParent + "px";
  
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      
   
    /*for each item in the LocalStorage array...*/
      for (i = 0; i < searchvalue.length; i++) 
    {
          /*create a DIV element for each element:*/
          b = document.createElement("DIV");
      /*prepend the access_time icon*/
          b.prepend(c);
          b.innerHTML += searchvalue[i];
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + searchvalue[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) 
      {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
        /*save the value in localstorage*/
        
            saveSearchData(id);
            /*close the list of autocompleted values, (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
      }
    }
});

/*execute a function presses a key on the keyboard:*/
 inp.addEventListener("keydown", function(e) 
{
    var x = document.getElementById(this.id + "bng-autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) 
  {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
    } 
  else if (e.keyCode == 38) //up
  { 
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
    } 
  else if (e.keyCode == 13) 
  {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
    e.stopImmediatePropagation();
        if (currentFocus > -1) 
    {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
    else
      saveSearchData(this.id);
    }
  });

function addActive(x) 
{
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("bng-autocomplete-active");
}
function removeActive(x) 
{
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) 
  {
        x[i].classList.remove("bng-autocomplete-active");
    }
}
function closeAllLists(elmnt) 
{
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
  if(typeof elmnt === 'undefined')
  {
      var x = document.getElementsByClassName("bng-autocomplete-items");
    
      for (var i = 0; i < x.length; i++) 
    {
          if (elmnt != x[i] && elmnt != inp) 
      {
            x[i].parentNode.removeChild(x[i]);
          }
      }
  }
  else
  {
    var x = document.getElementsByClassName("bng-autocomplete-items");
    var elmntid = elmnt.id+"bng-autocomplete-list";
      for (var i = 0; i < x.length; i++) 
    {
         if (elmntid != x[i].id && elmnt != inp) 
        {
            x[i].parentNode.removeChild(x[i]);
          }
      }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) 
{
    closeAllLists(e.target);
});

/* to Store the searched value in localStorage onclick of search icon*/
$('.bng-search-field-icon').click(function()
{
  id = this.previousElementSibling.id;
  if(inp.id == id)
    saveSearchData(id);
});

/*function to store searched items*/
function saveSearchData(id) 
{
  var searchArr = [];
  /*To check if LocalStorage have previous value*/
  var retrievedData = localStorage.getItem(id+empNo+"SearchItem");
  var searchValue = JSON.parse(retrievedData);
  

  if (searchValue === null) 
  {
      if (inp.value != "")
    {
      searchArr.push(inp.value);
    }
  } 
  else 
  {
      if (inp.value != "") 
    {
        searchArr.push(inp.value);
      }
      searchArr = searchArr.concat(searchValue).unique();
  }
  /*Check to store only 5 recent searches*/
  if (searchArr.length > 5) 
  {
      searchArr.pop();
  }
  /*Add serached value to LocalStorage*/
  localStorage.setItem(id+empNo+"SearchItem", JSON.stringify(searchArr));
}
/*Function to get unique elements of the array*/
Array.prototype.unique = function () {
var a = this.concat();
var delFlag = false;
for (var i = 0; i < a.length; ++i) {
  for (var j = i + 1; j < a.length; delFlag?delFlag=false:j++) {
    if (a[i] === a[j])
  { 
    a.splice(j, 1);
    delFlag = true;
  }
  }
}
return a;
};

}

/*** SEARCH FIELDS ***/

/*** NESTED LIST ***/
function NestedList(container,data, OnlyChildlessSelection,NestedListClass,SearchBoxElement,SearchMode) { //NOSONAR Reason:CognitiveComplexity
  /* NestedList function takes 6 arguments*/
SearchBoxElement.value="";
var button = document.querySelector(".nl-SelectButton");
  if (button.classList.contains("btn-primary")) {
      button.classList.add("btn-inactive-primary");
      button.classList.remove("btn-primary");
  }
container.style.height = "400px";
container.style.width= "400px";
container.style.overflow= "auto";

  if (container.hasChildNodes()) {
      container.innerHTML = '';
  }


  generate(data, container, 0);
//function to generate NestedList
  function generate(data, parent, haschild) {
      sortJson(data, 0);
      const ul = document.createElement("ul");
      if (haschild == 1)
          ul.setAttribute("class", "nl-nested");
      else
  {
          ul.setAttribute("class", "nl-ulpadding");
    ul.classList.add(NestedListClass);
  }
      data.forEach((el, index) => {
          const li = document.createElement("li");
          li.setAttribute("level", index);

          const div = document.createElement("div");
          div.setAttribute("class", "nl-hovering");
          const span = document.createElement("span");
          span.setAttribute("class", "nl-caret");
          const span2 = document.createElement("span");
          span2.setAttribute("class", "nl-space");

          span2.innerHTML = el.label;
          div.appendChild(span);
          div.appendChild(span2);
          li.appendChild(div);

          if (el.children) {
              if (OnlyChildlessSelection)
                  div.setAttribute("onclick", 'enableselect(this,"' + true + '","'+NestedListClass+'")');
              else
                  div.setAttribute("onclick", 'enableselect(this,"' + false + '","'+NestedListClass+ '")');
              generate(el.children, li, 1);
          } else {
              span.classList.remove("nl-caret");
              span.classList.add("nl-dimension");
              div.setAttribute("onclick", 'enableselect(this,"' + false + '","'+NestedListClass+ '")');
          }
          ul.appendChild(li);
      });
      parent.appendChild(ul);

      //Sort the list alphabetically
      function sortByProperty(property) {
          return function(a, b) {
              if (a[property] > b[property])
                  return 1;
              else if (a[property] < b[property])
                  return -1;
              return 0;
          }
      }
  //sorts the JSON data
      function sortJson(data, temp) {
          if (temp == 0)
              data.sort(sortByProperty("label"));
          data.forEach((el, index) => {
              if (el.children) {
                  el.children.sort(sortByProperty("label"));
                  sortJson(el.children, 1);
              }
          });
      }

  }

  var toggler = document.getElementsByClassName("nl-caret");
  for (var i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
          this.parentElement.parentElement.querySelector(".nl-nested").classList.toggle("nl-active");
          this.classList.toggle("nl-caret-down");
      });
  }
  $(".nl-caret").click(function(event) {
      event.stopPropagation();
  });
//code to add hovering effect to whole li 
  let hoverElement = document.getElementsByClassName("nl-hovering");
  Object.values(hoverElement).forEach(function(el) {
      el.addEventListener("mouseover", function(event) {
          let box = document.querySelector('.'+NestedListClass);
          let width = box.offsetWidth;
          var currentwidth = el.offsetWidth;
          if (el.style["padding-left"] == 0) {
              el.style["margin-left"] = -(width - currentwidth) + "px";
              el.style["padding-left"] = (width - currentwidth) + "px";
          }
      }, false);
  });

  let close = document.querySelector('.nl-close');
  let cancel = document.querySelector('.popup2-cancel');
  close.addEventListener("click", function() {
      var removeBlue = document.getElementsByClassName("nl-selectitem");
      Object.values(removeBlue).forEach(function(item, index) {
          item.classList.remove("nl-selectitem");
          item.classList.add("nl-hovering");
          item.style["color"] = "#3D3D3D";
      });
  
  });
  cancel.addEventListener("click", function() {
      var removeBlue = document.getElementsByClassName("nl-selectitem");
      Object.values(removeBlue).forEach(function(item, index) {
          item.classList.remove("nl-selectitem");
          item.classList.add("nl-hovering");
          item.style["color"] = "#3D3D3D";
      });
  
  });

  (function($) {
      // custom css expression for a case-insensitive contains()
      jQuery.expr[":"].contains = jQuery.expr.createPseudo(function(arg) {
          return function(elem) {
              return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
          };
      });
  var ListData=[];
  function addDataToList(data){
  data.forEach((el, index) => {
  if(!ListData.includes(el.label))
    ListData.push(el.label);
  if (el.children) {
  addDataToList(el.children);
  }
  });
  }
  addDataToList(data);
      var list = '.'+NestedListClass;
      autocompleteNL(SearchBoxElement, ListData, SearchMode);
      

  //function to integrate search behaviour to Nested List
      function autocompleteNL(inp, arr, searchMode) {

          
          var currentFocus;
          /*execute a function when someone writes in the text field:*/
          inp.addEventListener("input", function(e) {
              var a, b, i, val = this.value,
                  id = this.id;
              /*close any already open lists of autocompleted values*/
              closeAllLists();
              if (!val) {
                  return false;
              }
              currentFocus = -1;
              /*create a DIV element that will contain the items (values):*/
              a = document.createElement("DIV");
              a.setAttribute("id", this.id + "bng-autocomplete-list");
              a.setAttribute("class", "bng-autocomplete-items");
              var parentWidth = this.parentNode.offsetWidth + "px";
              a.style.width = parentWidth;
              var posTopParent = this.parentNode.offsetTop + this.parentNode.offsetHeight;
              a.style.top = posTopParent + "px";

              /*append the DIV element as a child of the autocomplete container:*/
              this.parentNode.appendChild(a);
              /*String begins containing terms*/
              if (searchMode == "searchMode1") {
                  /*for each item in the array...*/
                  for (i = 0; i < arr.length; i++)
        {
          /*check if the item starts with the same letters as the text field value:*/
          var innerHtmlStr = "";
          var searchFoundFlag = 0;
          var splittedString = arr[i].split(" ");
          for(var j=0; j < splittedString.length; j++)
          {
            
            if (splittedString[j].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
            {
              if( j == 0)
              {
                innerHtmlStr = "<strong>" + splittedString[j].substr(0, val.length) + "</strong>";
                innerHtmlStr += splittedString[j].substr(val.length);
              }
              else{
                innerHtmlStr += " <strong>" + splittedString[j].substr(0, val.length) + "</strong>";
                innerHtmlStr += splittedString[j].substr(val.length);
              }
              searchFoundFlag = 1;
            }
            else{
              if( j == 0)
              {
                innerHtmlStr = splittedString[j];
              }
              else{
                innerHtmlStr += " ";
                innerHtmlStr += splittedString[j];
              }
              
            }
          }
          /*create a DIV element for each matching element:*/
          if(searchFoundFlag == 1){
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            //b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML = innerHtmlStr;
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*save the value in localstorage*/
                              var list = '.'+NestedListClass;
                              hasChild($(list));
                              /*close the list of autocompleted values,
                              (or any other open lists of autocompleted values:*/
                              closeAllLists();
            });
            a.appendChild(b);
          }
          
        }
              }
              /*Contains characters*/
              else if (searchMode == "searchMode2") {

                  /*for each item in the array...*/
                  for (i = 0; i < arr.length; i++) {
                      /*check if the item starts with the same letters as the text field value:*/
                      if (arr[i].toUpperCase().includes(val.toUpperCase())) {
                          /*create a DIV element for each matching element:*/
                          b = document.createElement("DIV");
                          /*make the matching letters bold:*/
                          var subStrPos = arr[i].toUpperCase().indexOf(val.toUpperCase());
                          b.innerHTML = "";
                          b.innerHTML += arr[i].substr(0, subStrPos);
                          b.innerHTML += "<strong>" + arr[i].substr(subStrPos, val.length) + "</strong>";
                          b.innerHTML += arr[i].substr(subStrPos + val.length, arr[i].length);
                          /*insert a input field that will hold the current array item's value:*/
                          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                          /*execute a function when someone clicks on the item value (DIV element):*/
                          b.addEventListener("click", function(e) {
                              /*insert the value for the autocomplete text field:*/
                              inp.value = this.getElementsByTagName("input")[0].value;
                              /*save the value in localstorage*/
                              var list = '.'+NestedListClass;
                              hasChild($(list));
                              /*close the list of autocompleted values,
                              (or any other open lists of autocompleted values:*/
                              closeAllLists();
                          });
                          a.appendChild(b);
                      }
                  }
              }
          });



          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown", function(e) {
              var x = document.getElementById(this.id + "bng-autocomplete-list");
              if (x) x = x.getElementsByTagName("div");
              if (e.keyCode == 40) {
                  /*If the arrow DOWN key is pressed,
                  increase the currentFocus variable:*/
                  currentFocus++;
                  /*and and make the current item more visible:*/
                  addActive(x);
              } else if (e.keyCode == 38) //up
              {
                  /*If the arrow UP key is pressed,
                  decrease the currentFocus variable:*/
                  currentFocus--;
                  /*and and make the current item more visible:*/
                  addActive(x);
              } else if (e.keyCode == 13) {
                  /*If the ENTER key is pressed, prevent the form from being submitted,*/
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  if (currentFocus > -1) {
                      /*and simulate a click on the "active" item:*/
                      if (x) x[currentFocus].click();
                  } else {

                      var list = '.'+NestedListClass;
                      hasChild($(list));
                      closeAllLists();
                  }
              }
          });

          function addActive(x) {
              /*a function to classify an item as "active":*/
              if (!x) return false;
              /*start by removing the "active" class on all items:*/
              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = (x.length - 1);
              /*add class "autocomplete-active":*/
              x[currentFocus].classList.add("bng-autocomplete-active");
          }

          function removeActive(x) {
              /*a function to remove the "active" class from all autocomplete items:*/
              for (var i = 0; i < x.length; i++) {
                  x[i].classList.remove("bng-autocomplete-active");
              }
          }

          function closeAllLists(elmnt) {
              /*close all autocomplete lists in the document,
              except the one passed as an argument:*/
              if (typeof elmnt === 'undefined') {
                  var x = document.getElementsByClassName("bng-autocomplete-items");

                  for (var i = 0; i < x.length; i++) {
                      if (elmnt != x[i] && elmnt != inp) {
                          x[i].parentNode.removeChild(x[i]);
                      }
                  }
              } else {
                  var x = document.getElementsByClassName("bng-autocomplete-items");
                  var elmntid = elmnt.id + "bng-autocomplete-list";
                  for (var i = 0; i < x.length; i++) {
                      if (elmntid != x[i].id && elmnt != inp) {
                          x[i].parentNode.removeChild(x[i]);
                      }
                  }
              }
          }
          /*execute a function when someone clicks in the document:*/
          document.addEventListener("click", function(e) {
              closeAllLists(e.target);
          });

          /* to Store the searched value in localStorage onclick of search icon*/



          /*Function to get unique elements of the array*/
    Array.prototype.unique = function () {
    var a = this.concat();
    var delFlag = false;
    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; delFlag?delFlag=false:j++) {
      if (a[i] === a[j])
        { 
          a.splice(j, 1);
          delFlag = true;
        }
      }
    }
    return a;
    };

      }

      function hasChild(list) {
          // the searched value
          var filter = SearchBoxElement.value;

          // for every children, do function:
          list.children('li').each(function() {
              // see if the list contains the filter


              if ($(this).find("div >span:contains(" + filter + ")").length > 0) {
                  // see if it has nested levels

                  if ($(this).find('.nl-nested').length > 0) {
                      $(this).find('.nl-nested').addClass("nl-active");
                      $(this).find('span.nl-caret').addClass("nl-caret-down");
                      $(this).show();


                      // recall function
                      hasChild($(this).find('ul :first').parent());
                  } else {
                      $(this).find('span.nl-caret').removeClass("nl-caret-down");
                      $(this).show();

                  }
              } else {
                  $(this).find('span.nl-caret').removeClass("nl-caret-down");
                  $(this).find('.nl-nested').removeClass("nl-active");
                  $(this).hide();
              }
          });
      };
      $('.bng-search-field-icon').click(function() {
          // the id of the filtered list
          var list = '.'+NestedListClass;
          // the searched value
          var filter = SearchBoxElement.value;
          if (filter) {
              // call previous function
              hasChild($(list));
          } else {
              // show all
      var removeBlue = document.getElementsByClassName("nl-selectitem");
          Object.values(removeBlue).forEach(function(item, index) {
            item.classList.remove("nl-selectitem");
            item.classList.add("nl-hovering");
            item.style["color"] = "#3D3D3D";
          });
      var button = document.querySelector(".nl-SelectButton");
         if (button.classList.contains("btn-primary")) 
      {
             button.classList.add("btn-inactive-primary");
            button.classList.remove("btn-primary");
        }
              $(list).find('span.nl-caret').removeClass("nl-caret-down");
              $(list).find('.nl-nested').removeClass("nl-active");
              $(list).find("li").show();
      
          }
          return false;
      });
  SearchBoxElement.addEventListener('keyup',function() {
          // the id of the filtered list
          var list = '.'+NestedListClass;
          // the searched value
          var filter = SearchBoxElement.value;
          if (filter) {
              // call previous function
          } else {
              // show all
      var removeBlue = document.getElementsByClassName("nl-selectitem");
          Object.values(removeBlue).forEach(function(item, index) {
            item.classList.remove("nl-selectitem");
            item.classList.add("nl-hovering");
            item.style["color"] = "#3D3D3D";
          });
      var button = document.querySelector(".nl-SelectButton");
         if (button.classList.contains("btn-primary")) 
      {
             button.classList.add("btn-inactive-primary");
            button.classList.remove("btn-primary");
        }
              $(list).find('span.nl-caret').removeClass("nl-caret-down");
              $(list).find('.nl-nested').removeClass("nl-active");
              $(list).find("li").show();
          }
          return false;
      });
  }(jQuery));
}
 
//On selection of a item from the list
function enableselect(t, ChildlessItem,NestedListClass) {

  if (ChildlessItem == 'false') {
      var button = document.querySelector(".nl-SelectButton");
      var removeBlue = document.getElementsByClassName("nl-selectitem");
      Object.values(removeBlue).forEach(function(item, index) {
          if (item != t) {
              item.classList.remove("nl-selectitem");

              item.classList.add("nl-hovering");
              item.style["color"] = "#3D3D3D";
          }

      });

      let box = document.querySelector('.'+NestedListClass);
      let width = box.offsetWidth;
      var currentwidth = t.offsetWidth;
      if (t.classList.contains("nl-selectitem")) {
          t.classList.remove("nl-hovering");
      } else {
          t.style["color"] = "white";
          t.classList.add("nl-selectitem");
          t.classList.remove("nl-hovering");
      }

      if (button.classList.contains("btn-inactive-primary")) {
          button.classList.remove("btn-inactive-primary");
          button.classList.add("btn-primary");
      }
  }
}
//function to get selected Nested List Value
function getSelectedNL(NL_Class)
{
return $('.'+NL_Class).find('.nl-selectitem').find('span:last').text();
}

/*** NESTED LIST ***/

/*** FREEZE FIRST COLUMN ***/
(function($){
  $.fn.freezeFirstCol = function(option){
    //Initialize defaults 
    var defaults = {
    },
    setting = $.extend({}, defaults, option);
    this.each(function(){
      var $this = $(this);
      
      if(option.freeze)
      {
    
      $('.vpBody table td:first-child',$this).addClass('firstColumnFreeze');
      $('.vpHead table td:first-child',$this).addClass('firstHeaderFreeze');
      }
      else
      {
      $('.vpBody table td:first-child',$this).removeClass('firstColumnFreeze');
      $('.vpHead table td:first-child',$this).removeClass('firstHeaderFreeze');
      }
              
      
    });
    
    
    
  }
  
  $.fn.freezeLastCol = function(option){
    //Initialize defaults 
    var defaults = {
    },
    setting = $.extend({}, defaults, option);
    this.each(function(){
      var $this = $(this);
      
      if(option.freeze)
      {
    
      $('.vpBody table td:last-child',$this).addClass('lastColumnFreeze');
      $('.vpHead table td:last-child',$this).addClass('lastHeaderFreeze');
      }
      else
      {
      $('.vpBody table td:last-child',$this).removeClass('lastColumnFreeze');
      $('.vpHead table td:last-child',$this).removeClass('lastHeaderFreeze');
      }
              
      
    });
    
    
    
  }
})(jQuery);
/*** FREEZE FIRST COLUMN ***/


/*** Multi-File Upload ***/

//Variables to store the selected Files
//var MultifileInput=[];
//var MU_AllFiles=[];

$(function() {

   //var fileInput2;
//To hide the Save button on Load
   $(".MultipleUpload").hide();

$(document).on('click', '.upload3 .btn-upload', function() {
 
   var uploadContainer = $(this).closest('.upload3');
   var uniqueUploadId = $(this).closest('.upload3').find('.fileupload');
  
  $('input[type="file"]',uploadContainer).click();
    window['MultifileInput' +uniqueUploadId.attr('id') ] = [];
    window['MU_AllFiles' +uniqueUploadId.attr('id') ] = [];
    
  
  
  });

$(document).on('click', '.upload3 .AddAnotherFile', function(event) {
  var uploadContainer = $(this).closest('.upload3');
  event.preventDefault();
  $('input[type="file"]',uploadContainer).val('');
  $('input[type="file"]',uploadContainer).click();
  var uniqueUploadId = $(this).closest('.upload3').find('.fileupload');

  if (typeof window['MultifileInput' +uniqueUploadId.attr('id') ] === 'undefined') {
    window['MultifileInput' +uniqueUploadId.attr('id') ] = [];
  }

   if (typeof window['MU_AllFiles' +uniqueUploadId.attr('id') ] ==='undefined') {
    window['MU_AllFiles' +uniqueUploadId.attr('id') ] = [];
  }

  
  });

  $(document).on('change', '.upload3 > input[type="file"]', function() {
var uniqueUploadId = $(this).closest('.upload3').find('.fileupload');
  

  window['fileInput2' +uniqueUploadId.attr('id') ] = $(this)[0];
var MaxFileSize;
var ValidFileExtension;
 
if($(this).closest('.upload3').attr('data-fileSize')!== undefined)
{
  MaxFileSize=$(this).closest('.upload3').attr('data-fileSize');//Maximum file size.Input from data attribute
}
else
{
    MaxFileSize = 100;
}
if($(this).closest('.upload3').attr('data-fileType')!== undefined)
{
  ValidFileExtension=$(this).closest('.upload3').attr('data-fileType').split(',');//list of valid extension.Input from data attribute
}
else
{
   ValidFileExtension = '';
} 
  window['MultifileInput' +uniqueUploadId.attr('id') ].push(...window['fileInput2' +uniqueUploadId.attr('id') ].files);
window['MU_AllFiles' +uniqueUploadId.attr('id') ].push(...window['fileInput2' +uniqueUploadId.attr('id') ].files);
  var fileList = window['fileInput2' +uniqueUploadId.attr('id') ].files;
  var container = $(this).closest('.upload3');
  
  if (fileList.length > 0) {
      $('.browse-file', container).hide();
     $(".MultipleUpload",container).show();
      

      $.each(fileList, function(index, value) {
        
    //converting current file size bytes to Mega Bytes.
    var fileSize = +(Math.round(value.size / Math.pow(1024,2) + 'e+2')  + 'e-2');//NOSONAR Reason:ValidPrecision
    //Getting the current file extension
    var fileExt = value.name.split('.').pop();
    if((fileSize>MaxFileSize &&MaxFileSize!='') || (!ValidFileExtension.includes(fileExt)&& ValidFileExtension.length>1))//Checking for both validation and any one is true,then file will not uploaded
    {	
      
      if(!ValidFileExtension.includes(fileExt)&& ValidFileExtension.length>1)//When uploaded file extension is not within the list of valid extensions and valid extensions is not specified from data attribute
      {
        $('table', container).append('<tr><td><i class="material-icons validation-error" style="font-size:16px;">error</i></td><td><i class="material-icons" style="color:#7D8790;">attach_file</i></td><td style="display:grid"><span class="upload-info" style="color:#7D8790;padding-top: 14px;" data-filename="' + value.name  + '">' + value.name + '</span><span class="file-validation c2" style="color:#EB0029;padding-top: 5px;"  >' + "File type not supported(Only "+ValidFileExtension+ ")"+'</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
        
      }
      else if(fileSize>MaxFileSize &&MaxFileSize!='')//When uploaded file size is greater than max size and max size is specified from data attribute
      {
        $('table', container).append('<tr><td><i class="material-icons validation-error" style="font-size:16px;">error</i></td><td><i class="material-icons"  style="color:#7D8790;">attach_file</i></td><td style="display:grid"><span class="upload-info" style="color:#7D8790;padding-top: 14px;" data-filename="' + value.name  + '">' + value.name + '</span><span class="file-validation c2" style="color:#EB0029;padding-top: 5px;" >' + "File size is too large"+" ("+fileSize +"MB)"+ '</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
         
      }
      //Below code is for not uploading the file when inavlid file is browsed.
      const fileList1 = new DataTransfer();
      var updatedFileList2 =[];
          $.each(window['MultifileInput' +uniqueUploadId.attr('id') ], function(key, file) {
                if(value.name !== file.name) {
                fileList1.items.add(file);
              }
          });
       
          updatedFileList2.push(...fileList1.files);
           window['MultifileInput' +uniqueUploadId.attr('id') ] = updatedFileList2;
    }
    else
    {
      //when both data attributes are not provided and falls within size and list of valid extensions.
      $('table', container).append('<tr><td></td><td><i class="material-icons">attach_file</i></td><td><span class="upload-info" style="color:#263746" data-filename="' + value.name  + '">' + value.name + '</span></td><td><i class="material-icons btn-close remove-attachment">close</i></td></tr>')
    }
  
  });
  $(".AddAnotherFile",container).show();
  
    }
  });


  $(document).on('click', '.upload3 .remove-attachment', function() {
      var fileRow = $(this).closest('tr');
      var filename = fileRow.find('.upload-info').data('filename');
      var container = $(this).closest('.upload3');
  var uniqueUploadId = container.find('.fileupload');
  
    var updatedFileList =[];
  var actualFileList = [];
        //might not work in Firefox
      const fileList = new DataTransfer();
      const MU_fileList = new DataTransfer();
  
  var MU_fileList_index = window['MU_AllFiles' +uniqueUploadId.attr('id') ].map(function(d, index) {
              if(d.name == filename) return index;
          }).filter(isFinite)[0];
  
  var MultifileInput_index = window['MultifileInput' +uniqueUploadId.attr('id') ].map(function(d, index) {
              if(d.name == filename) return index;
          }).filter(isFinite)[0];
  /*	
      $.each(window['MultifileInput' +uniqueUploadId.attr('id') ], function(key, file) {
          if(filename !== file.name) {
          fileList.items.add(file);
          }
      });
        
   $.each(window['MU_AllFiles' +uniqueUploadId.attr('id') ], function(key, file) {
          if(filename !== file.name) {
          MU_fileList.items.add(file);
          }
      });*/
        
    
  if(typeof MultifileInput_index != 'undefined')
  {
    window['MultifileInput' +uniqueUploadId.attr('id') ].splice(MultifileInput_index,1);
  }
  
  if(typeof MU_fileList_index != 'undefined')
  {
    window['MU_AllFiles' +uniqueUploadId.attr('id') ].splice(MU_fileList_index,1);
  }
  
      fileRow.remove();
      
  //updatedFileList.push(...fileList.files);
  //actualFileList.push(...MU_fileList.files);
  
     // window['MultifileInput' +uniqueUploadId.attr('id') ] = updatedFileList;
  //window['MU_AllFiles' +uniqueUploadId.attr('id') ] = actualFileList;
      console.log('MultifileInput r : ',window['MultifileInput' +uniqueUploadId.attr('id') ]);
      console.log('MU_AllFiles r : ',window['MU_AllFiles' +uniqueUploadId.attr('id') ]);
  $('input[type="file"]', container).val('');
      if(window['MU_AllFiles' +uniqueUploadId.attr('id') ].length <1) {
          $('.browse-file', container).show();
       $(".MultipleUpload",container).hide();
    $(".AddAnotherFile",container).hide();
      }

  });

  $(document).on('click', '.upload3 .btn-clear', function() {
      COM_File_Upload_Remove_AttachmentMultiple($(this));
  });



});



function uploadFile(t) {
 

var fileupload =window['MultifileInput' +t.closest('.upload3').find('.fileupload').attr('id') ];
var filepath = [];


$.each( fileupload, function( key, value ) {
  

const url = "/Apriso/Portal/api/upload/" + encodeURIComponent(value.name) + "/";
  const xhr = new XMLHttpRequest();

xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "multipart/form-data");
  xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4) {
      if (xhr.status === 200) {
          var obj = JSON.parse(xhr.response);
          
    filepath.push(obj.FilePath);
                     
                      
      } 
  else {
        var messageType = (xhr.status === 0) ? "FilePickerUploadAborted" : "FilePickerUploadError";
          console.log(messageType);
    //filepath.push('NA');
                     
      }
  }
  });
  xhr.send(value);
    
 });

showSnackbar2(filepath.length + " Files have been successfully uploaded",{setDuration : 10000,actionButtonPresent : true, actionButton : "DISMISS" });

 
 COM_File_Upload_Remove_AttachmentMultiple(t.closest('.upload3').find('.fileupload'));
  
 return filepath;
}

function COM_File_Upload_Remove_AttachmentMultiple(el) {
  var container = el.closest('.upload3');
  var uniqueUploadId = el.closest('.upload3').find('.fileupload');

  $('tr', container).not('tr.browse-file').remove();

  $('.browse-file', container).show();
   $(".MultipleUpload",container).hide();
  $(".AddAnotherFile",container).hide();
  $('input[type="file"]', container).val('');
window['MultifileInput' +uniqueUploadId.attr('id') ]=[];
}

/*** Multi-File Upload ***/


/*** Multi - Select Tree DropDown ***/

;(function ( $, window, document, undefined ) {

// Default settings
var comboTreePlugin = 'comboTree',
  defaults = {
    source: [],
    isMultiple: true,
    cascadeSelect: true,
    selected: [],
    collapse: true,
    selectableLastNode: false,
    withSelectAll: false,
    isolatedSelectable: false,
  width:'285px',
  withButtonSection: false,
  onShowbtnclick : function(){
    // This is intentional
  },
  initialLabel : ''
  };

// LIFE CYCLE
function ComboTree( element, options ) {

  this.options = $.extend( {}, defaults, options) ;
  this._defaults = defaults;
  this._name = comboTreePlugin;

  this.constructorFunc(element, options);
}

ComboTree.prototype.constructorFunc = function(element, options){
  this.elemInput = element;
  this._elemInput = $(element);

  this.init();
}

ComboTree.prototype.init = function () {
  // Setting Doms
  this.comboTreeId = 'comboTree' + Math.floor(Math.random() * 999999);

  this._elemInput.addClass('comboTreeInputBox');

  if (this._elemInput.attr('id') === undefined)
    this._elemInput.attr('id', this.comboTreeId + 'Input');
  this.elemInputId = this._elemInput.attr('id');

  this._elemInput.wrap('<div id="'+ this.comboTreeId + 'Wrapper" class="comboTreeWrapper"></div>');
  this._elemInput.wrap('<div id="'+ this.comboTreeId + 'InputWrapper" class="comboTreeInputWrapper"></div>');
  this._elemWrapper = $('#' + this.comboTreeId + 'Wrapper');
this._elemInpWrapper = $('#' + this.comboTreeId + 'InputWrapper');
this._elemInpWrapper.css({"border-radius":"4px"});
this._elemWrapper.width(this.options.width);
  this._elemArrowBtn = $('<div id="' + this.comboTreeId + 'ArrowBtn" class="comboTreeArrowBtn" type="button"><span class="comicon arrow_drop_down" style="font-size:30px;"></span></div>');
  this._elemInput.after(this._elemArrowBtn);
  this._elemWrapper.append('<div id="' + this.comboTreeId + 'DropDownContainer" class="comboTreeDropDownContainer"></div>');

  // DORP DOWN AREA
  this._elemDropDownContainer = $('#' + this.comboTreeId + 'DropDownContainer');
this._elemDropDownContainer.css({"border-top-width":"0px"});
  this._elemDropDownContainer.append(this.createSourceHTML());
  this._elemFilterInput = this.options.isMultiple ? $('#' + this.comboTreeId + 'MultiFilter') : null;
  this._elemSelectAllInput = this.options.isMultiple && this.options.withSelectAll ? $('#' + this.comboTreeId + 'SelectAll') : null;
  this._elemSourceUl = $('#' + this.comboTreeId + 'ComboTreeSourceUl');

  this._elemItems = this._elemDropDownContainer.find('li');
  this._elemItemsTitle = this._elemDropDownContainer.find('span.comboTreeItemTitle');
this._elemFilterInputCancel = this._elemDropDownContainer.find(".comboTreemultiplesFilter").find(".cancel");
this._elemFilterInputCancel.hide();
this._elemCancelBtn = this._elemDropDownContainer.find(".comboTreeButtonContainer").find(".comboTreeCancelButtonGroup").find(".comboTreeCancelButton");
this._elemShowResultBtn = this._elemDropDownContainer.find(".comboTreeButtonContainer").find(".comboTreeShowButtonGroup").find(".comboTreeShowButton");
  // VARIABLES
  this._selectedItem = {};
  this._selectedItems = [];
this._selectedParentItems = [];
this._selectedChildItems = [];

  this.processSelected();

  this.bindings();
// initial Label
this._elemInput.text(this.options.initialLabel);
};

ComboTree.prototype.unbind = function () {
  this._elemArrowBtn.off('click');
  this._elemInput.off('click');
  this._elemItems.off('click');
  this._elemItemsTitle.off('click');
  this._elemItemsTitle.off("mousemove");
  this._elemInput.off('keyup');
  this._elemInput.off('keydown');
  this._elemInput.off('mouseup.' + this.comboTreeId);
this._elemFilterInputCancel.off('click');
this._elemCancelBtn.off('click');
this._elemShowResultBtn.off('click');
  $(document).off('mouseup.' + this.comboTreeId);
}

ComboTree.prototype.destroy = function () {
  this.unbind();
  this._elemWrapper.before(this._elemInput);
  this._elemWrapper.remove();
  this._elemInput.removeData('plugin_' + comboTreePlugin);
}



// CREATE DOM HTMLs

ComboTree.prototype.removeSourceHTML = function () {
  this._elemDropDownContainer.html('');
};

ComboTree.prototype.createSourceHTML = function () {
  var sourceHTML = '';
  if (this.options.isMultiple)
    sourceHTML += this.createFilterHTMLForMultiSelect();
  if (this.options.isMultiple && this.options.withSelectAll)
    sourceHTML += this.createSelectAllHTMLForMultiSelect();
  sourceHTML += this.createSourceSubItemsHTML(this.options.source);
if	(this.options.withButtonSection)
  sourceHTML += this.createSourceButtonHTML();
  return sourceHTML;
};

ComboTree.prototype.createFilterHTMLForMultiSelect = function (){
  return '<div class="comboTreemultiplesFilter"><span style="font-size:24px;color: #7D8790;position: absolute;padding: 4px;" class="comicon search"></span><input id="' + this.comboTreeId + 'MultiFilter" type="text" class="multiplesFilter" placeholder="Search"/><span style="font-size:16px;color: #7D8790;position: absolute;right: 12px;margin: 8px;" class="comicon cancel"></span></div><div class="NoResultsFoundcomboTree" ></div>';
}

ComboTree.prototype.createSourceButtonHTML = function (){
  return '<div  class="comboTreeButtonContainer"><div class="comboTreeCancelButtonGroup"><div id = "' + this.comboTreeId + 'Cancel' + '" style="color: #008CC8;border-bottom-color: #008CC8;" class="btn btn-tertiary comboTreeCancelButton">Clear</div></div><div class="comboTreeShowButtonGroup"><div id = "' + this.comboTreeId + 'ShowResult' + '" class="btn btn-primary btn-inactive-primary comboTreeShowButton">Show Results</div></div></div>';
}

ComboTree.prototype.createSelectAllHTMLForMultiSelect = function () {
  return '<label class="selectAll"><input type="checkbox" id="' + this.comboTreeId + 'SelectAll' + '">[Select All]</label>';
}

ComboTree.prototype.createSourceSubItemsHTML = function (subItems, parentId, collapse=false) {
  var subItemsHtml = (parentId ? '' : '<div class="comboTreeDropDownContainerUL">' )+'<UL id="' + this.comboTreeId + 'ComboTreeSourceUl' + (parentId ? parentId : 'main' ) + '" style="' + (((this.options.collapse||collapse) && parentId) ? 'display:none;' : '')  + '">';
  for (var i=0; i<subItems.length; i++){
    subItemsHtml += this.createSourceItemHTML(subItems[i]);
  }
  subItemsHtml += '</UL>'+(parentId ? '' : '</div>' );
  return subItemsHtml;
}

ComboTree.prototype.createSourceItemHTML = function (sourceItem) {
  var itemHtml = "",
    isThereSubs = sourceItem.hasOwnProperty("subs"),
      collapse = sourceItem.hasOwnProperty("collapse") ? sourceItem.hasOwnProperty("collapse") : false;
  let isSelectable = (sourceItem.isSelectable === undefined ? true : sourceItem.isSelectable);
  let selectableClass = (isSelectable || isThereSubs) ? 'selectable' : 'not-selectable';
  if (this.options.isolatedSelectable) {
    selectableClass = isSelectable ? 'selectable' : 'not-selectable';
  }
  let selectableLastNode = (this.options.selectableLastNode !== undefined && isThereSubs) ? this.options.selectableLastNode : false;

  itemHtml += '<LI id="' + this.comboTreeId + 'Li' + sourceItem.id + '" class="ComboTreeItem' + (isThereSubs?'Parent':'Chlid') + '"> ';


  if (this.options.isMultiple)
    itemHtml += '<span data-id="' + sourceItem.id + '" data-title="' + sourceItem.title + '" data-selectable="' + isSelectable + '" class="comboTreeItemTitle ' + selectableClass + '">' + (!selectableLastNode && isSelectable ? '<input type="checkbox" /><span></span>' : '') + sourceItem.title + '</span>';
  else
    itemHtml += '<span data-id="' + sourceItem.id + '" data-selectable="' + isSelectable + '" class="comboTreeItemTitle ' + selectableClass + '">' + sourceItem.title + '</span>';

  if (isThereSubs)
{
  
  if(sourceItem.subs.length>0)
  {
    itemHtml += '<span class="comboTreeParentPlus">' + (this.options.collapse || collapse ? '<span class="comicon expand_more" style="font-size:16px"></span>' : '<span class="comicon expand_less" style="font-size:16px"></span>') + '</span>'; // itemHtml += '<span class="comboTreeParentPlus">' + (this.options.collapse ? '+' : '&minus;') + '</span>';
  }
}
  if (isThereSubs)
    itemHtml += this.createSourceSubItemsHTML(sourceItem.subs, sourceItem.id, collapse);

  itemHtml += '</LI>';
  return itemHtml;
};


// BINDINGS

ComboTree.prototype.bindings = function () {
  var _this = this;

  $(this._elemInput).focus(function (e) {
    if (!_this._elemDropDownContainer.is(':visible'))
      $(_this._elemDropDownContainer).slideToggle(100);
  });

  this._elemArrowBtn.on('click', function(e){
    e.stopPropagation();
    _this.toggleDropDown();
  });
  this._elemInput.on('click', function(e){
    e.stopPropagation();
    _this.toggleDropDown();
  });
  this._elemItems.on('click', function(e){
    e.stopPropagation();
    if ($(this).hasClass('ComboTreeItemParent')){
      _this.toggleSelectionTree(this);
    }
  });
  this._elemItemsTitle.on('click', function(e){
    e.stopPropagation();
    if (_this.options.isMultiple)
      _this.multiItemClick(this);
    else
      _this.singleItemClick(this);
  });
  this._elemItemsTitle.on("mousemove", function (e) {
    e.stopPropagation();
    _this.dropDownMenuHover(this);
  });
  this._elemSelectAllInput && this._elemSelectAllInput.parent("label").on("mousemove", function (e) {
    e.stopPropagation();
    _this.dropDownMenuHover(this);
  });

  // KEY BINDINGS
  this._elemInput.on('keyup', function(e) {
    e.stopPropagation();

    switch (e.keyCode) {
      case 27:
        _this.closeDropDownMenu(); break;
      case 13:
      case 39: case 37: case 40: case 38:
        e.preventDefault();
        break;
      default:
        if (!_this.options.isMultiple)
          _this.filterDropDownMenu();
        break;
    }
  });

  this._elemFilterInput && this._elemFilterInput.on('keyup', function (e) {
    e.stopPropagation();

    switch (e.keyCode) {
      case 27:
        if ($(this).val()) {
          $(this).val('');
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');
          _this.filterDropDownMenu();
        } else {
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');
          _this.closeDropDownMenu();
        }
        break;
      case 40: case 38:
        e.preventDefault();
        _this.dropDownInputKeyControl(e.keyCode - 39); break;
      case 37: case 39:
        e.preventDefault();
        _this.dropDownInputKeyToggleTreeControl(e.keyCode - 38);
        break;
      case 13:
        _this.multiItemClick(_this._elemHoveredItem);
        e.preventDefault();
        break;
      default:
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
    _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');
        _this.filterDropDownMenu();
        break;
    }
  });

  this._elemInput.on('keydown', function(e) {
    e.stopPropagation();

    switch (e.keyCode) {
      case 9:
        _this.closeDropDownMenu(); break;
      case 40: case 38:
        e.preventDefault();
        _this.dropDownInputKeyControl(e.keyCode - 39); break;
      case 37: case 39:
        e.preventDefault();
        _this.dropDownInputKeyToggleTreeControl(e.keyCode - 38);
        break;
      case 13:
        if (_this.options.isMultiple)
          _this.multiItemClick(_this._elemHoveredItem);
        else
          _this.singleItemClick(_this._elemHoveredItem);
        e.preventDefault();
        break;
      default:
        if (_this.options.isMultiple)
          e.preventDefault();
    }
  });

this._elemFilterInputCancel.on('click', function(e){
  e.stopPropagation();
  $("#" + _this.comboTreeId + "MultiFilter").val('');
  _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
  _this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');
  _this.filterDropDownMenu();
  });
//Cancel button on click
this._elemCancelBtn.on('click',function(e){
  e.stopPropagation();
  _this.clearSelection();
});

//Show Results button on click
this._elemShowResultBtn.on('click',function(e){
  e.stopPropagation();
  _this.Showbtnclick();
});
  // ON FOCUS OUT CLOSE DROPDOWN
  $(document).on('mouseup.' + _this.comboTreeId, function (e){
    if (!_this._elemWrapper.is(e.target) && _this._elemWrapper.has(e.target).length === 0 && _this._elemDropDownContainer.is(':visible'))
      _this.closeDropDownMenu();
  });

  this._elemSelectAllInput && this._elemSelectAllInput.on('click', function (e) {
    e.stopPropagation();
    let checked = $(e.target).prop('checked');
    if (checked) {
      _this.selectAll();
    } else {
      _this.clearSelection();
    }
  });
};





// EVENTS HERE

// DropDown Menu Open/Close
ComboTree.prototype.toggleDropDown = function () {
  let _this = this;
  $(this._elemDropDownContainer).slideToggle(100, function () {
    if (_this._elemDropDownContainer.is(':visible'))
  {
      $(_this._elemInput).focus();
  _this._elemInpWrapper.css({"border-radius":"4px 4px 0px 0px"});
  }
  else{
    _this._elemInpWrapper.css({"border-radius":"4px"});
  }
if ($(_this._elemArrowBtn).children('span:first').hasClass('arrow_drop_down')) 
{
  $(_this._elemArrowBtn).children('span:first').removeClass('arrow_drop_down');
  $(_this._elemArrowBtn).children('span:first').addClass('arrow_drop_up');
} 
else 
{
  $(_this._elemArrowBtn).children('span:first').addClass('arrow_drop_down');
  $(_this._elemArrowBtn).children('span:first').removeClass('arrow_drop_up');
  
}
  });

  $(_this._elemFilterInputCancel).trigger( "click" );
};

ComboTree.prototype.closeDropDownMenu = function () {
  $(this._elemDropDownContainer).slideUp(100);
 this._elemInpWrapper.css({"border-radius":"4px"});
  
if ($(this._elemArrowBtn).children('span:first').hasClass('arrow_drop_down')) 
{
  $(this._elemArrowBtn).children('span:first').removeClass('arrow_drop_down');
  $(this._elemArrowBtn).children('span:first').addClass('arrow_drop_up');
} 
else 
{
  $(this._elemArrowBtn).children('span:first').addClass('arrow_drop_down');
  $(this._elemArrowBtn).children('span:first').removeClass('arrow_drop_up');
  //To rearrange the dropdown

  $(this._elemFilterInputCancel).trigger( "click" );
}
};

ComboTree.prototype.Showbtnclick = function () {
this.options.onShowbtnclick();
};

// Selection Tree Open/Close
ComboTree.prototype.toggleSelectionTree = function (item, direction) {
  var subMenu = $(item).children('ul')[0];
  if (direction === undefined){
    if ($(subMenu).is(':visible'))
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_more" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("+");
    else
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("&minus;");

    $(subMenu).slideToggle(50);
  }
  else if (direction == 1 && !$(subMenu).is(':visible')){
    $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("&minus;");
    $(subMenu).slideDown(50);
  }
  else if (direction == -1){
    if ($(subMenu).is(':visible')){
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("+");
      $(subMenu).slideUp(50);
    }
    else {
      this.dropDownMenuHoverToParentItem(item);
    }
  }

};


// SELECTION FUNCTIONS
ComboTree.prototype.selectMultipleItem = function(ctItem){

  if (this.options.selectableLastNode && $(ctItem).parent('li').hasClass('ComboTreeItemParent')) {

    this.toggleSelectionTree($(ctItem).parent('li'));

    return false;
  }

  if ($(ctItem).data("selectable") == true) {
    this._selectedItem = {
      id: $(ctItem).attr("data-id"),
      title: $(ctItem).text()
    };
    let check = this.isItemInArray(this._selectedItem, this.options.source);
    if (check) {
      var index = this.isItemInArray(this._selectedItem, this._selectedItems);
      if (index) {
        this._selectedItems.splice(parseInt(index), 1);
    
   if($(ctItem).parent('li').hasClass('ComboTreeItemParent'))
    {
    //to maintain parent values
    
    var parentindex = this.isItemInArray(this._selectedItem, this._selectedParentItems);
    if(parentindex)
    {
      this._selectedParentItems.splice(parseInt(parentindex), 1);
    }
    }
  else
  {
    //to maintain child values
    var childindex = this.isItemInArray(this._selectedItem, this._selectedChildItems);
    if(childindex)
    {
      this._selectedChildItems.splice(parseInt(childindex), 1);
    }
  } 
    
        $(ctItem).find("input").prop('checked', false);
    
    
      } else {
        this._selectedItems.push(this._selectedItem);
    
    
  if($(ctItem).parent('li').hasClass('ComboTreeItemParent'))
  {
    this._selectedParentItems.push(this._selectedItem);
    
  }
  else
  {
    this._selectedChildItems.push(this._selectedItem);
  } 
      $(ctItem).find("input").prop('checked', true);
  
      }
    } // if check
  } // if selectable
};

ComboTree.prototype.singleItemClick = function (ctItem) {
  if ($(ctItem).data("selectable") == true) {
    this._selectedItem = {
      id: $(ctItem).attr("data-id"),
      title: $(ctItem).text()
    };
  } // if selectable

  this.refreshInputVal();
  this.closeDropDownMenu();
};

ComboTree.prototype.multiItemClick = function (ctItem) {
var _this = this;
this.selectMultipleItem(ctItem);
var parentLi = $(ctItem).parents('li.ComboTreeItemParent').first();
var parentCheckbox = parentLi.find('input[type="checkbox"]').first();
  if (this.options.cascadeSelect) {
    if ($(ctItem).parent('li').hasClass('ComboTreeItemParent')) {
  $(parentCheckbox).prop('indeterminate', false);
      var subMenu = $(ctItem).parent('li').children('ul').first().find('input[type="checkbox"]');
      subMenu.each(function() {
        var $input = $(this)
    
        if ($(ctItem).children('input[type="checkbox"]').first().prop("checked")!==$input.prop('checked')) {
          $input.prop('checked', !$(ctItem).children('input[type="checkbox"]').first().prop("checked"));
    _this.selectMultipleItem($input.parent());
        }
      });
    }
  else
  {
  
  if(parentLi.length > 0)
  {
    var parentItem = parentLi.find('span').first();
    var childCount = $(parentLi).find("ul").find("li").length;
    var childSelected = $(parentLi).children('ul').first().find('input[type="checkbox"]:checked').length;
    if(childSelected == childCount)
    {
      $(parentCheckbox).prop('indeterminate', false);
      if(childCount == 1)
      {
        _this.selectMultipleItem(parentItem);
      }
    }
    else if(childSelected == 0 )
    {

      $(parentCheckbox).prop('indeterminate', false);
      _this.selectMultipleItem(parentItem);
    }
    else if($(parentCheckbox).prop('indeterminate') != true)
    {
      $(parentCheckbox).prop('indeterminate', true);
      if($(parentCheckbox).prop('checked') != true)
      {
        _this.selectMultipleItem(parentItem);
      }
    }
  }
    
  }
  }
  this.refreshInputVal();
};


// recursive search for item in arr
ComboTree.prototype.isItemInArray = function (item, arr) {
  for (var i=0; i<arr.length; i++) {
    if (item.id == arr[i].id && item.title == arr[i].title)
      return i + "";

    if (arr[i].hasOwnProperty("subs")) {
      let found = this.isItemInArray(item, arr[i].subs);
      if (found)
        return found;
    }
  }
  return false;
};

ComboTree.prototype.refreshInputVal = function () {
  var tmpTitle = "";

  if (this.options.isMultiple) {
  let ChildCount = 0;
  for (let i = 0; i < this._selectedParentItems.length; i++) {
      let selectedItem = this.findItembyId(this._selectedParentItems[i].id, this.options.source);
  let selectedItemElemSelector = "#" + this.comboTreeId + 'Li' + this._selectedParentItems[i].id;
  selectedItemElemSelector = selectedItemElemSelector.replaceAll('.', '\\.');
      ChildCount += $(selectedItemElemSelector).find("ul").find("li").length;
  
           
      }
  
  if(this._selectedParentItems.length > 1 && ChildCount == this._selectedChildItems.length)
  {
    tmpTitle = this._selectedParentItems[0].title + ' +'+(this._selectedParentItems.length-1).toString();
  }
  else if(this._selectedParentItems.length == 1 && ChildCount == this._selectedChildItems.length)
  {
    tmpTitle = this._selectedParentItems[0].title;
  }
  else if(this._selectedChildItems.length > 1)
  {
    tmpTitle = this._selectedChildItems[0].title + ' +'+(this._selectedChildItems.length-1).toString();
  }
  else if(this._selectedChildItems.length == 1)
  {
    tmpTitle = this._selectedChildItems[0].title;
  }
  
  }
  else {
    tmpTitle = this._selectedItem.title;
  }

  this._elemInput.text(tmpTitle);
  this._elemInput.trigger('change');
if(this.options.withButtonSection)
{
  if(this._selectedItems.length > 0)
  {
    $(this._elemShowResultBtn).removeClass('btn-inactive-primary');
  }
  else
    $(this._elemShowResultBtn).addClass('btn-inactive-primary');
}
  if (this.changeHandler)
    this.changeHandler();
};

ComboTree.prototype.dropDownMenuHover = function (itemSpan, withScroll) {
  this._elemWrapper.find('.comboTreeItemHover').removeClass('comboTreeItemHover');
  $(itemSpan).addClass('comboTreeItemHover');
  this._elemHoveredItem = $(itemSpan);
  if (withScroll)
    this.dropDownScrollToHoveredItem(this._elemHoveredItem);
}

ComboTree.prototype.dropDownScrollToHoveredItem = function (itemSpan) {
  var curScroll = this._elemSourceUl.scrollTop();
  this._elemSourceUl.scrollTop(curScroll + $(itemSpan).parent().position().top - 80);
}

ComboTree.prototype.dropDownMenuHoverToParentItem = function (item) {
  var parentSpanItem = $($(item).parents('li.ComboTreeItemParent')[0]).children("span.comboTreeItemTitle");
  if (parentSpanItem.length)
    this.dropDownMenuHover(parentSpanItem, true);
  else
    this.dropDownMenuHover(this._elemItemsTitle[0], true);
}

ComboTree.prototype.dropDownInputKeyToggleTreeControl = function (direction) {
  var item = this._elemHoveredItem;
  if ($(item).parent('li').hasClass('ComboTreeItemParent'))
    this.toggleSelectionTree($(item).parent('li'), direction);
  else if (direction == -1)
    this.dropDownMenuHoverToParentItem(item);
}

ComboTree.prototype.dropDownInputKeyControl = function (step) {
  if (!this._elemDropDownContainer.is(":visible"))
    this.toggleDropDown();

  var list = this._elemItems.find("span.comboTreeItemTitle:visible");
  var i = this._elemHoveredItem?list.index(this._elemHoveredItem) + step:0;
  i = (list.length + i) % list.length;

  this.dropDownMenuHover(list[i], true);
},

  ComboTree.prototype.filterDropDownMenu = function () {
    var searchText =  '';
  var _this = this;
    if (!this.options.isMultiple)
      searchText = this._elemInput.val();
    else
      searchText = $("#" + this.comboTreeId + "MultiFilter").val();

    if (searchText != ""){
  this._elemFilterInputCancel.show();
      this._elemItemsTitle.hide();
      this._elemItemsTitle.siblings("span.comboTreeParentPlus").hide();
      var list = this._elemItems.filter(function(index, item){
        return $(item).text().toLowerCase().indexOf(searchText.toLowerCase()) != -1;
      }).each(function (i, elem) {
    //var reg = RegExp(searchText, 'gi')
    
    
        $(this.children).show();
    $(this).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>');
        $(this).siblings("span.comboTreeParentPlus").show();
    
      });
  
  var visiblelist = this._elemItems.find("span.comboTreeItemTitle:visible");
  if(visiblelist.length == 0)
  {
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text('No results found for "'+searchText+'"');
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('250px');
  }
  else
  {
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');			
  }
    }
    else{
    this._elemFilterInputCancel.hide();
  this._elemItemsTitle.show();
      this._elemItemsTitle.siblings("span.comboTreeParentPlus").show();
  
  
  this._elemItemsTitle.each(function (i, elem) {
    if($(elem).parent().hasClass("ComboTreeItemParent"))
    {
      $(elem).parent().find("ul").show();
      _this.toggleSelectionTree($(elem).parent('li'));
      
    }
      });
  
  
    }
  
  }

ComboTree.prototype.processSelected = function () {
  let elements = this._elemItemsTitle;
  let selectedItem = this._selectedItem;
  let selectedItems = this._selectedItems;
  this.options.selected.forEach(function(element) {
    let selected = $(elements).filter(function(){
      return $(this).data('id') == element;
    });

    if(selected.length > 0){
      $(selected).find('input').attr('checked', true);

      selectedItem = {
        id: selected.data("id"),
        title: selected.text()
      };
      selectedItems.push(selectedItem);
    }
  });

  //Without this it doesn't work
  this._selectedItem = selectedItem;

  this.refreshInputVal();
};


// METHODS


ComboTree.prototype.findItembyId = function(itemId, source) {
  if (itemId && source) {
    for (let i=0; i<source.length; i++) {
      if (source[i].id == itemId)
        return {id: source[i].id, title: source[i].title};
      if (source[i].hasOwnProperty("subs")) {
        let found = this.findItembyId(itemId, source[i].subs);
        if (found)
          return found;
      }
    }
  }
  return null;
}

// Returns selected id array or null
ComboTree.prototype.getSelectedIds = function () {
  if (this.options.isMultiple && this._selectedItems.length>0){
    var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.id);
  var tmpChild = this._selectedChildItems.map(a => a.id);
  var tmpJson = {
    Parent : tmpParent,
    Child : tmpChild
    
  };
    for (var i=0; i<this._selectedItems.length; i++)
      tmpArr.push(this._selectedItems[i].id);

    return tmpJson;
  }
  else if (!this.options.isMultiple && this._selectedItem.hasOwnProperty('id')){
    return [this._selectedItem.id];
  }
  return null;
};

// Retuns Array (multiple), Integer (single), or False (No choice)
ComboTree.prototype.getSelectedNames = function () {
  
  if (this.options.isMultiple && this._selectedItems.length>0){
    var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.title);
  var tmpChild = this._selectedChildItems.map(a => a.title);
  var tmpJson = {
    Parent : tmpParent,
    Child : tmpChild
    
  };
    for (let i=0; i<this._selectedItems.length; i++)
      tmpArr.push(this._selectedItems[i].title);

    return tmpJson;
  }
  else if (!this.options.isMultiple && this._selectedItem.hasOwnProperty('id')){
    return this._selectedItem.title;
  }
  return null;
};

ComboTree.prototype.setSource = function(source) {
  this._selectedItems = [];

  this.destroy();
  this.options.source = source;
  this.constructorFunc(this.elemInput, this.options);
};

ComboTree.prototype.clearSelection = function() {
  for (let i=0; i<this._selectedItems.length; i++) {
    let itemElemSelector = "#" + this.comboTreeId + 'Li' + this._selectedItems[i].id;
    itemElemSelector = itemElemSelector.replaceAll('.', '\\.')
    let itemElem = $(itemElemSelector);
    $(itemElem).find("input").prop('checked', false);
  $(itemElem).find("input").prop('indeterminate', false);
  }
  this._selectedItems = [];
this._selectedChildItems = [];
this._selectedParentItems = [];
  this._selectedItem = {};
  if(this._elemSelectAllInput){
    this._elemSelectAllInput.prop("checked", false);
  }
  this.refreshInputVal();
};

ComboTree.prototype.setSelection = function (selectionIdList) {
  if (selectionIdList && selectionIdList.length && selectionIdList.length > 0) {
    for (let i = 0; i < selectionIdList.length; i++) {
      let selectedItem = this.findItembyId(selectionIdList[i], this.options.source);

      if (selectedItem) {
        let check = this.isItemInArray(selectedItem, this.options.source);
        if (check) {
          var index = this.isItemInArray(selectedItem, this._selectedItems);
          if (!index) {
            let selectedItemElemSelector = "#" + this.comboTreeId + 'Li' + selectionIdList[i];
            selectedItemElemSelector = selectedItemElemSelector.replaceAll('.', '\\.');
            let selectedItemElem = $(selectedItemElemSelector);

            this._selectedItems.push(selectedItem);
            this._selectedItem = selectedItem;
            // If cascadeSelect is true, check all children, otherwise just check this item
            if (this.options.cascadeSelect) {
              $(selectedItemElem).find("input").prop('checked', true);
            } else {
              $(selectedItemElem).find("input:first").prop('checked', true);
            }
          }
        }
      }
    }
  }

  this.refreshInputVal();
};

ComboTree.prototype.selectAll = function () {
  // clear
  for (let i = 0; i < this._selectedItems.length; i++) {
    let itemElem = $('#' + this.comboTreeId + 'Li' + this._selectedItems[i].id);
    $(itemElem).find('input').prop('checked', false);
  }
  this._selectedItems = [];
  // select all
  let selected = this._selectedItems;
  $('#' + this.comboTreeId + 'ComboTreeSourceUlmain')
      .find("input[type='checkbox']")
      .each(function (idx, elem) {
        let $itemElem = $(elem).parent('span').first();
        let item = {
          id: $itemElem.data('id'),
          title: $itemElem.text(),
        };
        $(elem).prop('checked', true);
        selected.push(item);
      });
  if(this._elemSelectAllInput){
    this._elemSelectAllInput.prop("checked", true);
  }
  this.refreshInputVal();
};

// EVENTS

ComboTree.prototype.onChange = function(callBack) {
  if (callBack && typeof callBack === "function")
    this.changeHandler = callBack;
};



// -----

$.fn[comboTreePlugin] = function (options) {
  var ctArr = [];
  this.each(function () {
    if (!$.data(this, 'plugin_' + comboTreePlugin)) {
      $.data(this, 'plugin_' + comboTreePlugin, new ComboTree( this, options));
      ctArr.push($(this).data()['plugin_' + comboTreePlugin]);
    }
  });

  if (this.length == 1)
    return ctArr[0];
  else
    return ctArr;
}

})( jQuery, window, document );



/*** Multi - Select Tree DropDown ***/

/*** Pagination ***/


(function ($, window, document) {
"use strict";

const Paginator = function (element, options) {
  this.el = $(element);
  this.options = $.extend({}, $.fn.bngPagination.defaults, options);

  this.startPage = 1;
  this.currentPage = 1;
  this.totalItems = this.options.items ? this.options.items.length :  this.el.children().length;

  const availablePage = Math.ceil(this.totalItems / this.options.perPage);
  if (availablePage < this.options.limitPagination) {
    this.options.limitPagination = availablePage;
  }

  this.totalPages = Math.max(availablePage, this.options.limitPagination);
  this.container = $("<nav></nav>")
    .addClass(this.options.containerClass)
    .attr("aria-label", "Page navigation");
  this.ul = $("<ul></ul>").addClass(this.options.ulClass);

  this.show(this.startPage);

  return this;
};

Paginator.prototype = {
  pagination: function (type, page) {
    const _self = this;
    const button = $("<button></button>");
    const a = $("<span></span>")
      .attr("href", "#")
      .addClass(_self.options.linkClass);
  if(type === "first")
  {
    a.addClass("comicon first_page");
    
  }
  else if(type === "prev")
  {
    a.addClass("comicon chevron_left");
  }
  else if(type === "next")
  {
    a.addClass("comicon chevron_right");
  }
  else if(type === "last")
  {
    a.addClass("comicon last_page");
  }
    let text;
    if (type === "number") {
      text = page;
    } else if (type === "pageNumbers") {
      // get the page numbers text
      text = _self.paginationNumbersText();
    } else {
      text = _self.paginationText(type);
    }

    button.addClass(_self.options.liClass).addClass(type);
    button.data("pagination-type", type);
    button.data("page", page);
    button.append(a.html(text));

    return button;
  },

pageNumberHtml: function (type, page) {
    const _self = this;
    const div = $("<div style='margin: 0 0 0 0.5em;'></div>");
    const span = $("<span></span>")
      .addClass("bng-currentPage");
  const span2 = $("<span></span>")
      .addClass("lastPage");
  const inp = $("<input></input>")
    .addClass("field field-text bng-goto-inp");
  
  inp.val(_self.currentPage);
  span.append(inp);
  span2.text(_self.totalPages === 0 ? 1 : _self.totalPages);
    
  div.data("pagination-type", type);
   div.data("page", page);
  div.append(span);
  div.append(" / ");
  div.append(span2);
 

    return div;
  },

  paginationText: function (type) {
    return this.options[type + "Text"];
  },

  paginationNumbersText: function () {
    const _self = this;
    return "Page " + _self.currentPage + "/" + _self.totalPages;
  },

  buildPagination: function () {
    const _self = this;
    const pagination = [];
    const prev =
      this.currentPage - 1 < _self.startPage
        ? _self.startPage
        : _self.currentPage - 1;
    const next =
      _self.currentPage + 1 > _self.totalPages
        ? _self.totalPages
        : _self.currentPage + 1;

    let start, end;
    const limit = _self.options.limitPagination;

    if (limit) {
      if (_self.currentPage <= Math.ceil(limit / 2) + 1) {
        start = 1;
        end = limit;
      } else if (
        _self.currentPage + Math.floor(limit / 2) >=
        _self.totalPages
      ) {
        start = _self.totalPages + 1 - limit;
        end = _self.totalPages;
      } else {
        start = _self.currentPage - Math.ceil(limit / 2);
        end = _self.currentPage + Math.floor(limit / 2);
      }
    } else {
      start = _self.startPage;
      end = _self.totalPages;
    }

    // "First" button
    if (_self.options.firstLast) {
      pagination.push(_self.pagination("first", _self.startPage));
    }

    // "Prev" button
    if (_self.options.prevNext) {
      pagination.push(_self.pagination("prev", prev));
    }

    // Pagination
    /*for (let i = start; i <= end; i++) {
      pagination.push(_self.pagination("number", i));
    }*/
  
  // page numbers
    if (_self.options.pageNumbers) {
      pagination.push(_self.pageNumberHtml("pageNumbers", _self.currentPage));
    }

    // "Next" button
    if (_self.options.prevNext) {
      pagination.push(_self.pagination("next", next));
    }

    // "Last" button
    if (_self.options.firstLast) {
      pagination.push(_self.pagination("last", _self.totalPages));
    }

    

    return pagination;
  },

  render: function (page) {
    const _self = this;
    const options = _self.options;
    const pagination = _self.buildPagination();
  page = parseInt(page);
    // Remove children before re-render (prevent duplicate)
    _self.ul.children().remove();
  _self.el.siblings( ".bng-pagination-container" ).remove();
  //console.log(_self.el.next());
  //$(".bng-pagination-container").remove();
    _self.ul.append(pagination);

    // Manage active DOM
    const startAt = page === 1 ? 0 : (page - 1) * options.perPage;
    const endAt = page * options.perPage > _self.totalItems ? _self.totalItems :  page * options.perPage;
  const startNo = _self.totalItems === 0 ? parseInt(startAt) :  parseInt(startAt) +1;
// records count
_self.ul.append('<div class="bng-pagination-Total">Records '+ startNo +' - ' +endAt +' / '+ _self.totalItems +'</div>');


    _self.el.children().hide();
  if(this.options.items)
  {
    
    this.options.items.slice(startAt, endAt).show();
  }
  else
      _self.el.children().slice(startAt, endAt).show();

    // Manage active state
    _self.ul.children().each(function () {
      const _li = $(this);
      const type = _li.data("pagination-type");
  
      switch (type) {
        case "pageNumbers":
    
          if (_li.data("page") === page) {
            _li.addClass(options.activeClass);
          }
          break;
        case "first":
          page === _self.startPage &&
            _li
              .toggleClass(options.disabledClass)
              .attr("disabled", "true");
          break;
        case "last":
          page === _self.totalPages &&
            _li
              .toggleClass(options.disabledClass)
              .attr("disabled", "true");
          break;
        case "prev":
          page - 1 < _self.startPage &&
            _li
              .toggleClass(options.disabledClass)
              .attr("disabled", "true");
          break;
        case "next":
    
          page + 1 > _self.totalPages &&
            _li
              .toggleClass(options.disabledClass)
              .attr("disabled", "true");
          break;
        default:
          break;
      }
    });

    // If insertAfter is defined
    if (options.insertAfter) {
      _self.container.append(_self.ul).insertAfter($(options.insertAfter));
    } else {
      _self.el.after(_self.container.append(_self.ul));
    }
  
  },

  handle: function () {
    const _self = this;
  
    _self.container.find("button").each(function () {
      const _li = $(this);

      _li.click(function (e) {
        e.preventDefault();
        const page = _li.data("page");
    
        _self.currentPage = page;
        _self.show(page);
    if(_self.options.navbtnclick)
    {
    eval(_self.options.navbtnclick + "()");
    }
      });
    });
  
  _self.container.on('keydown', '.bng-goto-inp', function (e) {
          if (e.shiftKey || !((e.keyCode > 95 && e.keyCode < 106) || (e.which > 95 && e.which < 106)
              || (e.keyCode > 47 && e.keyCode < 58) || (e.which > 47 && e.which < 58)
              || e.keyCode == 8 || e.which == 18
              || e.keyCode == 13 || e.which == 13)) return false;

          if (e.which == 13 || e.keyCode == 13) {
              e.preventDefault();
              e.stopImmediatePropagation();
    
      var page =parseInt($(this).val());
      
      if(parseInt(page)> _self.totalPages)
        page = _self.totalPages;
      if(parseInt(page)< _self.startPage)
        page = _self.startPage;
      _self.currentPage = page;
              _self.show(page);
      if(_self.options.navbtnclick)
        eval(_self.options.navbtnclick + "()");
          }
      });
  
  },

  show: function (page) {
    const _self = this;

    _self.render(page);
    _self.handle();
  
  },

};

$.fn.bngPagination = function (options) {
  const _self = this;
  return _self.each(function () {
    return new Paginator(this, options);
  });
};

$.fn.bngPagination.defaults = {
  perPage: 10,
  limitPagination: false,
  prevNext: true,
  firstLast: true,
  prevText: "",
  nextText: "",
  firstText: "",
  lastText: "",
  containerClass: "bng-pagination-container",
  ulClass: "bng-pagination",
  liClass: "bng-page-item",
  linkClass: "bng-page-link",
  activeClass: "active",
  disabledClass: "disabled",
  insertAfter: null,
  pageNumbers: true,
items:null,
navbtnclick : ""
};
})(jQuery, window, document);


/*** Pagination ***/
/*** Filter Popup ***/

;(function ( $, window, document, undefined ) {

// Default settings
var comboFilterPlugin = 'comboFilter',
  defaults = {
    source: [],
    isMultiple: true,
    cascadeSelect: true,
    selected: [],
    collapse: true,
    selectableLastNode: false,
    withSelectAll: false,
    isolatedSelectable: false,
  width:'285px',
  withButtonSection: false,
  onApplybtnclick : function(){
    // This is intentional
  },
  headertext : '',
  isGrouped : false
  };

// LIFE CYCLE
function ComboFilter( element, options ) {

  this.options = $.extend( {}, defaults, options) ;
  this._defaults = defaults;
  this._name = comboFilterPlugin;

  this.constructorFunc(element, options);
}

ComboFilter.prototype.constructorFunc = function(element, options){
  this.elemPopup = element;
  this._elemPopup = $(element);

  this.init();
}

ComboFilter.prototype.init = function () {
  // Setting Doms
  this.comboFilterId = 'ComboFilter' + Math.floor(Math.random() * 999999);

  if (this._elemPopup.attr('id') === undefined)
    this._elemPopup.attr('id', this.comboFilterId + 'Popup');
  this.elemPopupId = this._elemPopup.attr('id');
this._elemPopup.append('<div id="' + this.comboFilterId + 'popup2-modal-content" class="popup2-modal-content"></div>');
this._elemPopupParentContentID = $('#' + this.comboFilterId + 'popup2-modal-content');
this._elemPopupParentContentID.append('<div class="popup2-modal-header"><span class="popup2-modal-header-text">'+this.options.headertext+'<em class="comicon popup2-close '+ this.comboFilterId  +'close-button">close</em></div>');
this._elemPopupParentContentID.append('<div id="' + this.comboFilterId + '-content" class="filter-content"></div>');
this._elemPopupContentId =  $('#' + this.comboFilterId + '-content');
this._elemHeaderClosebtn = $('.' + this.comboFilterId + 'close-button');

this._elemPopupParentContentID.width(this.options.width);
this._elemPopupContentId.append('<div id="'+ this.comboFilterId +'form" class="popup2-modal-form"></div>');
this._elemPopupForm = $('#' + this.comboFilterId + 'form');
this._elemPopupForm.append('<div class="selected-filters"><div id="'+ this.comboFilterId +'selectedfilter-chips" class="'+ this.comboFilterId +'selectedfilter-chips"></div></div>');
this._elemChipsClass =  this.comboFilterId + 'selectedfilter-chips';
this._elemChipsID = $('#' + this.comboFilterId + 'selectedfilter-chips');
this._elemChipsID.css({"max-height": "10em","overflow-y": "auto","padding": "2px 0px"});
this._elemPopupForm.append('<div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:12px;"><span id="'+ this.comboFilterId +'SelectAll" class="btn btn-tertiary" style="color:#008CC8 ;border-bottom: 1px solid #008CC8">Select All</span><span id="'+ this.comboFilterId +'ClearAll" class="btn btn-tertiary" style="color:#008CC8 ;border-bottom: 1px solid #008CC8">Clear Filters</span></div>');
  this._elemSelectALLBtn = $('#' + this.comboFilterId + 'SelectAll');;
this._elemCancelAllBtn = $('#' + this.comboFilterId + 'ClearAll');;

this._elemPopupForm.append('<div id="' + this.comboFilterId + 'DropDownContainer" class="comboTreeDropDownContainer"></div>');
this._elemPopupForm.css({padding:'24px'});
  // DORP DOWN AREA
  this._elemDropDownContainer = $('#' + this.comboFilterId + 'DropDownContainer');
this._elemDropDownContainer.show();
this._elemDropDownContainer.css({'position': 'relative','border-radius':'4px','border':'1px solid #A8AFB5'});
  this._elemDropDownContainer.append(this.createSourceHTML());
  //this._elemFilterInput = this.options.isMultiple ? $('#' + this.comboFilterId + 'MultiFilter') : null;
  this._elemSourceUl = $('#' + this.comboFilterId + 'ComboTreeSourceUl');
this._elemItems = this._elemDropDownContainer.find('li');
  this._elemItemsTitle = this._elemDropDownContainer.find('span.comboTreeItemTitle');
//this._elemFilterInputCancel = this._elemDropDownContainer.find(".comboTreemultiplesFilter").find(".cancel");
//this._elemFilterInputCancel.hide();


this._elemPopupContentId.append('<div class="popup2-modal-footer"><button id="'+ this.comboFilterId  +'Apply" class="btn btn-primary popup2-cancel" type="button">Apply</button></div>');
  this._elemApplyButton = $('#' + this.comboFilterId + 'Apply');
// VARIABLES
  this._selectedItem = {};
  this._selectedItems = [];
this._selectedParentItems = [];
this._selectedChildItems = [];

  this.processSelected();

  this.bindings();

};

ComboFilter.prototype.unbind = function () {
  
  this._elemItems.off('click');
  this._elemItemsTitle.off('click');
  this._elemItemsTitle.off("mousemove");
//this._elemFilterInputCancel.off('click');

  //$(document).off('mouseup.' + this.comboFilterId);
}

ComboFilter.prototype.destroy = function () {
  this.unbind();
  //this._elemWrapper.before(this._elemPopup);
  this._elemPopupParentContentID.remove();
  this._elemPopup.removeData('plugin_' + comboFilterPlugin);
}



// CREATE DOM HTMLs

ComboFilter.prototype.removeSourceHTML = function () {
  this._elemDropDownContainer.html('');
};

ComboFilter.prototype.createSourceHTML = function () {
  var sourceHTML = '';
  /*if (this.options.isMultiple)
    sourceHTML += this.createFilterHTMLForMultiSelect();*/
  if (this.options.isMultiple && this.options.withSelectAll)
    sourceHTML += this.createSelectAllHTMLForMultiSelect();
  sourceHTML += this.createSourceSubItemsHTML(this.options.source);
if	(this.options.withButtonSection)
  sourceHTML += this.createSourceButtonHTML();
  return sourceHTML;
};

ComboFilter.prototype.createFilterHTMLForMultiSelect = function (){
  return '<div class="comboTreemultiplesFilter"><span style="font-size:24px;color: #7D8790;position: absolute;padding: 4px;" class="comicon search"></span><input id="' + this.comboFilterId + 'MultiFilter" type="text" class="multiplesFilter" placeholder="Search"/><span style="font-size:16px;color: #7D8790;position: absolute;right: 12px;margin: 8px;" class="comicon cancel"></span></div><div class="NoResultsFoundcomboTree" ></div>';
}

ComboFilter.prototype.createSourceButtonHTML = function (){
  return '<div  class="comboTreeButtonContainer"><div class="comboTreeCancelButtonGroup"><div id = "' + this.comboFilterId + 'Cancel' + '" style="color: #008CC8;border-bottom-color: #008CC8;" class="btn btn-tertiary comboTreeCancelButton">Clear</div></div><div class="comboTreeShowButtonGroup"><div id = "' + this.comboFilterId + 'ShowResult' + '" class="btn btn-primary btn-inactive-primary comboTreeShowButton">Show Results</div></div></div>';
}



ComboFilter.prototype.createSelectAllHTMLForMultiSelect = function () {
  return '<label class="selectAll"><input type="checkbox" id="' + this.comboFilterId + 'SelectAll' + '">[Select All]</label>';
}

ComboFilter.prototype.createSourceSubItemsHTML = function (subItems, parentId, collapse=false) {
  var subItemsHtml = (parentId ? '' : '<div class="comboTreeDropDownContainerUL" style="max-height:320px;">' )+'<UL id="' + this.comboFilterId + 'ComboTreeSourceUl' + (parentId ? parentId : 'main' ) + '" style="' + (((this.options.collapse||collapse) && parentId) ? 'display:none;' : '')  + '">';
  for (var i=0; i<subItems.length; i++){
    subItemsHtml += this.createSourceItemHTML(subItems[i]);
  }
  subItemsHtml += '</UL>'+(parentId ? '' : '</div>' );
  return subItemsHtml;
}

ComboFilter.prototype.createSourceItemHTML = function (sourceItem) {
  var itemHtml = "",
    isThereSubs = sourceItem.hasOwnProperty("subs"),
      collapse = sourceItem.hasOwnProperty("collapse") ? sourceItem.hasOwnProperty("collapse") : false;
  let isSelectable = (sourceItem.isSelectable === undefined ? true : sourceItem.isSelectable);
  let selectableClass = (isSelectable || isThereSubs) ? 'selectable' : 'not-selectable';
  if (this.options.isolatedSelectable) {
    selectableClass = isSelectable ? 'selectable' : 'not-selectable';
  }
  let selectableLastNode = (this.options.selectableLastNode !== undefined && isThereSubs) ? this.options.selectableLastNode : false;

  itemHtml += '<LI id="' + this.comboFilterId + 'Li' + sourceItem.id + '" class="ComboTreeItem' + (isThereSubs?'Parent':'Chlid') + '"> ';


  if (this.options.isMultiple)
    itemHtml += '<span data-id="' + sourceItem.id + '" data-selectable="' + isSelectable + '" class="comboTreeItemTitle ' + selectableClass + '">' + (!selectableLastNode && isSelectable ? '<input type="checkbox" /><span></span>' : '') + sourceItem.title + '</span>';
  else
    itemHtml += '<span data-id="' + sourceItem.id + '" data-selectable="' + isSelectable + '" class="comboTreeItemTitle ' + selectableClass + '">' + sourceItem.title + '</span>';

  if (isThereSubs)
{
  
  if(sourceItem.subs.length>0)
  {
    itemHtml += '<span class="comboTreeParentPlus">' + (this.options.collapse || collapse ? '<span class="comicon expand_more" style="font-size:16px"></span>' : '<span class="comicon expand_less" style="font-size:16px"></span>') + '</span>'; // itemHtml += '<span class="comboTreeParentPlus">' + (this.options.collapse ? '+' : '&minus;') + '</span>';
  }
} 
  if (isThereSubs)
    itemHtml += this.createSourceSubItemsHTML(sourceItem.subs, sourceItem.id, collapse);

  itemHtml += '</LI>';
  return itemHtml;
};

ComboFilter.prototype.createChip = function(appendAfter,value,id){
  var _this = this;
  var node = document.createElement("div"); 
  node.className = "chip2";
  node.innerHTML = value;
  node.dataset.id = id;
  //create child node for close icon
  var nodeicon = document.createElement("em");
  nodeicon.className = "comicon chip2close";
  nodeicon.innerHTML = "close";
  nodeicon.style.cursor = "pointer";
  nodeicon.onclick = function(){this.parentElement.remove();
  
  var chip = $(this).parent();
  var name = $(chip).attr('data-id');

    _this._elemItemsTitle.each(function() {
    if ($(this).find('input:checked').length > 0 && $(this).attr('data-id') == name) {

      _this.multiItemClick($(this));
    }
    });
  
  };
  node.appendChild(nodeicon);
  var parent = document.getElementsByClassName(appendAfter)[0];
  //check if class name exists.
  if(parent !== undefined){
    parent.appendChild(node);
  }
}



// BINDINGS

ComboFilter.prototype.bindings = function () {
  var _this = this;

  
this._elemSelectALLBtn.on('click', function(e){
  e.stopPropagation();
  _this.selectAll();
  
});

this._elemCancelAllBtn.on('click', function(e){
  e.stopPropagation();
  _this.clearSelection();
  
});

this._elemApplyButton.on('click', function(e){
    e.stopPropagation();
  _this._elemItemsTitle.each(function (i, elem) {
    if($(elem).parent().hasClass("ComboTreeItemParent"))
    {
      $(elem).parent().find("ul").show();
      _this.toggleSelectionTree($(elem).parent('li'));
      
    }
      });
    _this._elemPopup.hide();
  _this.Applybtnclick();
  });
  
this._elemHeaderClosebtn.on('click', function(e){
    e.stopPropagation();
  _this._elemItemsTitle.each(function (i, elem) {
    if($(elem).parent().hasClass("ComboTreeItemParent"))
    {
      $(elem).parent().find("ul").show();
      _this.toggleSelectionTree($(elem).parent('li'));
      
    }
      });
    _this._elemPopup.hide();
  });
  
  this._elemItems.on('click', function(e){
    e.stopPropagation();
    if ($(this).hasClass('ComboTreeItemParent')){
      _this.toggleSelectionTree(this);
    }
  });
  this._elemItemsTitle.on('click', function(e){
    e.stopPropagation();
    if (_this.options.isMultiple)
      _this.multiItemClick(this);
    else
      _this.singleItemClick(this);
  });
  this._elemItemsTitle.on("mousemove", function (e) {
    e.stopPropagation();
    
  });
  

  // KEY BINDINGS
  

 
};





// EVENTS HERE


ComboFilter.prototype.Applybtnclick = function () {
this.options.onApplybtnclick();
};

// Selection Tree Open/Close
ComboFilter.prototype.toggleSelectionTree = function (item, direction) {
  var subMenu = $(item).children('ul')[0];
  if (direction === undefined){
    if ($(subMenu).is(':visible'))
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_more" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("+");
    else
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("&minus;");

    $(subMenu).slideToggle(50);
  }
  else if (direction == 1 && !$(subMenu).is(':visible')){
    $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("&minus;");
    $(subMenu).slideDown(50);
  }
  else if (direction == -1){
    if ($(subMenu).is(':visible')){
      $(item).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>'); //$(item).children('span.comboTreeParentPlus').html("+");
      $(subMenu).slideUp(50);
    }
    else {
      this.dropDownMenuHoverToParentItem(item);
    }
  }

};


// SELECTION FUNCTIONS
ComboFilter.prototype.selectMultipleItem = function(ctItem){

  if (this.options.selectableLastNode && $(ctItem).parent('li').hasClass('ComboTreeItemParent')) {

    this.toggleSelectionTree($(ctItem).parent('li'));

    return false;
  }

  if ($(ctItem).data("selectable") == true) {
    this._selectedItem = {
      id: $(ctItem).attr("data-id"),
      title: $(ctItem).text()
    };
    let check = this.isItemInArray(this._selectedItem, this.options.source);
    if (check) {
      var index = this.isItemInArray(this._selectedItem, this._selectedItems);
      if (index) {
        this._selectedItems.splice(parseInt(index), 1);
    
   if($(ctItem).parent('li').hasClass('ComboTreeItemParent'))
    {
    //to maintain parent values
    
    var parentindex = this.isItemInArray(this._selectedItem, this._selectedParentItems);
    if(parentindex)
    {
      this._selectedParentItems.splice(parseInt(parentindex), 1);
    }
    }
  else
  {
    //to maintain child values
    var childindex = this.isItemInArray(this._selectedItem, this._selectedChildItems);
    if(childindex)
    {
      this._selectedChildItems.splice(parseInt(childindex), 1);
    }
  } 
    
        $(ctItem).find("input").prop('checked', false);
    
    
      } else {
        this._selectedItems.push(this._selectedItem);
    
    
  if($(ctItem).parent('li').hasClass('ComboTreeItemParent'))
  {
    this._selectedParentItems.push(this._selectedItem);
    
  }
  else
  {
    this._selectedChildItems.push(this._selectedItem);
  } 
      $(ctItem).find("input").prop('checked', true);
  
      }
    } // if check
  } // if selectable
};

ComboFilter.prototype.singleItemClick = function (ctItem) {
  if ($(ctItem).data("selectable") == true) {
    this._selectedItem = {
      id: $(ctItem).attr("data-id"),
      title: $(ctItem).text()
    };
  } // if selectable

  this.refreshInputVal();
  //.closeDropDownMenu();
};

ComboFilter.prototype.multiItemClick = function (ctItem) {
var _this = this;
this.selectMultipleItem(ctItem);
var parentLi = $(ctItem).parents('li.ComboTreeItemParent').first();
var parentCheckbox = parentLi.find('input[type="checkbox"]').first();
  if (this.options.cascadeSelect) {
    if ($(ctItem).parent('li').hasClass('ComboTreeItemParent')) {
  $(parentCheckbox).prop('indeterminate', false);
      var subMenu = $(ctItem).parent('li').children('ul').first().find('input[type="checkbox"]');
      subMenu.each(function() {
        var $input = $(this)
    
        if ($(ctItem).children('input[type="checkbox"]').first().prop("checked")!==$input.prop('checked')) {
          $input.prop('checked', !$(ctItem).children('input[type="checkbox"]').first().prop("checked"));
    _this.selectMultipleItem($input.parent());
        }
      });
    }
  else
  {
  
  if(parentLi.length > 0)
  {
    var parentItem = parentLi.find('span').first();
    var childCount = $(parentLi).find("ul").find("li").length;
    var childSelected = $(parentLi).children('ul').first().find('input[type="checkbox"]:checked').length;
    if(childSelected == childCount)
    {
      $(parentCheckbox).prop('indeterminate', false);
      if(childCount == 1)
      {
        _this.selectMultipleItem(parentItem);
      }
    }
    else if(childSelected == 0 )
    {

      $(parentCheckbox).prop('indeterminate', false);
      _this.selectMultipleItem(parentItem);
    }
    else if($(parentCheckbox).prop('indeterminate') != true)
    {
      $(parentCheckbox).prop('indeterminate', true);
      if($(parentCheckbox).prop('checked') != true)
      {
        _this.selectMultipleItem(parentItem);
      }
    }
  }
    
  }
  }
  this.refreshInputVal();
};


// recursive search for item in arr
ComboFilter.prototype.isItemInArray = function (item, arr) {
  for (var i=0; i<arr.length; i++) {
    if (item.id == arr[i].id && item.title == arr[i].title)
      return i + "";

    if (arr[i].hasOwnProperty("subs")) {
      let found = this.isItemInArray(item, arr[i].subs);
      if (found)
        return found;
    }
  }
  return false;
};

ComboFilter.prototype.refreshInputVal = function () {
  
this._elemChipsID.html('');
  if (this.options.isGrouped) {
  if(this._selectedChildItems.length > 0)
  {
    this._elemChipsID.css({"margin-bottom":"24px"});
  }
  else
  {
    this._elemChipsID.css({"margin-bottom":"0px"});
  }
  for (var i=0; i<this._selectedChildItems.length; i++){
    this.createChip(this._elemChipsClass,this._selectedChildItems[i].title,this._selectedChildItems[i].id);
    }
  
  }
  else {
    if(this._selectedParentItems.length > 0)
  {
    this._elemChipsID.css({"margin-bottom":"24px"});
  }
  else
  {
    this._elemChipsID.css({"margin-bottom":"0px"});
  }
  for (var i=0; i<this._selectedParentItems.length; i++){
    this.createChip(this._elemChipsClass,this._selectedParentItems[i].title,this._selectedParentItems[i].id);
    }
  }

  //this._elemPopup.text(tmpTitle);
  this._elemPopup.trigger('change');
  if (this.changeHandler)
    this.changeHandler();
};


  /*ComboFilter.prototype.filterDropDownMenu = function () {
    var searchText =  '';
  var _this = this;
    if (!this.options.isMultiple)
      searchText = this._elemPopup.val();
    else
      searchText = $("#" + this.comboFilterId + "MultiFilter").val();

    if (searchText != ""){
  this._elemFilterInputCancel.show();
      this._elemItemsTitle.hide();
      this._elemItemsTitle.siblings("span.comboTreeParentPlus").hide();
      var list = this._elemItems.filter(function(index, item){
        return $(item).text().toLowerCase().indexOf(searchText.toLowerCase()) != -1;
      }).each(function (i, elem) {
        $(this.children).show();
    $(this).children('span.comboTreeParentPlus').html('<span class="comicon expand_less" style="font-size:16px"></span>');
        $(this).siblings("span.comboTreeParentPlus").show();
      });
  
  var visiblelist = this._elemItems.find("span.comboTreeItemTitle:visible");
  if(visiblelist.length == 0)
  {
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text('No results found for "'+searchText+'"');
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('250px');
  }
  else
  {
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").text("");
    this._elemDropDownContainer.find(".NoResultsFoundcomboTree").height('unset');			
  }
    }
    else{
    this._elemFilterInputCancel.hide();
  this._elemItemsTitle.show();
      this._elemItemsTitle.siblings("span.comboTreeParentPlus").show();
  this._elemItemsTitle.each(function (i, elem) {
    if($(elem).parent().hasClass("ComboTreeItemParent"))
    {
      $(elem).parent().find("ul").show();
      _this.toggleSelectionTree($(elem).parent('li'));
      
    }
      });
  
  
    }
  
  }*/

ComboFilter.prototype.processSelected = function () {
  let elements = this._elemItemsTitle;
  let selectedItem = this._selectedItem;
  let selectedItems = this._selectedItems;
  this.options.selected.forEach(function(element) {
    let selected = $(elements).filter(function(){
      return $(this).data('id') == element;
    });

    if(selected.length > 0){
      $(selected).find('input').attr('checked', true);

      selectedItem = {
        id: selected.data("id"),
        title: selected.text()
      };
      selectedItems.push(selectedItem);
    }
  });

  //Without this it doesn't work
  this._selectedItem = selectedItem;

  this.refreshInputVal();
};


// METHODS


ComboFilter.prototype.findItembyId = function(itemId, source) {
  if (itemId && source) {
    for (let i=0; i<source.length; i++) {
      if (source[i].id == itemId)
        return {id: source[i].id, title: source[i].title};
      if (source[i].hasOwnProperty("subs")) {
        let found = this.findItembyId(itemId, source[i].subs);
        if (found)
          return found;
      }
    }
  }
  return null;
}

// Returns selected id array or null
ComboFilter.prototype.getSelectedIds = function () {
  if (this.options.isGrouped && this._selectedItems.length>0){
    var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.id);
  var tmpChild = this._selectedChildItems.map(a => a.id);
  var tmpJson = {
    Parent : tmpParent,
    Child : tmpChild
    
  };
    

    return tmpJson;
  }
  else if (!this.options.isGrouped && this._selectedItems.length>0  ){
    var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.id);
  var tmpJson = {
    SelectedItems : tmpParent 
  };


    return tmpJson;
  }
  return null;
};

// Retuns Array (multiple), Integer (single), or False (No choice)
ComboFilter.prototype.getSelectedNames = function () {
  
  if (this.options.isGrouped && this._selectedItems.length>0){
    var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.title);
  var tmpChild = this._selectedChildItems.map(a => a.title);
  var tmpJson = {
    Parent : tmpParent,
    Child : tmpChild
    
  };

    return tmpJson;
  }
  else if (!this.options.isGrouped && this._selectedItems.length>0 ){
  var tmpArr = [];
  var tmpParent = this._selectedParentItems.map(a => a.title);
  var tmpJson = {
    SelectedItems : tmpParent 
  };


    return tmpJson;
    
  }
  return null;
};

ComboFilter.prototype.setSource = function(source) {
  this._selectedItems = [];

  this.destroy();
  this.options.source = source;
  this.constructorFunc(this.elemPopup, this.options);
};

ComboFilter.prototype.clearSelection = function() {
  for (let i=0; i<this._selectedItems.length; i++) {
    let itemElemSelector = "#" + this.comboFilterId + 'Li' + this._selectedItems[i].id;
    itemElemSelector = itemElemSelector.replaceAll('.', '\\.')
    let itemElem = $(itemElemSelector);
    $(itemElem).find("input").prop('checked', false);
  $(itemElem).find("input").prop('indeterminate', false);
  }
  this._selectedItems = [];
this._selectedChildItems = [];
this._selectedParentItems = [];
  this._selectedItem = {};
  if(this._elemSelectAllInput){
    this._elemSelectAllInput.prop("checked", false);
  }
  this.refreshInputVal();
};

ComboFilter.prototype.setSelection = function (selectionIdList) {
  if (selectionIdList && selectionIdList.length && selectionIdList.length > 0) {
    for (let i = 0; i < selectionIdList.length; i++) {
      let selectedItem = this.findItembyId(selectionIdList[i], this.options.source);

      if (selectedItem) {
        let check = this.isItemInArray(selectedItem, this.options.source);
        if (check) {
          var index = this.isItemInArray(selectedItem, this._selectedItems);
          if (!index) {
            let selectedItemElemSelector = "#" + this.comboFilterId + 'Li' + selectionIdList[i];
            selectedItemElemSelector = selectedItemElemSelector.replaceAll('.', '\\.');
            let selectedItemElem = $(selectedItemElemSelector);

            this._selectedItems.push(selectedItem);
            this._selectedItem = selectedItem;
            // If cascadeSelect is true, check all children, otherwise just check this item
            if (this.options.cascadeSelect) {
              $(selectedItemElem).find("input").prop('checked', true);
            } else {
              $(selectedItemElem).find("input:first").prop('checked', true);
            }
          }
        }
      }
    }
  }

  this.refreshInputVal();
};

ComboFilter.prototype.selectAll = function () {
  var _this = this;
  // clear
_this.clearSelection();
  
  // select all
$(_this._elemItemsTitle).each(function(){
    _this.selectMultipleItem($(this));
});

_this.refreshInputVal();
};

// EVENTS

ComboFilter.prototype.onChange = function(callBack) {
  if (callBack && typeof callBack === "function")
    this.changeHandler = callBack;
};



// -----

$.fn[comboFilterPlugin] = function (options) {
  var ctArr = [];
  this.each(function () {
    if (!$.data(this, 'plugin_' + comboFilterPlugin)) {
      $.data(this, 'plugin_' + comboFilterPlugin, new ComboFilter( this, options));
      ctArr.push($(this).data()['plugin_' + comboFilterPlugin]);
    }
  });

  if (this.length == 1)
    return ctArr[0];
  else
    return ctArr;
}

})( jQuery, window, document );

/*** Filter Popup ***/