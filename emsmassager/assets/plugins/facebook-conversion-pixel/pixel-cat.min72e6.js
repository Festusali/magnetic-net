jQuery(document).ready(function(t){function e(){return"xxxxxxxxxx".replace(/[x]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}function c(){var t=function(t){for(var e=t+"=",c=document.cookie.split(";"),n=0;n<c.length;n++){for(var a=c[n];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""}("pixelcat_id");return""==t&&""!=(t=e())&&null!=t&&function(t,e,c){var n=new Date;n.setTime(n.getTime()+24*c*60*60*1e3);var a="expires="+n.toUTCString();document.cookie=t+"="+e+";"+a+";path=/"}("pixelcat_id",t,365),t}function n(n,a,o){if(t.isFunction(fbq)){var r=e(),s=o?function(t){for(var e in t)"string"==typeof t[e]&&(t[e]=t[e].replace("{post_id}",fcaPcPost.id).replace("{post_title}",fcaPcPost.title).replace("{post_type}",fcaPcPost.type).replace("{post_category}",fcaPcPost.categories.join(", ")));fcaPcPost.utm_support&&(t=function(t){for(var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],c=0;c<e.length;c++)null!==p(e[c])&&(t[e[c]]=p(e[c]));return t}(t));fcaPcPost.user_parameters&&(t=function(t){for(var e=["referrer","language","logged_in","post_tag","post_category"],c=0;c<e.length;c++)fcaPcUserParams[e[c]]&&(t[e[c]]=fcaPcUserParams[e[c]]);return t}(t));return t}(o):null;fbq(n,a,s,{event_id:r}),function(){var t=fcaPcCAPI.pixels;for(i=0;i<t.length;i++){var e=JSON.parse(t[i]);if("Conversions API"===e.type&&!e.paused)return!0}return!1}()&&function(e,n,a){var i=new Date(t.now()).toUTCString(),o=new Date(i).valueOf()/1e3,p=window.location.origin+window.location.pathname,r={action:"fca_pc_capi_event",event_name:e,event_time:o,event_id:a,external_id:c(),client_user_agent:navigator.userAgent,event_source_url:p,custom_data:n,nonce:fcaPcCAPI.nonce};t.ajax({url:fcaPcCAPI.ajax_url,type:"POST",data:r})}(a,s,r)}}function a(t,e){document.cookie=t+"="+e+";path=/"}function o(t){var e=("; "+document.cookie).split("; "+t+"=");return 2===e.length&&e.pop().split(";").shift()}function p(t){for(var e=[],c=location.search.substr(1).split("&"),n=0;n<c.length;n++)if((e=c[n].split("="))[0]===t)return decodeURIComponent(e[1]).replace(/\+/g," ");return null}!function(){for(var e=0;e<fcaPcEvents.length;e++){var c=fcaPcEvents[e].event,a=fcaPcEvents[e].parameters,i=fcaPcEvents[e].triggerType,o=fcaPcEvents[e].trigger,p=fcaPcEvents[e].apiAction;switch(i){case"css":t(o).on("click",{name:c,params:a,apiAction:p},function(t){n(t.data.apiAction,t.data.name,t.data.params)});break;case"hover":t(o).on("mouseenter",{name:c,params:a,apiAction:p,trigger:o},function(e){n(e.data.apiAction,e.data.name,e.data.params),t(e.data.trigger).off("mouseenter")});break;case"post":fcaPcEvents[e].hasOwnProperty("delay")&&fcaPcEvents[e].hasOwnProperty("scroll")?setTimeout(function(e,c,a,i){t(window).scroll({scrollTarget:e,apiAction:c,eventName:a,parameters:i},function(e){e.data.scrollTarget<=function(){var e=t(window).scrollTop(),c=t(document).height()-t(window).height();return 0==c?100:e/c*100}()&&(t(window).off(e),n(c,a,i))}).scroll()},1e3*fcaPcEvents[e].delay,fcaPcEvents[e].scroll,p,c,a):fcaPcEvents[e].hasOwnProperty("delay")?setTimeout(n,1e3*fcaPcEvents[e].delay,p,c,a):n(p,c,a);break;case"url":t("a").each(function(){t(this).attr("href")===o&&t(this).on("click",{name:c,params:a,apiAction:p},function(t){n(t.data.apiAction,t.data.name,t.data.params)})})}}}(),n("track","PageView"),"undefined"!=typeof fcaPcSearchQuery&&n("track","Search",fcaPcSearchQuery),"undefined"!=typeof fcaPcLandingPageCatEnabled&&t("#fca-lpc-optin-button").click(function(e){var c;if(c=!(0!==t("#fca-lpc-gdpr-consent").length)||"checked"===t("#fca-lpc-gdpr-consent").attr("checked"),t("#fca-lpc-email-input").val()){t("#fca-lpc-email-input").val(),t("#fca-lpc-name-input").val();if(c)return n("track","Lead",{content_name:fcaPcPost.title}),!0}}),"undefined"!=typeof fcaPcOptinCatEnabled&&t(".fca_eoi_form").submit(function(e){var c=!0,a=t(this).find('input[name="name"]').val(),i=t(this).find('input[name="email"]').val();t(this).find('input[name="i_agree"]').length&&"checked"!==t(this).find(".fca_eoi_gdpr_consent").attr("checked")&&(c=!1),i&&c&&n("track","Lead",{content_name:fcaPcPost.title,form_id:t(this).find("#fca_eoi_form_id").val()})}),"undefined"!=typeof fcaPcEptEnabled&&t(".ptp-checkout-button, .ptp-button, .fca-ept-button").click(function(e){-1!==t(this).attr("href").indexOf("?edd_action=add_to_cart&download_id")&&fcaPcPost.edd_enabled||-1!==t(this).attr("href").indexOf("add-to-cart=")&&fcaPcPost.woo_enabled||n("track","InitiateCheckout",{content_name:fcaPcPost.title,pricing_table_id:function(t){var e=[];if(t.closest(".ptp-pricing-table").length)e=t.closest(".ptp-pricing-table");else if(t.closest(".pricing_container").length)e=t.closest(".pricing_container");else if(t.closest(".ptp-stylish-pricingtable").length)e=t.closest(".ptp-stylish-pricingtable");else if(t.closest(".ptp-design4-pricingtable").length)e=t.closest(".ptp-design4-pricingtable");else if(t.closest(".ptp-dg5-pricing-table").length)e=t.closest(".ptp-dg5-pricing-table");else if(t.closest(".cd-pricing-container").length)e=t.closest(".cd-pricing-container");else if(t.closest(".ptp-comparison1-pricingtable").length)e=t.closest(".ptp-comparison1-pricingtable");else if(t.closest(".ptp-comparison2-pricingtable").length)e=t.closest(".ptp-comparison2-pricingtable");else if(t.closest(".ptp-comparison3-pricingtable").length)e=t.closest(".ptp-comparison3-pricingtable");else if(t.closest(".fca-ept-main").length)return(e=t.closest(".fca-ept-main")).attr("id").replace("fca-ept-table-","");return e.length?e.attr("id").replace("ptp-",""):""}(t(this)),plan_name:function(t){var e=[];return t.closest(".ptp-col").find(".ptp-plan").length?e=t.closest(".ptp-col").find(".ptp-plan"):t.closest(".pricing_item").find(".name").length?e=t.closest(".pricing_item").find(".name"):t.closest(".ptp-stylish-column").find(".title").length?e=t.closest(".ptp-stylish-column").find(".title"):t.closest(".ptp-design4-col").find(".ptp-design4-title").length?e=t.closest(".ptp-design4-col").find(".ptp-design4-title").eq(0):t.closest(".ptp-dg5-col").find(".ptp-dg5-plan").length?e=t.closest(".ptp-dg5-col").find(".ptp-dg5-plan"):t.closest(".ptp-dg6-col").find(".ptp-dg6-pricing-header h2").length?e=t.closest(".ptp-dg6-col").find(".ptp-dg6-pricing-header h2"):t.closest(".ptp-dg7-col").find(".ptp-dg7-pricing-header h2").length?e=t.closest(".ptp-dg7-col").find(".ptp-dg7-pricing-header h2"):t.closest(".ptp-price-table").find(".ptp-plan-title h2").length?e=t.closest(".ptp-price-table").find(".ptp-plan-title h2"):t.closest(".ptp-cp2-price-table").find(".ptp-cp2-plan-title h2").length?e=t.closest(".ptp-cp2-price-table").find(".ptp-cp2-plan-title h2"):t.closest(".ptp-cp3-price-table").find(".ptp-cp3-plan-title h2").length?e=t.closest(".ptp-cp3-price-table").find(".ptp-cp3-plan-title h2"):t.closest(".fca-ept-column").find(".fca-ept-plan").length&&(e=t.closest(".fca-ept-column").find(".fca-ept-plan")),e.length?e.text():""}(t(this)),price:function(t){var e=[];return t.closest(".ptp-col").find(".ptp-price").length?e=t.closest(".ptp-col").find(".ptp-price"):t.closest(".pricing_item").find(".price").length?e=t.closest(".pricing_item").find(".price"):t.closest(".ptp-stylish-column").find(".price").length?e=t.closest(".ptp-stylish-column").find(".price"):t.closest(".ptp-design4-col").find(".ptp-design4-price").length?e=t.closest(".ptp-design4-col").find(".ptp-design4-price"):t.closest(".ptp-dg5-col").find(".ptp-dg5-price").length?e=t.closest(".ptp-dg5-col").find(".ptp-dg5-price"):t.closest(".ptp-dg6-col").find(".ptp-dg6-price").length?e=t.closest(".ptp-dg6-col").find(".ptp-dg6-price"):t.closest(".ptp-dg7-col").find(".ptp-dg7-price").length?e=t.closest(".ptp-dg7-col").find(".ptp-dg7-price"):t.closest(".ptp-price-table").find(".cp1-ptp-price").length?e=t.closest(".ptp-price-table").find(".cp1-ptp-price"):t.closest(".ptp-cp2-price-table").find(".ptp-cp2-row-id-0").length?e=t.closest(".ptp-cp2-price-table").find(".ptp-cp2-row-id-0"):t.closest(".ptp-cp3-price-table").find(".cp3-ptp-price").length?e=t.closest(".ptp-cp3-price-table").find(".cp3-ptp-price"):t.closest(".fca-ept-column").find(".fca-ept-price").length&&(e=t.closest(".fca-ept-column").find(".fca-ept-price")),e.length?Number(e.text().replace(/[^0-9\.]+/g,"")):""}(t(this))})}),"undefined"!=typeof fcaPcQuizCatEnabled&&(t(".fca_qc_start_button").click(function(e){return n("trackCustom","QuizStart",{quiz_id:parseInt(t(this).closest(".fca_qc_quiz").prop("id").replace("fca_qc_quiz_","")),quiz_name:t(this).closest(".fca_qc_quiz").find(".fca_qc_quiz_title").text()}),!0}),t(".fca_qc_share_link").click(function(e){return n("trackCustom","QuizShare",{quiz_id:parseInt(t(this).closest(".fca_qc_quiz").prop("id").replace("fca_qc_quiz_","")),quiz_name:t(this).closest(".fca_qc_quiz").find(".fca_qc_quiz_title").text()}),!0}),t(".fca_qc_submit_email_button").click(function(e){var c;if(c=!(0!==t(".fca-qc-gdpr-consent").length)||"checked"===t(".fca-qc-gdpr-consent").attr("checked"),t(this).siblings("#fca_qc_email_input").val()){var a=parseInt(t(this).closest(".fca_qc_quiz").prop("id").replace("fca_qc_quiz_","")),i=t(this).closest(".fca_qc_quiz").find(".fca_qc_quiz_title").text();t(this).siblings("#fca_qc_email_input").val(),t(this).siblings("#fca_qc_name_input").val();if(c)return n("track","Lead",{quiz_id:a,quiz_name:i}),!0}}),t(".fca_qc_score_title").on("DOMSubtreeModified",function(e){if(!t(this).data("pixelcat")){t(this).data("pixelcat",!0);n("trackCustom","QuizCompletion",{quiz_id:parseInt(t(this).closest(".fca_qc_quiz").prop("id").replace("fca_qc_quiz_","")),quiz_name:t(this).closest(".fca_qc_quiz").find(".fca_qc_quiz_title").text(),quiz_result:t(this).text()})}return!0})),"undefined"!=typeof fcaPcEddCheckoutCart&&(n("track","InitiateCheckout",fcaPcEddCheckoutCart),t("#edd_purchase_form").on("submit",function(t){return n("track","AddPaymentInfo",fcaPcEddCheckoutCart),!0})),"undefined"!=typeof fcaPcEddProduct&&(fcaPcPost.edd_delay?setTimeout(n,1e3*fcaPcPost.edd_delay,"track","ViewContent",fcaPcEddProduct):n("track","ViewContent",fcaPcEddProduct),t(".edd-add-to-cart").click(function(t){n("track","AddToCart",fcaPcEddProduct)}),t(".wl-add-to, .add_to_wishlist").click(function(t){n("track","AddToWishlist",fcaPcEddProduct)})),o("fca_pc_edd_purchase")&&(n("track","Purchase",JSON.parse(decodeURIComponent(o("fca_pc_edd_purchase").replace(/\+/g,"%20")))),a("fca_pc_edd_purchase","")),o("fca_pc_advanced_matching")&&a("fca_pc_advanced_matching",""),t("body").on("added_to_cart",function(){var e={action:"fca_pc_woo_ajax_add_to_cart",product_id:fcaPcPost.id};t.ajax({url:fcaPcCAPI.ajax_url,type:"POST",data:e,success:function(t){n("track","AddToCart",t)}})}),o("fca_pc_woo_add_to_cart")&&(n("track","AddToCart",JSON.parse(decodeURIComponent(o("fca_pc_woo_add_to_cart").replace(/\+/g,"%20")))),a("fca_pc_woo_add_to_cart","")),"undefined"!=typeof fcaPcWooCheckoutCart&&(n("track","InitiateCheckout",fcaPcWooCheckoutCart),t("form.checkout").on("checkout_place_order",function(t){return n("track","AddPaymentInfo",fcaPcWooCheckoutCart),!0})),"undefined"!=typeof fcaPcWooPurchase&&n("track","Purchase",fcaPcWooPurchase),"undefined"!=typeof fcaPcWooProduct&&(fcaPcPost.woo_delay?setTimeout(n,1e3*fcaPcPost.woo_delay,"track","ViewContent",fcaPcWooProduct):n("track","ViewContent",fcaPcWooProduct),t(".wl-add-to, .add_to_wishlist").click(function(t){n("track","AddToWishlist",fcaPcWooProduct)})),"undefined"!=typeof fcaPcVideos&&fcaPcVideos.forEach(function(t){t.on("pixel_event",function(t,e,c){n(t,e,c)})}),fcaPcCAPI.debug&&(console.log("pixel cat events:"),console.log(fcaPcEvents),console.log("pixel cat post:"),console.log(fcaPcPost))});