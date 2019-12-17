const appId = "fede0c61a8141d059bcebb56ac2cf31e";

$("#submit-button").on("click",()=> {
  $(".weather-icon").html("<p>Loading</p>");
  const zipCode = $("#input").val();
  var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  if (isValidZip) {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${appId}`;
    axios
      .get(url)
      .then(response => {
        const icon = response.data.weather[0].icon;
        $(".weather-icon").html(
          "<img src=http://openweathermap.org/img/wn/" + icon + "@2x.png>"
        );
      })
      .then(error => {
        if (error) {
          console.log(error);
        }
      });
  } else {
    $(".weather-icon").html("<p>Invalid Zip Code</p>");
  }
});
