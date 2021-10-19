<template>
    
<div class="xdcontainer" style="width: 90% !important; margin: 0 auto;">
  <div class="maContainer" style="max-width: 90em; margin: 0 auto;">
    <div class="podprofil" style='margin-top: 110px;'>
      <h2>{{$t('fencesCharacteristics')}}</h2>
      <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
      <div class="row d-flex justify-content-around align-items-center">
        <div class="col-lg-4 col-md-12">
          <img id='ogradaprvaslika' src="/images/ograde/ograda1.png" style="width: 100%;" alt="" class="slikeProfila mb-2">
        </div>
        <div class="col-lg-4 col-md-12 mt-2 fontOgrade">
          <h5><strong>{{$t('warranty')}}</strong></h5>
          <p>{{$t('warrantyText')}}</p>
          <h5><strong>{{$t('UVStability')}}</strong></h5>
          <p>{{$t('UVStabilityText')}}</p>
          <h5><strong>{{$t('assembly')}}</strong></h5>
          <p>{{$t('assemblyText')}}</p>
          <h5><strong>{{$t('dimensions')}}</strong></h5>
          <p>{{$t('dimensionsText')}}</p>
          <h5><strong>{{$t('availableColors')}}</strong></h5>
          <div class="d-flex flex-row justify-content-around">
            <div class="boja rounded shadow-sm prvaBoja"></div>
            <div class="boja rounded shadow-sm drugaBoja"></div>
            <div class="boja rounded shadow-sm trecaBoja"></div>
            <div class="boja rounded shadow-sm cetvrtaBoja"></div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <img  id='ogradadrugaslika' src="/images/ograde/ogradekarakteristike2.png" style="width: 100%;" alt="" class="slikeProfila">
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="tabset">
    <div class="tab-panels">

      <div class="templateOgrada">
        <div class="podprofil">
          <h2>{{$t('Concept')}} <strong>BASIC</strong></h2>
          <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
          <h3 class="mt-5">Panel</h3>
          <div class="row justify-content-between">
            <div class="col-lg-7 col-md-12">
              <img src="/images/ograde/panelbasic.png" alt="" class="slikeProfila" style="width: 65%;">
            </div>
            <div class="col-lg-5 col-md-12 mt-2 fontOgrade">
              <h5><strong>{{$t('panelDimensions')}}</strong></h5>
              <p>{{$t('basicDimensionsText')}}</p>
              <h5><strong>{{$t('basicAssemblyParts')}}</strong></h5>
              <ul>
                <li>{{$t('basicAssemblyPartsText1')}}</li>
                <li>{{$t('basicAssemblyPartsText2')}}</li>
                <li>{{$t('basicAssemblyPartsText3')}}</li>
              </ul>
              <h5><strong>{{$t('availableColors')}}</strong></h5>
              <div class="d-flex flex-row justify-content-around">
                <div class="boja rounded shadow-sm prvaBoja"></div>
                <div class="boja rounded shadow-sm drugaBoja"></div>
                <div class="boja rounded shadow-sm trecaBoja"></div>
                <div class="boja rounded shadow-sm cetvrtaBoja"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="podprofil" style='margin-top: -30px;'>
          <h3>{{$t('post')}}</h3>
          <div class="row justify-content-between">
            <div class="col-lg-7 col-md-12">
              <img src="/images/ograde/stubbasic.png" alt="" class="slikeProfila ml-2" style="width: 80%;">
            </div>
            <div  class="col-lg-5 col-md-12 mt-2 fontOgrade">
              <h5 id='marginaispodstuba' ><strong>{{$t('postDimensions')}}</strong></h5>
              <ul>
                <li>{{$t('postDimensionsText1')}}</li>
                <li>{{$t('postDimensionsText2')}}</li>
              </ul>
              <h5><strong>{{$t('assemblyPartsOnGround')}}</strong></h5>
              <ul>
                <li>{{$t('post')}}</li>
                <li>{{$t('screws')}}</li>
              </ul>

              <h5><strong>{{$t('caps')}}</strong></h5>
              <p>{{$t('capsText')}})</p>
              <img src="/images/ograde/kape.png" class="w-75" alt="">
              <!-- <h5><strong>Dostupne boje</strong></h5>
        <div class="d-flex flex-row justify-content-around">
            <div class="boja rounded shadow-sm prvaBoja"></div>
            <div class="boja rounded shadow-sm drugaBoja"></div>
            <div class="boja rounded shadow-sm trecaBoja"></div>
            <div class="boja rounded shadow-sm cetvrtaBoja"></div>
        </div> -->
            </div>
          </div>
        </div>
      </div>

    


      <div class="templateOgrada" style="margin-top: 130px;">
        <div class="podprofil">
          <h2>Koncept <strong>BASIC+</strong></h2>
          <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
          <h3 class="mt-5">Panel</h3>
          <div class="row justify-content-between">
            <div class="col-lg-7 col-md-12">
              <img src="/images/ograde/panelbasicplus.png" alt="" class="slikeProfila" style="width: 65%;">
            </div>
            <div class="col-lg-5 col-md-12 mt-2 fontOgrade">
              <h5><strong>Dimenzije panela</strong></h5>
              <p>180cm(širina) x 180cm(visina)</p>
              <h5><strong>Dijelovi za montažu:</strong></h5>
              <ul>
                <li>Okvir – 3 kom</li>
                <li>Ispuna – 12 kom</li>
                <li>L profil - 2 kom</li>
                <li>Vijci</li>
              </ul>
              <h5><strong>Dostupne boje</strong></h5>
              <div class="d-flex flex-row justify-content-around">
                <div class="boja rounded shadow-sm prvaBoja"></div>
                <div class="boja rounded shadow-sm drugaBoja"></div>
                <div class="boja rounded shadow-sm trecaBoja"></div>
                <div class="boja rounded shadow-sm cetvrtaBoja"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="podprofil " style='margin-top: -30px;'>
          <div class="row justify-content-between">
            <div class="col-lg-5 col-md-12">
              <h3 class="align-self-start">Stub</h3>
              <img  id='nekistub' src="/images/ograde/stubbasic.png"  style="margin-top: 45px;" alt="">
            </div>
            <div class="col-lg-4 col-md-12 fontOgrade" style=' margin-top:40px'>
              <h5><strong>Dimenzije stuba</strong></h5>
              <ul>
                <li>Kvadratni presjek-10x10cm</li>
                <li>Debljina stijenke-3,50mm</li>
              </ul>
              <h5><strong>Dijelovi za montažu na zemljanoj podlozi:</strong></h5>
              <ul>
                <li>Stub</li>
                <li>Vijci</li>
                <li>Ojacanje</li>
              </ul>
              <h5><strong>Dijelovi za montažu na betonskoj podlozi:</strong></h5>
              <div class='d-flex'>
                <ul>
                  <li>Stub</li>
                  <li>Vijci</li>
                </ul>
                <ul>
                  <li>Stopa</li>
                  <li>Anker vijci</li>
                </ul>
              </div>

              <h5><strong>Kape</strong></h5>
              <p>Plasticna, Inox(Ravna), Inox(Piramida)</p>
              <img src="/images/ograde/kape.png" class="w-75" alt="">
              <!-- <h5><strong>Dostupne boje</strong></h5>
        <div class="d-flex flex-row justify-content-around">
            <div class="boja rounded shadow-sm prvaBoja"></div>
            <div class="boja rounded shadow-sm drugaBoja"></div>
            <div class="boja rounded shadow-sm trecaBoja"></div>
            <div class="boja rounded shadow-sm cetvrtaBoja"></div>
        </div> -->
            </div>
            <div class='col-lg-3 d-flex flex-column align-items-center'>
              <h3 class='align-self-start' style="margin-bottom: 30px;">Stopa</h3>
              <img src="/images/ograde/stubbasicplus3.png"  style='width:180%' class='stopa mrzimoveslike' alt="">


            </div>
          </div>
        </div>
      </div>



      <div class="templateOgrada" style="margin-top: 130px;">
        <div class="podprofil">
          <h2>Koncept <strong>MEDIUM</strong></h2>
          <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
          <h3 class="mt-5">Panel</h3>
          <div class="row justify-content-between">
            <div class="col-lg-5 col-md-12">
              <img src="/images/ograde/panelmedium.png" class='img-fluid' alt="">
            </div>
            <div class="col-lg-3 col-md-12 mt-2 fontOgrade">
              <h5><strong>Dimenzije panela</strong></h5>
              <p>180cm(širina) x 180cm(visina)</p>
              <h5><strong>Dijelovi za montažu:</strong></h5>
              <ul>
                <li>Sklopljeni panel</li>
                <li>Zakacke</li>
                <li>Vijci</li>

              </ul>
              <h5><strong>Dostupne boje</strong></h5>
              <div class="d-flex flex-row justify-content-around">
                <div class="boja rounded shadow-sm prvaBoja"></div>
                <div class="boja rounded shadow-sm drugaBoja"></div>
                <div class="boja rounded shadow-sm trecaBoja"></div>
                <div class="boja rounded shadow-sm cetvrtaBoja"></div>
              </div>
            </div>
            <div class='col-lg-3 d-flex flex-column align-items-center'>
              <h3 id='inoxtekst' class='align-self-start'>Inox Zakačka</h3>
              <img id='zakacka' src="/images/ograde/zakacka.png" style='width:100%' class='align-self-start' alt="">


            </div>
          </div>
        </div>
        <div class="podprofil " style='margin-top: -30px;'>
          <div class="row justify-content-between">
            <div class="col-lg-5 col-md-12">
              <h3>Stub</h3>
              <img id='nekidrugistub' src="/images/ograde/stubbasic.png" style="margin-top: 45px;" class='img-fluid' alt="">
            </div>
            <div class="col-lg-4 col-md-12 fontOgrade" style='margin-top: 40px;'>
              <h5><strong>Dimenzije stuba</strong></h5>
              <ul>
                <li>Kvadratni presjek-10x10cm</li>
                <li>Debljina stijenke-3,50mm</li>
              </ul>
              <h5><strong>Dijelovi za montažu na zemljanoj podlozi:</strong></h5>
              <ul>
                <li>Stub</li>
                <li>Vijci</li>
                <li>Ojacanje</li>
              </ul>
              <h5><strong>Dijelovi za montažu na betonskoj podlozi:</strong></h5>
              <div class='d-flex'>
                <ul>
                  <li>Stub</li>
                  <li>Vijci</li>
                </ul>
                <ul>
                  <li>Stopa</li>
                  <li>Anker vijci</li>
                </ul>
              </div>

              <h5><strong>Kape</strong></h5>
              <p>Plasticna, Inox(Ravna), Inox(Piramida)</p>
              <img src="/images/ograde/kape.png" class="w-75" alt="">
              <!-- <h5><strong>Dostupne boje</strong></h5>
          <div class="d-flex flex-row justify-content-around">
              <div class="boja rounded shadow-sm prvaBoja"></div>
              <div class="boja rounded shadow-sm drugaBoja"></div>
              <div class="boja rounded shadow-sm trecaBoja"></div>
              <div class="boja rounded shadow-sm cetvrtaBoja"></div>
          </div> -->
            </div>
            <div class='col-lg-3 d-flex flex-column align-items-center'>
              <h3 class='align-self-start'>Stopa</h3>
              <img src="/images/ograde/stubbasicplus3.png" style='width:180%' class='stopa mrzimoveslike' alt="">


            </div>
          </div>
        </div>


      </div>



      <div class="templateOgrada" style="margin-top: 130px;">
        <div class="podprofil">
          <h2>Koncept <strong>MEDIUM+</strong></h2>
          <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
          <h3 class="mt-5">Panel</h3>
          <div class="row justify-content-between">
            <div class="col-lg-7 col-md-12">
              <div id="cetvrtiCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="bg-white4">
                  <div class="carousel-item active">
                    <img class="d-block carouselslike" style="width: 85%;" src="/images/ograde/panelmediumplus.png" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 carouselslike" src="/images/ograde/panelmediumplus2.png" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100 carouselslike" src="/images/ograde/panelmediumplus3.png" alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#cetvrtiCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#cetvrtiCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 mt-2 fontOgrade">
              <h5><strong>Dimenzije panela</strong></h5>
              <p>180cm(širina) x 180cm(visina)</p>
              <h5><strong>Dijelovi za montažu:</strong></h5>
              <ul>
                <li>Sklopljeni panel</li>
                <li>Zakacke</li>
                <li>Vijci</li>
              </ul>
              <h5><strong>Dodatne mogucnosti ugradnje:</strong></h5>
              <ul>
                <li>Ukrasna lajsna na stubu</li>
                <li>Dodatna ojacanja</li>

              </ul>

              <h5><strong>Dostupne boje</strong></h5>
              <div class="d-flex flex-row justify-content-around">
                <div class="boja rounded shadow-sm prvaBoja"></div>
                <div class="boja rounded shadow-sm drugaBoja"></div>
                <div class="boja rounded shadow-sm trecaBoja"></div>
                <div class="boja rounded shadow-sm cetvrtaBoja"></div>
              </div>
            </div>
          </div>
        </div>

      </div>




    </div>
    </div>
    </div>
</template>

<style>
/* Prva slika i tekst  */
#ogradepodnaslov {
    margin-top: 90px;
}
.lista {
    font-size: 18px;
}
.boja {
    height: 100px;
    width: 20%;
}

/* .fontOgrade{
    font-size: 0.9em;
} */

@media (max-width: 768px) {
    .stopa{
        width: 150% !important;
        overflow-x: hidden !important;  
    }

    #ogradaprvaslika{
        width: 60% !important;
    }
    #ogradadrugaslika{
        width: 69% !important;
        margin-top: 30px;
    }
    #marginaispodstuba {
        margin-top: 40px;
    }
    #nekistub{
        width:58% !important;
        margin-top: 0 !important;
    }
    .mrzimoveslike{
        width: 60% !important;
        margin-left: -350px;
    }
    .carouselslike {
        height: 20% !important;
    }
    .carousel-inner {
        height: 500px;
    }
    #nekidrugistub {
        width: 58% !important;
    }
    #zakacka {
        width: 50% !important;
    }
    #inoxtekst {
        margin-top: 30px;
    }
}

.col-lg-7 img{
    width: 58% !important;
}

.col-lg-5 img{
    width: 85% !important;
}

.prvaBoja{
    background-color: #F1F2ED;
}

.drugaBoja{
    background-color: #9099A0;
}

.trecaBoja{
    background-color: #393E42;
}

.cetvrtaBoja{
    background-color: #513329;
}


#bg-white{
    background: none;
}

#bg-white2{
    background: none;
}

#bg-white3{
    background: none;
}

#bg-white4{
    background: none;
}






</style>