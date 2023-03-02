var imagens = [
    "https://wallpapers.com/images/featured/call-of-duty-modern-warfare-zh69toakzofabqid.jpg",
    "https://wallpapercave.com/wp/wp2695324.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/8565.jpg"
  ];


  var posicaoAtual = 0;


  function exibirImagemAtual() {
    document.getElementById("slider").innerHTML = "<img src='" + imagens[posicaoAtual] + "'>";
  }


  function avancarSlider() {
    posicaoAtual++;
    if (posicaoAtual >= imagens.length) {
      posicaoAtual = 0;
    }
    exibirImagemAtual();
  }


  function retrocederSlider() {
    posicaoAtual--;
    if (posicaoAtual < 0) {
      posicaoAtual = imagens.length - 1;
    }
    exibirImagemAtual();
  }

  function iniciarSlider() {
    exibirImagemAtual();
    setInterval(avancarSlider, 5000);
  }

  window.onload = iniciarSlider;