function horoscopeTrait() {
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");

  let name = prompt("What is your name?");
  let horoscope = prompt("What is your Zodiac Sign?");
  alert("Hi " + name + "✨ Check the top of the page 👆🏼");

  horoscope = horoscope.toLowerCase();
  horoscope = horoscope.trim();

  h1.innerHTML = "Hello " + name + "!💫";

  if (horoscope === "aquarius") {
    h2.innerHTML =
      "As an Aquarius, You tend to be assertive and analytical, never one to go with the flow...";
  }

  if (horoscope === "pisces") {
    h2.innerHTML =
      "As A Pisces, You tend to be Empathetic, Imaginative and Musical 🎼";
  }

  if (horoscope === "aries") {
    h2.innerHTML =
      "As an Aries, you tend to be motivated, cheerful and have strong leadership skills...";
  }

  if (horoscope === "taurus") {
    h2.innerHTML =
      "As a Taurus you are determined, ambitious and very practical";
  }

  if (horoscope === "gemini") {
    h2.innerHTML =
      "As a Gemini you are intelligent, creative and incredibly charming 🌻";
  }

  if (horoscope === "cancer") {
    h2.innerHTML =
      "As a Cancer you are caring, spiritual and selfless beyond belief...";
  }

  if (horoscope === "leo") {
    h2.innerHTML =
      "As a Leo you are fiercely protective of those you care about and possess a heart of gold... ";
  }

  if (horoscope === "virgo") {
    h2.innerHTML = "As a Virgo you are loyal, observant and a perfectionist..";
  }

  if (horoscope === "libra") {
    h2.innerHTML =
      "As a Libra you are the ultimate respresentation of balance and diplomacy...";
  }

  if (horoscope === "scorpio") {
    h2.innerHTML =
      "As a Scorpio you are brave, loyal, resourceful and passionate...";
  }

  if (horoscope === "sagittarius") {
    h2.innerHTML =
      "As a Sagittarius you are honest, adventurous, optimistic and independent...";
  }

  if (horoscope === "capricorn") {
    h2.innerHTML =
      "As a Capricorn you are persistent, disciplined, responsible and hard-working...";
  }
}

let button = document.querySelector("button");
button.addEventListener("click", horoscopeTrait);
