
<template>
    
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light shadow">
        <router-link class="navbar-brand mr-2" to="/"><img id="navLogo" src="/images/logo.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Naslovna <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/onama" class="nav-link">O nama</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Proizvodi
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/profiles">Profili</a>
                        <a class="dropdown-item" href="/precistaci">Precistaci</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/fences">Ograde</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/alati">Alati</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/razvoj">Razvoj</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Kontakt</a>
                </li>
            

            </ul>
             <div class="locale-changer">
        <select id='langPicker' v-model="$i18n.locale">
          <option
            :class="`lang-option`"
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
            ><p v-if="locale == 'bs'"> BS</p>
              <p v-else> EN</p>
            </option
          >
        </select>
      </div>
        </div>
    </nav>
<div style="margin-bottom:30px;"></div>
 
</template>


<style>
.locale-changer > select {
  background: rgb(248, 249, 250);
  border: 0;
  text-transform: uppercase
;
}
.locale-changer > select > option {
  width: 50px !important;
}
.locale-changer > select:focus-visible{
 outline: 0;
}
.locale-changer > select:focus{
   outline: 0;
}
body{
  background-image: url('/images/logopozadina.PNG') !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: top right  !important;
  background-size: 1200px !important;
  font-family: 'Arial', sans-serif !important;

 

}

.carousel-inner{
  /*just incase the flash (style above) comes back*/
     background: #000;
  }
  
/*    NAVBAR CSS   */
/*  BOJE: #375066 i #5598A9  */
#navLogo {
  width: 200px;
  margin-right: 10px;
  transition: all 0.3s;
}

.navbar .nav-item a {
  transition: all 0.3s;
}



@media (min-width: 768px) {
  .navbar {
    height: 70px;
    transition: all 0.3s;
    /* position: relative; */

  }

  .nav-link {
    font-size: 0.9rem;
    margin-bottom: -5px;
  }
}

.alatBar{
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  background-color: rgba(242, 242, 242, 0.8);
}

.wide-div {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: rgba(242, 242, 242, 0.8);
  padding: 17px 0 50px 0;
}

.wide-div2 {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: rgba(242, 242, 242, 0.8);
  padding: 37px 0 37px 0;
}
.card-body, .card {
    background-color: #ffffff;
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.card-text {
    height: 100px;

}

@media (max-width: 800px) {
  .aaa{
    border: 0px solid white !important;
    margin-top: 25px !important;
    height: 200px !important;
  }

  .cards1{
    margin-bottom: 50px;
  }

  #naslovRazvoj{
    margin-top: 30px !important;
  }
}

.nav-link {
  text-transform: uppercase;
}

/* KRAJ */

#plavaLinija {
  height: 40px;
  background-color: #375066;
}

.naslov {
  font-size: 3.0rem !important;

}

.xx{
  background-color: rgb(66, 66, 66);
}

.aaa{

  height: 350px;

  /* border: 30px solid transparent; */
}


body{
  overflow-x: hidden;
}

#prviRazvoj{
  overflow-x: hidden !important;
  background-color: #375066;
  color: white;
  border-right: 7px solid white;
}

#drugiRazvoj{
  background-color: rgb(66, 66, 66);
  color: white;
  border-right: 3.5px solid white;
  border-left: 3.5px solid white;

}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#treciRazvoj{
  background-color: rgb(226, 223, 223);
  color: black;
  border-left: 7px solid white;
}

/* SCROLL BUTTON */
#scroll {
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgba(55, 80, 102, 0.7);
  text-indent: -9999px;
  display: none;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px
}

#scroll span {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -12px;
  height: 0;
  width: 0;
  border: 8px solid transparent;
  border-bottom-color: #ffffff;
}

#scroll:hover {
  background-color: rgba(55, 80, 102, 0.7);
  opacity: 1;
  filter: "alpha(opacity=100)";
  -ms-filter: "alpha(opacity=100)";
}

@import url(https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);

body {
  /* background: #40E0D0; */
}





</style>