<script>
$(document).ready(function() {

  // Random Advert
  $(function() {
      // Alternating DIV Image
      var advert = [
        //smarthomework
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, because homework isn&apos;t done in the "Classroom" <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=c32f94071c"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, integrates with G Suite <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=c32f94071c"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, plan, set and manage homework easily <a href="http://realsmart.co.uk/products/smart-homework/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, manage hand-ins either digitally or mark as physical hand in <a href="http://realsmart.co.uk/products/smart-homework/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, quickly add grades to completed homework <a href="http://realsmart.co.uk/products/smart-homework/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, customisable reports on homework set, completed, outstanding and learner progress <a href="http://realsmart.co.uk/products/smart-homework/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smarthomework"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smarthomework.png" />smarthomework, personalised parent logins <a href="http://realsmart.co.uk/products/smart-homework/"><strong>Learn More ></strong></a></div></div>',
        //smartsites
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, a website that keeps pace with school life <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=532370c636"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, a smart website that improves communication and makes collaboration easy <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, everything you need wrapped in a great looking school website <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, an affordable, mobile responsive and flexible website <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, integrated G Suite for Education, email, storage, calendar and Classroom <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, unlimited storage, hosting and support <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsites"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsites.png" />smartsites, an MIS link to sync users and groups daily including G Suite for Education <a href="http://realsmart.co.uk/products/smartsites/"><strong>Learn More ></strong></a></div></div>',
        //smartsync
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, Get more out of G Suite with smartsync <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=a2daef3768"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, seamlessly synchronise your MIS data to realsmart and G Suite for education <a href="http://realsmart.co.uk/products/smartsync/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, provision users and manage class and group data across Google Apps <a href="http://realsmart.co.uk/products/smartsync/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, timetable and calendar sync for all your users <a href="http://realsmart.co.uk/products/smartsync/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, complete control of your realsmart users, groups and passwords <a href="http://realsmart.co.uk/products/smartsync/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartsync"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartsync.png" />smartsync, you can now add advanced sync services for timetables, Classroom automation and room bookings. The best bit is it&apos;s FREE <a href="http://realsmart.co.uk/products/smartsync/"><strong>Learn More ></strong></a></div></div>',
        // smartportfolio
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, see how we improved learning at XP School <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=1e4e25d62d"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, the most powerful way to demonstrate and track learners&apos; progress <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, give real-time feedback and continually assess learning <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, help your students learn as they create, share and collaborate <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, give feedback and feedforward to guide learning journey <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, self assessment – review/reflect <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartportfolio"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartportfolio.png" />smartportfolio, create flightpaths for learner progress <a href="http://realsmart.co.uk/products/smart-portfolios/"><strong>Learn More ></strong></a></div></div>',
        // smartparents
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, shares attendance, behaviour, rewards and timetables from your MIS <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=bd74df6444"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, shares attendance, timetables and future lessons <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=bd74df6444"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, see achievement and behaviour information <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=bd74df6444"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, see a summary of attendance from your MIS <a href="https://us10.campaign-archive.com/?u=64a3c2b8649057ecadae6257f&id=bd74df6444"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, your parental data portal <a href="http://realsmart.co.uk/products/smart-parents/"><strong>Learn More ></strong></a></div></div>',
        '<div class="grooveAdvert"><div class="smartparents"><img src="http://smartfuse.s3.amazonaws.com/realsmart.co.uk/uploads/2018/10/smartparents.png" />smartparents, our reporting tool that shares homework, timetables, attendance, achievements and behaviour data with parents <a href="http://realsmart.co.uk/products/smart-parents/"><strong>Learn More ></strong></a></div></div>',
      ]

      var randomAdvert = advert[Math.floor(Math.random() * advert.length)];

      $('.box-a-container').prepend(randomAdvert);
  });


// Copy To Clipboard
  $('code').after('<button onclick="codeToCopy(this)">Copy this!</button>');


  function codeToCopy(btn) {
    /* Get the <code> content */
    var copyText = $(btn).prev().text();
    /* Create dummy <input> so we can highlight its content */
    var dummy = $('<input id="dummyInput">').val(copyText);
    /* Add dummy input to <body> */
    $('body').append(dummy);
    /* Select dummy input content */
    $(dummy).select();
    /* Copy the selected text */
    document.execCommand("Copy");
    /* Remove dummy <input> */
    $(dummy).remove();
    /*Alert after text */
    alert('Code Copied!');
  }


  // Print Page Button
  var printButton = '<div class="printButton"><img src="https://cdn3.iconfinder.com/data/icons/stroke/53/Print-512.png" width="10px"> <a href="javascript:window.print()" class="printThisPage">Print This Page</a></div>'
  $('.box-b-wrap .box-c-main h2').first().append(printButton);



});






</script>
