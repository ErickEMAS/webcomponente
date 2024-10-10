class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
  width: 100vw;
  height: 362px;
  background-color: #737373;
  position: relative;
}

footer #topo {
  height: 323px;
  background-image: url("https://www.aasp.org.br/wp-content/uploads/2024/02/sede-aasp-footer-v2.jpg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

footer #topo:after {
  content: "";
  display: block;
  background-color: rgba(68, 68, 68, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
}

footer #topo #container {
  height: 323px;
  top: 0;
  display: grid;
  grid-template-columns: 25% 20% 30% 25%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

@media (max-width: 1056px) {
  footer #topo {
    height: 740px;
  }
  footer #topo #container {
    height: 740px;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

footer #topo #container #aasp-logo {
  display: block;
  max-width: 200px;
  z-index: 9;
  position: relative;
}

footer #topo #container #itens {
  display: flex;
  flex-direction: column;
  z-index: 9;
  list-style: none;
  padding: 0;
}

footer #topo #container #divider {
  width: 25px;
  border-top: 4px solid #c22027;
  margin-bottom: 22px;
}

footer #topo #container li {
  margin: 0 0 12px;
  flex-wrap: wrap;
}

footer #topo #container li a {
  font-family: Roboto;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400 !important;
  display: flex;
  align-items: center;
  color: #f1f1f1;
}

footer #topo #container #redes p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 700 !important;
  font-size: 1.8rem !important;
  line-height: 24px !important;
  margin-bottom: 2rem;
  margin-top: 0;
  color: #f1f1f1;
}

footer #topo #container #redes ul {
  display: flex;
  margin-top: 0.5rem !important;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

footer #topo #container #redes ul li {
  background-color: #b6242a;
  border-radius: 50%;
  padding: 8px;
  display: flex;
}

footer #topo #container #redes ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer #topo #container #redes ul li a img {
  filter: invert(1);
  width: 22px;
  height: 22px;
}

footer #topo #container #lojas {
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer #topo #container #lojas #titulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 18px;
  margin-bottom: 0.8rem;
  margin-top: 0;
  color: #f1f1f1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer #topo #container #lojas #subtitulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  margin-top: 0;
  color: #f1f1f1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer #topo #container #lojas #apps {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

footer #topo #container #lojas #apps a img {
  width: 110px;
  margin-bottom: 0.5rem;
}

footer #base {
  height: 34px;
  background-color: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;
  padding: 8px 0;
  gap: 8px;
}

footer #base a {
  color: #ffffff;
  font-size: 14px;
}

footer #base a:first-child {
  margin-right: 16px;
}

footer #base .selos-container {
  z-index: 1;
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
}

footer #base .selos-container .selos {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

footer #base .selos-container .selos li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

footer #base .selos-container .selos li img {
  max-height: 36px;
}

footer #base .selos-container .title {
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #fff;
  width: 150px;
  letter-spacing: 0.01rem;
}

            </style>
            <div>
               <footer>
  <div id="topo">
    <div id="container">
      <img src="https://www.aasp.org.br/wp-content/uploads/2024/02/logo-aasp-footer-v2.png" id="aasp-logo" alt="AASP footer logo">

      <ul id="itens">
        <div id="divider"></div>
        <li class="">
          <a [href]="aaspOrg + '/relacionamento/telefones/'" class="aasp-footer__menu--item" title="Telefones e Endereços">
            Telefones e Endereços </a>
        </li>
        <li class="">
          <a [href]="aaspOrg + '/institucional/sobre-a-aasp/'" class="aasp-footer__menu--item" title="Sobre a AASP">
            Sobre a AASP </a>
        </li>
        <li class="">
          <a [href]="aaspOrg + '/produtos-servicos/'" class="aasp-footer__menu--item" title="Produtos &amp; Serviços">
            Produtos &amp; Serviços </a>
        </li>
        <li class="">
          <a [href]="aaspOrg + '/cultural/'" class="aasp-footer__menu--item" title="Cultural">
            Cultural </a>
        </li>
      </ul>

      <div id="redes">
        <p>Conecte-se com a AASP</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/aasponline" title="Ir para o Facebook" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/facebook.svg">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aasponline/" title="Ir para o Instagram" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/instagram.svg">
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aasp_online" title="Ir para o Twitter" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/x-twitter.svg">
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/aasponline" title="Ir para o Youtube" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/youtube.svg">
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/aasp" title="Ir para o Linkedin" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/linkedin.svg">
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/aasponline" title="Ir para o Flickr" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/flickr.svg">
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@aasponline" title="Ir para o Tiktok" target="_blank">
              <img width="22" height="22" src="https://www.aasp.org.br/wp-content/uploads/2024/02/tiktok.svg">
            </a>
          </li>
          <li>
            <a href="https://whatsapp.com/channel/0029Va9TvugLSmbdkR1sZl0A" title="Ir para o Whatsapp" target="_blank">
              <img width="22" height="22"
                src="https://www.aasp.org.br/wp-content/uploads/2024/02/canal-whatsapp.svg">
            </a>
          </li>
        </ul>
      </div>

      <div id="lojas">
        <p id="titulo">Aplicativo AASP</p>
        <p id="subtitulo">Agilidade no seu dia a dia</p>
        <div id="apps">
          <a href="https://play.google.com/store/apps/details?id=br.org.aasp.mobile">
            <img src="https://www.aasp.org.br/wp-content/uploads/2024/03/google-play-2.png" width="110">
          </a>
          <a href="https://itunes.apple.com/br/app/aasp/id577813806">
            <img src="https://www.aasp.org.br/wp-content/uploads/2024/03/apple-store-2.png" width="110">
          </a>
        </div>
      </div>

    </div>
  </div>
  <div id="base">
    <div>
      <a [href]="linkPoliticasPrivacidade">Política de Privacidade</a>
      <a [href]="linkRelacionamento">Mapa do Site</a>
    </div>
    <div class="selos-container">
      <ul class="selos">
          <li>
              <img src="https://www.aasp.org.br/wp-content/themes/aasp/dist/images/selo-via-green-horizontal.ff1f71ff08.jpg" title="Via Green Program - Gestão ambiental" alt="Via Green Program - Gestão ambiental">
              <p class="title">AASP tem compromisso com o futuro sustentável!</p>
          </li>
      </ul>
  </div>
  </div>
</footer>

            </div>
        `;
    }
}
customElements.define('my-component', MyComponent);
