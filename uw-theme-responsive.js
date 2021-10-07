if ( $(window).width() < 780) {      
       $(".kbleftlinks, .kbrightlinks, #qcats").addClass("kb-common-collapsed");
       $(".kbleftlinks .kb-common-chevron, .kbrightlinks .kb-common-chevron, #qcats .kb-common-chevron").attr("aria-expanded", "false");
       $(".kbleftlinks > ul, .kbrightlinks > ul, #qcats > div").attr("aria-hidden", "true");
     } else {
       $(".kbleftlinks, .kbrightlinks, #qcats").removeClass("kb-common-collapsed");
       $(".kbleftlinks .kb-common-chevron, .kbrightlinks .kb-common-chevron, #qcats .kb-common-chevron").attr("aria-expanded", "true");
       $(".kbleftlinks > ul, .kbrightlinks > ul, #qcats > div").attr("aria-hidden", "false");
     };

$(window).resize(function() {
     if ( $(window).width() < 780) {      
       $(".kbleftlinks, .kbrightlinks, #qcats").addClass("kb-common-collapsed");
       $(".kbleftlinks .kb-common-chevron, .kbrightlinks .kb-common-chevron, #qcats .kb-common-chevron").attr("aria-expanded", "false");
       $(".kbleftlinks > ul, .kbrightlinks > ul, #qcats > div").attr("aria-hidden", "true");
     } else {
       $(".kbleftlinks, .kbrightlinks, #qcats").removeClass("kb-common-collapsed");
       $(".kbleftlinks .kb-common-chevron, .kbrightlinks .kb-common-chevron, #qcats .kb-common-chevron").attr("aria-expanded", "true");
       $(".kbleftlinks > ul, .kbrightlinks > ul, #qcats > div").attr("aria-hidden", "false");
     };
    
});