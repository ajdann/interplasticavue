<template>
<div class="container">
<div class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked>
  <label for="tab1">{{$t('profiles')}}</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier">
  <label for="tab2">{{$t('subprofiles')}}</label>
  <!-- Tab 3 -->
  <!-- <input type="radio" name="tabset" id="tab3" aria-controls="dunkles">
  <label for="tab3">Ostalo</label> -->

  <div class="tab-panels">
    <!-- PROFILI -->
    <section id="marzen" class="tab-panel">
      <div class="podprofil">
        <h2>{{$t('universalProfile')}}</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12">
            <img id="prag" src="/images/podprofili/1.png" alt="" class="slikeProfila">
          </div>
          <div class="col-lg-5 col-md-12 mt-2">
            <h5><strong>{{$t('design')}}</strong></h5>
            <p>{{$t('flexibility')}}</p>
            <h5><strong>{{$t('wordMaterials')}}</strong></h5>
            <p>{{$t('reciklat')}}</p>
            <h5><strong>{{$t('compatibility')}}</strong></h5>
            <p>{{$t('universal')}}</p>
          </div>
        </div>
      </div>

      <div class="podprofil mb-5" style='margin-top: 100px;'>
        <h2>{{$t('windowUniversal')}}</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-around">
          <div class="col-6 col-md-3">
            <img class='img-fluid' src="/images/podprofili/lajsna 1.png" alt="">
          </div>
          <div class="col-6 col-md-3">
            <img class='w-100' src="/images/podprofili/lajsna 2.png" alt="">

          </div>
          <div class="col-6 col-md-3">
            <img class='w-100' src="/images/podprofili/lajsna 3.png" alt="">

          </div>
          <div class="col-6 col-md-3">
            <img class='w-100' src="/images/podprofili/lajsna 4.png" alt="">
          </div>
        </div>
      </div>

      <div class="podprofil mb-1" style='margin-top: 100px;'>
        <h2>{{$t('distancers')}}</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-xs-1 col-md-3 w-50">
            <img class='img-fluid' src="/images/distanceri/mpvc1.png" alt="">
          </div>
          <div class=" col-xs-1 col-md-3 w-50">
            <img class='img-fluid' src="/images/distanceri/mpvc2.png" alt="">

          </div>
          <div class="col-xs-6 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc3.png" alt="">

          </div>
          <div class=" col-xs-6 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc4.png" alt="">
          </div>
        </div>
        <div class='row mt-4 mb-3'>
          <div class="col-xs-6 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc5.png" alt="">
          </div>
          <div class="col-xs-6 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc8.png" alt="">
          </div>
          <div class="col-xs-1 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc9.png" alt="">
          </div>
          <div class="col-xs-6 col-md-3 w-50">
            <img class='w-100' src="/images/distanceri/mpvc7.png" alt="">
          </div>
        </div>
        <div class=''>
          <h5><strong>{{$t('dimensions')}}</strong></h5>
          <p>{{$t('characteristics')}}</p>
          <h5><strong>{{$t('possibilities')}}</strong></h5>
          <p> {{$t('possibilities2')}}
          </p>
          <h5><strong>{{$t('wordMaterial')}}</strong></h5>
          <p>{{$t('softPvc')}}</p>
        </div>
      </div>


    </section>

    <!-- PODPROFILI -->
    <section id="rauchbier" class="tab-panel">
      <div class="podprofil">
        <h2>{{$t('windowSubprofile')}} BLUE EVO</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12">
            <img src="/images/blue evo.png" alt="" class="slikeProfila">
          </div>
          <div class="col-lg-5 col-md-12 mt-2">
            <h5><strong>{{$t('design')}}</strong></h5>
            <p>{{$t('blueEvoText')}}</p>
            <h5><strong>{{$t('wordMaterials')}}</strong></h5>
            <p>{{$t('reciklat')}}</p>
            <h5><strong>{{$t('compatibility')}}</strong></h5>
            <img src="/images/brugman.png" alt="" style="width: 80px !important;">
          </div>
        </div>
      </div>

      <div class="podprofil ">
        <h2>{{$t('windowSubprofile')}} BSV</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12">
            <img src="/images/bsv.png" alt="" class="slikeProfila">
          </div>
          <div class="col-lg-5 col-md-12 mt-2">
            <h5><strong>{{$t('design')}}</strong></h5>
            <p>{{$t('bsvText')}}</p>
            <h5><strong>{{$t('wordMaterials')}}</strong></h5>
            <p>{{$t('reciklat')}}</p>
            <h5><strong>{{$t('compatibility')}}</strong></h5>
            <img src="/images/brugman.png" alt="" style="width: 80px !important;">
            <img src="/images/salamander.png" alt="" style="width: 80px !important;">
            <img src="/images/inoutic.png" alt="" style="width: 80px !important;">
            <img src="/images/veka.png" alt="" style="width: 80px !important;">
          </div>
        </div>
      </div>

      <div class="podprofil ">
        <h2>{{$t('windowSubprofile')}} PEG</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12">
            <img src="/images/peg.png" alt="" class="slikeProfila">
          </div>
          <div class="col-lg-5 col-md-12 mt-2">
            <h5><strong>{{$t('design')}}</strong></h5>
            <p>{{$t('pegText')}}</p>
            <h5><strong>{{$t('wordMaterials')}}</strong></h5>
            <p>{{$t('reciklat')}}</p>
            <h5><strong>{{$t('compatibility')}}</strong></h5>
            <img src="/images/inoutic.png" alt="" style="width: 80px !important;">
            <img src="/images/gealan.png" alt="" style="width: 80px !important;">
          </div>
        </div>
      </div>



      <div class="podprofil ">
        <h2>{{$t('windowSubprofile')}} SALAMANDER</h2>
        <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-12">
            <img src="/images/salamanderprofil.png" alt="" class="slikeProfila">
          </div>
          <div class="col-lg-5 col-md-12 mt-2">
            <h5><strong>{{$t('design')}}</strong></h5>
            <p>{{$t('salamnderText')}}</p>
            <h5><strong>{{$t('wordMaterials')}}</strong></h5>
            <p>{{$t('reciklat')}}</p>
            <h5><strong>{{$t('compatibility')}}</strong></h5>
            <img src="/images/salamander.png" alt="" style="width: 80px !important;">

          </div>
        </div>
      </div>
    </section>

    <!-- OSTALO -->
    <section id="dunkles" class="tab-panel">
      <h2>6C. Dunkles Bock</h2>
      <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and
        somewhat toasty qualities of continental malts without being sweet in the finish.</p>
      <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and
        popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the
        17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was
        thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and
        advertisements.</p>
    </section>
  </div>
  
</div>
</div>
</template>

<style>
.tabset > input[type="radio"] {
    position: absolute;
    left: -200vw;
  }
  
  .tabset .tab-panel {
    display: none;
  }
  
  .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
  .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
  .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
  .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
  .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
  .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
    display: block;
  }
  
  /*
   Styling
  */
  body {
    font-family: 'Arial', sans-serif;

    /* font: 16px/1.5em "Overpass", "Open Sans", Helvetica, sans-serif; */
    /* color: #333; */
    font-weight: 300;
  }
  .tab-panel{
    font-family: 'Arial', sans-serif;
  }
  
  .tabset > label {
    position: relative;
    display: inline-block;
    padding: 15px 15px 25px;
    border: 1px solid transparent;
    border-bottom: 0;
    cursor: pointer;
    font-weight: 600;
  }
  
  .tabset > label::after {
    content: "";
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: 22px;
    height: 4px;
    background: #8d8d8d;
  }
  
  .tabset > label:hover,
  .tabset > input:focus + label {
    color: #5598A9;
  }
  
  .tabset > label:hover::after,
  .tabset > input:focus + label::after,
  .tabset > input:checked + label::after {
    background: #5598A9;
  }
  
  .tabset > input:checked + label {
    /* border-color: #ccc; */
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
  }
  
  .tab-panel {
    padding: 30px 0;
    border-top: 1px solid #ccc;
  }
  
  /*
   Demo purposes only
  */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  /* body {
    padding: 30px;
  } */
  
  .tabset {
    max-width: 65em;
    margin-top: 90px;
  }

  .container-profili{
    width: 80%;
    margin: auto;
  }


  @media (max-width: 768px) {
    .slikeProfila{
      width: 100% !important;
    }
    }
  
  .podprofil{
    margin-bottom: 80px;
  }

  #prag{
    width: 85% !important;
  }
</style>