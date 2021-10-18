<template>
   <div class="onamaslika">

</div>

<div class='container'>

  <!-- O NAMA TEXT -->

  
  <div class='d-flex justify-content-around mb-5 row '>
    <div class='col-sm-12 col-md-6 mt-4 '>
      <img class='img-fluid rounded shadow-sm' src="/images/firma.jpg" alt="">
    </div>

    <div class=" align-self-center text-left col-md-6 col-sm-12 d-flex flex-column mb-2 mt-4">
      <h1 class='align-self-sm-center align-self-md-start'>{{$t('aboutUs')}}</h1>
      <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
      <p style="text-align: justify;">
       {{$t('aboutUsText1')}}
      </p>
      <p class='lead'>{{$t('mainActivity')}}</p>
      <ul class='mb-5'>
        <li>{{$t('processDevelopment')}}</li>
        <li>
         {{$t('serialService')}}
        </li>
        <li>
          {{$t('coExtrusion')}}
        </li>
      </ul>

      
    </div>


  </div>



  <h1 class='align-self-sm-center align-self-md-start'>{{$t('partners')}}</h1>
  <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>

  <div class="row align-items-center">
    <div class="col-4"><img src="/images/partneri/bergman.png"   alt=""></div>
    <div class="col-4"><img src="/images/partneri/profine.png" alt="" class='w-100'></div>
    <div class="col-4"><img src="/images/partneri/koma.png"  class='w-100' alt=""></div>
  </div>



</div>
<!-- KRAJ O NAMA TEXT -->

</template>

<style>
.onamaslika {
   background-image: url('/images/ljudixd.jpg');
   width: 100%;
   height: 350px;
   background-repeat: no-repeat;
   background-size: cover;
   background-position-y: 30%;
   margin-bottom: 6%;

}

@media (max-width: 500px ){
  .onamaslika{
      background-position-x: 50%;
   }
}
</style>