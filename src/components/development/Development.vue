<template>
<div class="container"> 
<h1 class='align-self-sm-center align-self-md-start' style="margin-top: 140px;">{{$t('productDevelopment')}}</h1>
      <hr class='align-self-sm-center align-self-md-start w-50 ml-0 mt-1 mb-3'>
<p style="text-align: justify; margin-bottom: 90px;" class="">{{$t('developmentText')}}</p>
</div>


<!-- TIMELINE -->
<div class="wide-div">
<h1 id="naslovTimeline">{{$t('developmentProcess')}}</h1>
<div class="flex-parent">
	<div class="input-flex-container">
		<input type="radio" name="timeline-dot" data-description="1910"  checked>
		<div class="dot-info" data-description="1910">
			<span class="year">1</span>
			<span class="label">{{$t('idea')}}</span>
		</div>
		<input type="radio" name="timeline-dot" data-description="1920">
		<div class="dot-info" data-description="1920">
			<span class="year">2</span>
			<span class="label">{{$t('design')}}</span>
		</div>
		<input type="radio" name="timeline-dot" data-description="1930">
		<div class="dot-info" data-description="1930">
			<span class="year">3</span>
			<span class="label">{{$t('sampling')}}</span>
		</div>
		<input type="radio" name="timeline-dot" data-description="1940" id="isprekidana">
		<div class="dot-info" data-description="1940">
			<span class="year">4</span>
			<span class="label">{{$t('massProduction')}}</span>
		</div>
		<input type="radio" name="timeline-dot" data-description="1950" id="isprekidana2">
		<div class="dot-info" data-description="1950">
			<span class="year">5</span>
			<span class="label">{{$t('packaging')}}</span>
		</div>
		<input type="radio" name="timeline-dot" data-description="1960" id="popunjena">
		<div class="dot-info" data-description="1960">
			<span class="year">6</span>
			<span class="label">{{$t('logisticsConcept')}}</span>
		</div>
		<div id="timeline-descriptions-wrapper" style="margin-top: 50px;">
			<p data-description="1910">{{$t('developmentProcessText1')}}</p>
			<p data-description="1920">{{$t('developmentProcessText2')}}</p>
			<p data-description="1930">{{$t('developmentProcessText3')}}</p>
			<p data-description="1940">{{$t('developmentProcessText4')}}</p>
			<p data-description="1950">{{$t('developmentProcessText5')}}</p>
			<p data-description="1960">{{$t('developmentProcessText6')}}</p>
		</div>
	</div>
</div>
</div>
<!-- Kraj timelinea -->

<div class='d-flex justify-content-center mt-5	'>
<img id='timelineslika' src="/images/timeline.png" alt="" class="mw-100">
</div>



</template>
<style>
html, body {
    height: 100%;
  }

  body {
    /* font-family: "Quicksand", sans-serif;
    font-weight: 500;
    color: #424949;
    background-color: #ECF0F1; */
    /* padding: 0 25px;
    display: flex;
    flex-direction: column;
    position: relative; */
  } 
  


  #naslovTimeline {
      padding-bottom: 100px;
    text-align: center;
    height: 38px;
    margin: 60px 0;
  }
  h1 span {
    white-space: nowrap;
  }
  
  .flex-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .input-flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80vw;
    max-width: 1000px;
    position: relative;
    z-index: 0;
    margin-left: calc((80vw - 25px) / 12);
  }
  
  input {
    width: 25px;
    height: 25px;
    background-color: #2C3E50;
    position: relative;
    border-radius: 50%;
    display: block;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  input:focus {
    outline: none;
  }
  input::before, input::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    background-color: #2C3E50;
    width: 6.6666666667vw;
    height: 5px;
    max-width: 83.3333333333px;
  }
  input::before {
    left: calc(-6.6666666667vw + 12.5px);
  }
  input::after {
    right: calc(-6.6666666667vw + 12.5px);
  }
  input:checked {
    background-color: #2C3E50;
  }
  input:checked::before {
    background-color: #2C3E50;
  }
  input:checked::after {
    background-color: #AEB6BF;
  }

  #isprekidana::after{
    border-top: 6px dashed #F5F5F5;
    margin-right: -5px;
  }

  #isprekidana2::before{

    border-top: 6px dashed #F5F5F5;
    margin-left: -6px;
  }


  #popunjena:checked::after{
    background-color:#2C3E50;
  }

  input:checked ~ input, input:checked ~ input::before, input:checked ~ input::after {
    background-color: #AEB6BF;
  }
  input:checked + .dot-info span {
    font-size: 17px;
    font-weight: bold;
  }

  @media (max-width: 635px) {
    input:checked + .dot-info span {
        font-size: 13px !important;
        font-weight: bold;
      }

      input{
        margin-left: 10px !important;
      }

      .dot-info span {
        
        font-size: 12px !important;
      }

      #naslovTimeline{
          margin-bottom: -95px !important;
      }
}
  

.wide-div {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background-color: rgba(242, 242, 242, 0.8);
    padding: 17px 0 50px 0;
    
  }
  
  .dot-info {
    width: 25px;
    height: 25px;
    display: block;
    visibility: hidden;
    position: relative;
    z-index: -1;
    left: calc((((80vw - 25px) / 12) * -1) - 1px);
  }
  .dot-info span {
    visibility: visible;
    position: absolute;
    font-size: 17px;
  }
  .dot-info span.year {
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .dot-info span.label {
    top: -65px;
    left: 0;
    transform: rotateZ(-45deg);
    width: 70px;
    text-indent: -10px;
  }
  
  #timeline-descriptions-wrapper {
    width: 100%;
    margin-top: 140px;
    font-size: 22px;
    font-weight: 400;
    margin-left: calc((-80vw - 25px) / 12);
  }
  #timeline-descriptions-wrapper p {
    margin-top: 0;
    display: none;
  }
  
  input[data-description="1910"]:checked ~ #timeline-descriptions-wrapper p[data-description="1910"] {
    display: block;
  }
  
  input[data-description="1920"]:checked ~ #timeline-descriptions-wrapper p[data-description="1920"] {
    display: block;
  }
  
  input[data-description="1930"]:checked ~ #timeline-descriptions-wrapper p[data-description="1930"] {
    display: block;
  }
  
  input[data-description="1940"]:checked ~ #timeline-descriptions-wrapper p[data-description="1940"] {
    display: block;
  }
  
  input[data-description="1950"]:checked ~ #timeline-descriptions-wrapper p[data-description="1950"] {
    display: block;
  }
  
  input[data-description="1960"]:checked ~ #timeline-descriptions-wrapper p[data-description="1960"] {
    display: block;
  }
  
  input[data-description="1970"]:checked ~ #timeline-descriptions-wrapper p[data-description="1970"] {
    display: block;
  }
  
  input[data-description="1980"]:checked ~ #timeline-descriptions-wrapper p[data-description="1980"] {
    display: block;
  }
  
  input[data-description="1990"]:checked ~ #timeline-descriptions-wrapper p[data-description="1990"] {
    display: block;
  }
  
  input[data-description="2000"]:checked ~ #timeline-descriptions-wrapper p[data-description="2000"] {
    display: block;
  }
  
  @media (min-width: 1250px) {
    .input-flex-container {
      margin-left: 95.8333333333px;
    }
  
    input::before {
      left: -70.8333333333px;
    }
    input::after {
      right: -70.8333333333px;
    }
  
    .dot-info {
      left: calc((((1000px - 25px) / 12) * -1) - 1px);
    }
  
    #timeline-descriptions-wrapper {
      margin-left: -70.8333333333px;
    }
  }
  @media (max-width: 630px) {

    .flex-parent {
      justify-content: initial;
    }
  
    .input-flex-container {
      flex-wrap: wrap;
      justify-content: center;
      width: 400px;
      height: auto;
      margin-top: 15vh;
      margin-left: 0;
    }
  
    input, .dot-info {
      width: 60px;
      height: 60px;
      margin: 0 10px 50px;
    }
  
    input {
      background-color: transparent !important;
      z-index: 1;
    }
    input::before, input::after {
      content: none;
    }
    input:checked + .dot-info {
      background-color: #2C3E50;
    }
    input:checked + .dot-info span.year {
      font-size: 14px;
    }
    input:checked + .dot-info span.label {
      font-size: 12px;
    }
  
    .dot-info {
      visibility: visible;
      border-radius: 50%;
      z-index: 0;
      left: 0;
      margin-left: -70px;
      background-color: #AEB6BF;
    }
    .dot-info span.year {
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ECF0F1;
    }
    .dot-info span.label {
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
      text-indent: 0;
      text-align: center;
    }
  
    #timeline-descriptions-wrapper {
      margin-top: 30px;
      margin-left: 0;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    .input-flex-container {
      width: 340px;
    }
  }
  @media (max-width: 400px) {
    .input-flex-container {
      width: 300px;
    }
  }

  @media (min-width:600px){

    #timelineslika{
      max-width: 75% !important;
    }
  }
  
</style>