<script>
  (function () {
  var value = "{{Cookie - campaign url}}";
  var searchTerm = "defaultValue"; // replace with the value you want to search for
  var urlParams = new URLSearchParams(new URL(value).search);
  var utmCampaign = urlParams.get("utm_source");

  function getIframe() {
    return document.querySelector('iframe[name="give-embed-form"]');
  }

  function updateHiddenFieldValue(iframe) {
    var iframeContent = iframe.contentWindow || iframe.contentDocument;
    if (!iframeContent) {
      console.error("Cannot access iframe content");
      return;
    }

    // find all form inputs that contain the search term in their "value" attribute
    var matchingInputs = iframeContent.document.querySelectorAll('input[value="' + searchTerm + '"]');

    // loop through the matching inputs and set their value to the utmCampaign variable value
    if (matchingInputs.length > 0) {
      for (var i = 0; i < matchingInputs.length; i++) {
        matchingInputs[i].value = utmCampaign;
      }
    }
  }

  var iframe = getIframe();
  if (iframe) {
    iframe.addEventListener('load', function () {
      updateHiddenFieldValue(iframe);
    });
  } else {
    console.error("Cannot find iframe");
  }
})();

</script>                                                
                                              