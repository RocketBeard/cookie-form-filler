<script>
(function () {
  var value = "{{Cookie - campaign url}}";
  var searchTerm = "defaultValue"; // replace with the value you want to search for
  var urlParams = new URLSearchParams(new URL(value).search);
  var utmCampaign = urlParams.get("utm_source");

  // find all form inputs that contain the search term in their "value" attribute
  //  var matchingInputs = document.querySelectorAll('input[value*="' + searchTerm + '"]');
  var matchingInputs = document.querySelectorAll('input[value="' + searchTerm + '"]');


  // loop through the matching inputs and set their value to the utmCampaign variable value
  if (matchingInputs.length > 0) {
    for (var i = 0; i < matchingInputs.length; i++) {
      matchingInputs[i].value = utmCampaign;
    }
  }
})();
</script>