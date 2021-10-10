<template>

<div style="margin-bottom: 90px;" id="carouselExampleIndicators" class="carousel slide" data-interval="5000" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 filter" src="/images/naslovna/1.jpg" alt="First slide">
      <div class="carousel-caption d-flex justify-content-center align-items-center">
        <h5>Napredna rješenja u ekstruziji</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 filter" src="/images/naslovna/2.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-block">
        <h5>Iskustvo i inovativnost</h5>
        <button type="button" onclick="window.location.href='/razvoj'" class="btn btn-outline-light mt-2 px-5" style="font-size: 15px;">Razvoj proizvoda</button>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 filter" src="/images/naslovna/3.jpg" alt="Third slide">
      <div class="carousel-caption d-flex align-items-center flex-column ">
        <h5>Savremena oprema i obrazovani kadar</h5>
        <button type="button" onclick="window.location.href='/alati'" class="btn btn-outline-light mt-2 px-5" style="font-size: 15px;">Naši alati</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="container">


 
  <div class='d-flex justify-content-around mb-3 row '>
    <div class=" align-self-center text-left col-md-6 col-sm-12 d-flex flex-column">
      <h1 class='align-self-sm-center align-self-md-start'>Dobrodošli</h1>
      <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
      <p style="text-align: justify;">
        Dobrodošli na web stranicu Interplastica d.o.o. Interplastica je firma bazirana u Zenici koja se bavi naprednim rješenjima PVC ekstruzije. 
      </p>
     <p>Na stranici možete naći informacije o firmi, našem načinu rada te proizvodima koje nudimo. Za sve ostalo, pozivamo vas da nas kontaktirate.</p>
     <button class="btn btn-info py-2" style="background-color: #375066; width: 150px;"><a
      style="color: white; text-decoration: none;" href="/contact">Kontaktirajte Nas</a></button>
    </div>

    <div class='col-sm-12 col-md-6'>
      <img class='img-fluid d-none d-md-block rounded shadow-lg ' src="/images/dobrodosli.jpg" alt="">
    </div>
  </div>
</div>

<!-- Kartice pocetak -->

<div class="wide-div2 parallax" style="margin-top: 80px;">
  <div class="container  d-flex justify-content-center align-items-center my-4">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-sm-12 cards1 d-flex col-md-4 ml-auto justify-content-center align-items-center">
        <div class="card" style="width: 18rem;">
          <img src="/images/karticeslike/profil.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <p class="card-text">PVC profili zauzimaju većinu naše proizvodnje te su savršen spoj kvalitete i pristupačnosti.</p>
            <button class="btn btn-info" style="background-color: #375066; width: 100px;"><a
                style="color: white; text-decoration: none;" href="/profiles">Profili</a></button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 cards1 col-md-4 d-flex justify-content-center align-items-center">
        <div class="card mw-25" style="width: 18rem;">
          <img src="/images/karticeslike/ograda.png" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <p class="card-text">Razne opcije u proizvodnji ograda osiguravaju vam proizvod po vašim specifikacijama.</p>
            <button class="btn btn-info" style="background-color: #375066; width: 100px;"><a
                style="color: white; text-decoration: none;" href="/fences">Ograde</a></button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 cards1 col-md-4 d-flex  justify-content-center align-items-center">
        <div class="card" style="width: 18rem;">
          <img src="/images/karticeslike/precistac.png" class="card-img-top"
            alt="...">
          <div class="card-body">
            <p class="card-text">Pored profila i ograda, Interplastica nudi inovativna rješenja u sferi PVC prečistača.</p>
            <button class="btn btn-info" style="background-color: #375066; width: 100px;"><a
                style="color: white; text-decoration: none;" href="/precistaci">Prečistači</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- start count stats -->

<section id="counter-stats" class="wow fadeInRight d-flex align-items-center" data-wow-duration="1.4s">
  <div class="container mb-5">
    <div class="row">

      <div class="col-lg-4 stats">
        <i class="fa fa-ruler" aria-hidden="true"></i>
        <div class="counting" data-count="4536000">0</div>
        <h5>Metara ekstrudiranih <br> proizvoda godišnje</h5>
      </div>

      <div class="col-lg-4 stats">
        <i class="fa fa-weight-hanging" aria-hidden="true"></i>
        <div class="counting" data-count="4320">0</div>
        <h5>Tona prerađene plastične <br> mase godišnje</h5>
      </div>

      <div class="col-lg-4 stats">
        <i class="fa fa-check" aria-hidden="true"></i>
        <br>
        <div class="counting" style="display: inline-block" data-count="30">0</div>+
        <h5>Broj proizvoda</h5>
      </div>

   


    </div>

  </div>
  <!-- end container -->

</section>

<div class="wide-div2 mt-5">
  <div class="container">
    <div class="row" style="margin-top: 50px; margin-bottom: 50px;">
      <div class="col-sm-12 col-md-5"><img class=" rounded shadow-sm" style="width: 100%;"
          src="https://www.rehau.com/images/238420/1x1/600/600/70a5ef9218fc49506cbdebf0544830bb/tS/238420.jpg" alt="">
      </div>
      <div class="col-sm-12 col-md-7">
        <h3 id="naslovRazvoj">Naše Vrijednosti</h3>

        <p><em>Vrijednosti koje definisu našu kompaniju prate svaki korak proizvodnog procesa.</em></p>
        <div class="row">
          <div id="prviRazvoj" class="col-sm-12 col-md-4 p-3  aaa">
            <h4 class="mt-3">Znanje i iskustvo</h4>
            <span>
              <ul style="margin-left: -20px;">
                <li>Preko 30 godina iskustva u oblasti ekstruzije.</li>
                <li>Najzahtjevnija rješenja u ekstruziji.</li>
                <li>Mnogobrojne uspjesne saradnje i partnerstva sirom svijeta.</li>
              </ul>
            </span>
          </div>
          <div id="drugiRazvoj" class="col-sm-12 col-md-4 p-3 aaa overflow-auto" >
            <h4 class="mt-3">Mašinski park</h4>
            <span>
               <p>Mašinski park je popunjen mašinama eminentnih evropskih proizvođača opreme u ovoj oblasti.</p>
              <ul style="margin-left: -20px;">
                <li><strong>Extrunet ECO 90</strong></li>
                <li><strong>Extrunet ECO 68</strong></li>
                <li><strong>Krauss Maffei 38</strong></li>
              </ul>
            </span>

          </div>
          <div id="treciRazvoj" class="col-sm-12 col-md-4 p-3  aaa ">
            <h4 class="mt-3">Materijali koje koristimo</h4>
            <span>Materijali sa kojim se susrećemo su: <strong> PVC, meki PVC, ABS, PP, HDPE, LDPE, TPE, WPVC...</strong></span>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.filter {
    filter: grayscale(20%) brightness(70%) drop-shadow(50px 50px 50px black);
}

.carousel img {
    height: 500px;
    object-fit: cover;
}

.carousel {
    margin-bottom: 50px;
}

.carousel-caption {
    top: 50%;
    transform: translateY(-40%);
    bottom: initial;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.carousel-caption>h5 {
    font-size: 70px;
}

.carousel-caption>p {
    font-size: 35px;

}

section#counter-stats {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.stats {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
}

.stats .fa {
    color: #5598A9;
    font-size: 60px;
}

/*/ end count stats /*/



/* KARTICE */
.cards {
    width: 80%;
    margin-left: 50px;
}

.noContainer {
    height: 500px;
    background-color: rgba(242, 242, 242, 0.8);
    margin-top: 100px;
}


body {
    background-color: #fef5df;
}

.container-card {
    width: 300px;
    height: 350px;

    background: url("https://images.unsplash.com/photo-1547895749-888a559fc2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80");
    background-color: black;
    background-size: cover;
    cursor: pointer;
    -webkit-box-shadow: 0 0 5px #000;
    box-shadow: 0 0 5px #000;
}

.overlay {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    background: rgba(77, 77, 77, .4);
    color: #fef5df;
    opacity: 0;
    transition: all 0.5s;
    /* font-family: 'Playfair Display', serif; */
}

.items {
    padding-left: 20px;
    /* letter-spacing: 3px; */
}

.head {
    font-size: 30px;
    line-height: 40px;
    transform: translateY(40px);
    transition: all 0.7s;
}

.card{
    background-color: rgba(242, 242, 242, 0.8);
}

.parallax {
    /* The image used */
    background-image: url("/images/aaa.png");
  
    /* Set a specific height */
    /* height: 500px; */
  
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

.items p {
    margin-bottom: 20px;
}

.head hr {
    display: block;
    width: 0;
    border: none;
    border-bottom: solid 2px #fef5df;
    position: absolute;
    bottom: 0;
    left: 20px;
    transition: all 0.5s;
}

.price {
    font-size: 22px;
    line-height: 10px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s;
}

.price .old {
    text-decoration: line-through;
    color: #b3b3b3;
}

.cart {
    font-size: 12px;
    opacity: 0;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    transform: translateY(40px);
    transition: all 0.7s;
}

.cart i {
    font-size: 16px;
}

.cart span {
    margin-left: 10px;
}

.container-card:hover .overlay {
    opacity: 1;
}

.container-card:hover .overlay .head {
    transform: translateY(0px);
}

.container-card:hover .overlay hr {
    width: 75px;
    transition-delay: 0.4s;
}

.container-card:hover .overlay .price {
    transform: translateY(0px);
    transition-delay: 0.3s;
    opacity: 1;
}

.container-card:hover .overlay .cart {
    transform: translateY(0px);
    transition-delay: 0.6s;
    opacity: 1;
}

/* KRAJ KARTICA */


@media (max-width: 768px) {
    .carousel-caption {
        margin-top: -10px;
    }

    .carousel-caption>h5 {
        font-size: 35px !important;
    }

    .carousel-caption>p {
        font-size: 20px !important;
    }

    .noContainer {
        height: 1000px !important;
    }
}

@media (max-width: 992px) {
    .noContainer {
        height: 1200px !important;
    }
}

</style>
