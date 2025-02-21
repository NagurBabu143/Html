document.body.style.backgroundColor = 'yellow';
const content = document.getElementById("content");
const image = document.getElementById("image");

content.style.color = "#333";
content.style.backgroundColor = "red";
content.style.padding = "20px";
content.style.margin = "20px auto";
content.style.maxWidth = "80%";
content.style.border = "3px solid blue";
content.style.borderRadius = "12px";
content.style.textAlign = "center";
content.style.boxShadow = "0 6px 12px red";
content.style.fontFamily = "Arial, sans-serif";
content.style.fontSize = "1.2em";

image.style.display = "block";
image.style.margin = "20px auto";
image.style.borderRadius = "12px";
image.style.maxWidth = "300px";

image.style.cursor = "pointer";

function changeBackgroundColor() {
  const color = document.getElementById("colorSelect").value;

  document.body.style.backgroundColor = color;

  const content = document.getElementById("content");
  const image = document.getElementById("image");

  if (color === "lightblue") {
    content.querySelector("h2").textContent = "You selected Light Blue!";
    content.querySelector("p").textContent =
      "The background color is now Light Blue. Enjoy the calm vibes!";

    content.style.color = "#333";
    content.style.backgroundColor = "lightpink";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #4682b4";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "2.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  } else if (color === "lightgreen") {
    content.querySelector("h2").textContent = "You selected Light Green!";
    content.querySelector("p").textContent =
      "The background color is now Light Green. Feel the freshness!";

    content.style.color = "white";
    content.style.backgroundColor = "lightred";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #32cd32";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "3.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  } else if (color === "lightpink") {
    content.querySelector("h2").textContent = "You selected Light Pink!";
    content.querySelector("p").textContent =
      "The background color is now Light Pink. Soothing and soft!";

    content.style.color = "#333";
    content.style.backgroundColor = "lightblue";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #ff1493";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "4.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  } else if (color === "lightyellow") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "lightgreen";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "5.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }
  else if (color === "lavender") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "lightgreen";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "7.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "peachpuff") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "lavender";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "8.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "peachpuff") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "lavender";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "9.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "mistyrose") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "peachpuff";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "10.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "powderblue") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "mistyrose";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "11.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "thistle") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "powderblue";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "1.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "beige") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "thistle";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "2.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "cornflowerblue") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "beige";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "3.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "aquamarine") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "cornflowerblue";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "4.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "palegoldenrod") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "aquamarine";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "5.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "lightcoral") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "palegoldenrod";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "11.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "honeydew") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "lightcoral";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "7.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "ivory") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "honeydew";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "8.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "seashell") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "ivory";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "5.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "mintcream") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "seashell";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "10.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "aliceblue") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "mintcream";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "1.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "wheat") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "aliceblue";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "2.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }else if (color === "oldlace") {
    content.querySelector("h2").textContent = "You selected Light Yellow!";
    content.querySelector("p").textContent =
      "The background color is now Light Yellow. Bright and cheerful!";

    content.style.color = "blue";
    content.style.backgroundColor = "wheat";
    content.style.padding = "20px";
    content.style.margin = "20px auto";
    content.style.maxWidth = "80%";
    content.style.border = "3px solid #f0e68c";
    content.style.borderRadius = "12px";
    content.style.textAlign = "center";
    content.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.fontSize = "1.2em";

    image.style.display = "block";
    image.style.margin = "20px auto";
    image.src = "9.jpg";
    image.style.borderRadius = "12px";
    image.style.maxWidth = "300px";
    
    image.style.cursor = "pointer";
  }

  console.log("Selected color:", color);
}
