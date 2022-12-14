
export const  ctas = `
<style>
.menu,
.nav-icon span {
	transition: all .3s ease-in-out
}

.menu .nav-menu li a,
.nav-menu li a {
	line-height: 56px
}

*,
::after,
::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box
}

.effectTab-header .caption,
.effectTab-header .title {
	font-weight: 700;
	padding-bottom: 20px;
	position: relative;
	display: inline-block;
	color: #555;
	margin: 0 0 20px;
	text-align: center;
	text-transform: uppercase
}

.effectTab-header .title {
	font-size: 36px;
	font-family: Oswald, sans-serif
}

.effectTab-header .caption {
	font-size: 30px;
	font-family: 'Open Sans', sans-serif
}

.column-1,
.column-10,
.column-11,
.column-12,
.column-2,
.column-3,
.column-4,
.column-5,
.column-7,
.column-8,
.column-9 {
	float: left;
	
}

.effectTab-header .title::after,
.effectTab-header .title::before {
	position: absolute;
	background: linear-gradient(to right, #ed6ea0 0, #ec8c69 100%);
	content: ""
}

.effectTab-header .title::before {
	left: 0;
	width: 156%;
	height: 3px;
	margin-left: -28%;
	bottom: -1.5px
}

.effectTab-header .title::after {
	left: 50%;
	width: 25px;
	height: 25px;
	bottom: -26px;
	margin: 0 0 0 -10px;
	-webkit-clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0);
	clip-path: polygon(75% 0, 75% 69%, 41% 93%, 0 68%, 0 0)
}

body {
	background-color: #F5F5F5;
}

.column-1 {
	width: 8.333333333333333%
}

.column-2 {
	width: 16.66666666666667%
}

.column-3 {
	width: 25%
}

.column-4 {
	width: 33.33333333333333%
}

.column-5 {
	width: 41.66666666666667%
}

.column-6 {
	width: 50%;
	float: left;
	padding: 15px
}

.column-7 {
	width: 58.33333333333333%
}

.column-8 {
	width: 66.66666666666667%
}

.column-9 {
	width: 75%
}

.column-10 {
	width: 83.33333333333333%
}

.column-11 {
	width: 91.66666666666667%
}

.column-12,
.wrapper-full {
	width: 100%
    margin-left: auto;
    margin-right: auto;
}

.nav-icon,
.navigation {
	float: right
}
custom-row{
	display:flex;
	flex-direction:row;
	justify-content: center;
    text-align:center;
}
.custom-row::after {
	content: "";
	display: table;
	clear: both
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
	position: relative
}

.header {
	background-color: #485666;
	padding: 8px 0;
	position: static;
	z-index: 2000
}

.header h1 {
	color: #fff;
	font-family: Poppins;
	font-weight: 400;
	font-size: 2.2rem;
	padding-left: 40px
}

.rotate {
	position: absolute;
	transform: rotate(-20deg);
	left: 0;
	font-size: 2.8rem;
	top: 5px
}

.ex_padd {
	padding-top: 170px!important
}

.nav-icon-container {
	display: block
}

.nav-icon {
	width: 50px;
	height: 50px;
	border: 2px solid #fff;
	border-radius: 50%;
	position: relative;
	cursor: pointer;
	z-index: 100
}

.nav-icon span {
	width: 60%;
	height: 2px;
	background-color: #fff;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%)
}

.nav-icon-1 {
	top: 30%
}

.nav-icon-2 {
	top: 50%
}

.nav-icon-3 {
	top: 70%
}

.nav-icon.active .nav-icon-1 {
	top: 50%;
	transform: rotate(45deg);
	left: 22%
}

.nav-icon.active .nav-icon-3 {
	top: 50%;
	transform: rotate(-45deg);
	left: 22%
}

.nav-icon.active .nav-icon-2 {
	width: 0
}

.nav-menu {
	display: flex;
	flex-direction: row;
	justify-content: space-around
}

.nav-menu li {
	list-style: none;
	position: relative
}

.nav-menu li a {
	color: #fff;
	text-decoration: none;
	display: inline-block;
	padding: 0 20px
}

.nav-menu li:after,
.nav-menu li:before {
	content: "";
	position: absolute;
	height: 3px;
	background-color: rgba(255, 255, 255, .2);
	bottom: 0;
	width: 0;
	transition: all .3s ease-in-out
}

.nav-menu li:before {
	left: 0
}

.nav-menu li:after {
	right: 0
}

.nav-menu li:hover:after,
.nav-menu li:hover:before {
	width: 50%
}

.nav-menu li.active:after,
.nav-menu li.active:before {
	background-color: rgba(0, 128, 128, 1)
}

.menu {
	width: 200px;
	background-color: #0B466C;
	text-align: center;
	padding: 40px;
	position: fixed;
	top: 96px;
	right: -200px;
	overflow: scroll;
	height: calc(100% - 96px);
	z-index: 1000
}

.menu.active {
	right: 0
}

.menu .nav-menu {
	flex-direction: column;
	width: 150px
}

.menu .nav-menu li {
	margin: 10px 0;
	width: 80%
}

.box-tab {
	margin: 10px 0
}

.effect {
	margin: auto;
	box-shadow: 0 0 15px 5px rgba(0, 0, 0, .07);
	background-color: #fff;
	border: 5px solid #f5f5f5
}

.tab-container {
	padding: 50px 0
}

.tab-head {
	text-align: center;
	padding-bottom: 10px;
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto
}

.tab .effect {
	position: relative;
	overflow: hidden;
	max-height: 240px;
	max-width: 350px;
	background: #3085a3;
	text-align: center;
	cursor: pointer
}

.grid-width3,
.grid-width6 {
	max-height: 270px!important;
	max-width: 530px!important
}

.grid-width8 {
	max-width: 700px!important
}
.tab{
	margin-left: auto;
	margin-right: auto;
}
.tab .effect img {
	position: relative;
	display: block;
	min-height: 100%;
	opacity: .8
}

.tab .effect .tab-text {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25rem;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%
}

.tab-text h2 {
	color: #fff;
	margin: 0;
	font-size: 1.5rem
}

.tab-text p {
	color: #fff;
	margin: 0;
	font-size: 1rem
}

.hide {
	display: none
}

@media (max-width:575px) {
	.column-xs-1,
	.column-xs-10,
	.column-xs-11,
	.column-xs-12,
	.column-xs-2,
	.column-xs-3,
	.column-xs-4,
	.column-xs-5,
	.column-xs-7,
	.column-xs-8,
	.column-xs-9 {
		float: left;
		padding: 15px
	}
	.column-xs-1 {
		width: 8.333333333333333%
	}
	.column-xs-2 {
		width: 16.66666666666667%
	}
	.column-xs-3 {
		width: 25%
	}
	.column-xs-4 {
		width: 33.33333333333333%
	}
	.column-xs-5 {
		width: 41.66666666666667%
	}
	.column-xs-6 {
		width: 50%;
		float: left;
		padding: 15px
	}
	.column-xs-7 {
		width: 58.33333333333333%
	}
	.column-xs-8 {
		width: 66.66666666666667%
	}
	.column-xs-9 {
		width: 75%
	}
	.column-xs-10 {
		width: 83.33333333333333%
	}
	.column-xs-11 {
		width: 91.66666666666667%
	}
	.column-xs-12 {
		width: 100%
	}
	.hide-xs {
		display: none
	}
	.effectTab-header .title::before {
		width: 125%;
		left: 15%
	}
	.tab-container {
		padding-top: 25px;
		padding-bottom: 25px
	}
}

@media (min-width:576px) and (max-width:767px) {
	.column-sm-1,
	.column-sm-10,
	.column-sm-11,
	.column-sm-12,
	.column-sm-2,
	.column-sm-3,
	.column-sm-4,
	.column-sm-5,
	.column-sm-7,
	.column-sm-8,
	.column-sm-9 {
		float: left;
		padding: 15px
	}
	.column-sm-1 {
		width: 8.333333333333333%
	}
	.column-sm-2 {
		width: 16.66666666666667%
	}
	.column-sm-3 {
		width: 25%
	}
	.column-sm-4 {
		width: 33.33333333333333%
	}
	.column-sm-5 {
		width: 41.66666666666667%
	}
	.column-sm-6 {
		width: 50%;
		float: left;
		padding: 15px
	}
	.column-sm-7 {
		width: 58.33333333333333%
	}
	.column-sm-8 {
		width: 66.66666666666667%
	}
	.column-sm-9 {
		width: 75%
	}
	.column-sm-10 {
		width: 83.33333333333333%
	}
	.column-sm-11 {
		width: 91.66666666666667%
	}
	.column-sm-12 {
		width: 100%
	}
	.hide-sm {
		display: none
	}
	.visible-sm {
		display: block
	}
	.tab-container {
		padding-top: 25px;
		padding-bottom: 25px
	}
}

@media (max-width:1000px) {
	.header h1 {
		padding-left: 70px
	}
	.rotate {
		left: 30px
	}
	@media (min-width:768px) and (max-width:991px) {
		.column-md-1,
		.column-md-10,
		.column-md-11,
		.column-md-12,
		.column-md-2,
		.column-md-3,
		.column-md-4,
		.column-md-5,
		.column-md-7,
		.column-md-8,
		.column-md-9 {
			float: left;
			padding: 15px
		}
		.column-md-1 {
			width: 8.333333333333333%
		}
		.column-md-2 {
			width: 16.66666666666667%
		}
		.column-md-3 {
			width: 25%
		}
		.column-md-4 {
			width: 33.33333333333333%
		}
		.column-md-5 {
			width: 41.66666666666667%
		}
		.column-md-6 {
			width: 50%;
			float: left;
			padding: 15px
		}
		.column-md-7 {
			width: 58.33333333333333%
		}
		.column-md-8 {
			width: 66.66666666666667%
		}
		.column-md-9 {
			width: 75%
		}
		.column-md-10 {
			width: 83.33333333333333%
		}
		.column-md-11 {
			width: 91.66666666666667%
		}
		.column-md-12 {
			width: 100%
		}
		.hide-md {
			display: none
		}
		.visible-md {
			display: block
		}
	}
}
.effect.effect-four {
	background: #2e5d5a
}

.effect-four .tab-text h2 {
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 1em 1.2em;
	font-family: Oswald
}

.effect-four .tab-text p {
	width: 65%;
	font-size: 68%;
	line-height: 1;
	letter-spacing: 1px;
	text-align: left;
	float: right;
	padding-left: 15px;
	border-left: 1px solid #fff;
	border-bottom: 1px solid #fff;
	transform: translate3d(40px, 0, 0);
	-webkit-transform: translate3d(40px, 0, 0);
	opacity: 0;
	transition: all .35s;
	font-family: "Open sans";
	padding-bottom: 5px
}

.effect-four .tab-text p:after,
.effect-four .tab-text p:before {
	width: 10px;
	height: 10px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 50px;
	content: "";
	position: absolute
}

.effect.effect-five h2,
.effect.effect-six h2 {
	font-family: Oswald
}

.effect-four .tab-text p:after {
	top: -5px;
	left: -5px;
	-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}

.effect-four .tab-text p:before {
	right: 0;
	bottom: -6px;
	-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
}

.effect.effect-four .icons-block {
	z-index: 1000;
	position: absolute;
	top: 10px;
	width: 100%;
	left: 0;
	text-align: left;
	padding-left: 10px;
	padding-top: 9px
}

.effect.effect-four .icon-c3 {
	padding-left: 5px;
	padding-top: 0
}

.effect.effect-four .icons-block .social-icon-1,
.effect.effect-four .icons-block .social-icon-2,
.effect.effect-four .icons-block .social-icon-3 {
	transition: all .5s ease-in-out;
	opacity: 0
}

.effect.effect-four:hover .social-icon-1 {
	opacity: 1;
	transition-delay: .3s;
	transition-duration: .5s
}

.effect.effect-four:hover .social-icon-2 {
	opacity: 1;
	transition-delay: .4s;
	transition-duration: .5s
}

.effect.effect-four:hover .social-icon-3 {
	opacity: 1;
	transition-delay: .5s;
	transition-duration: .5s
}

.effect.effect-four .icons-block i {
	color: rgba(255, 255, 255, .9);
	padding-left: 7px;
	font-size: 1.2rem
}

.effect-four:hover p {
	transform: translate3d(0, 0, 0);
	opacity: 1
}

.effect.effect-four img {
	max-width: none;
	width: calc(100% + 60px);
    position:relative;
    top: -20%;
	opacity: 1;
	transform: translate3d(0, 0, 0) scale(1.12);
	transition: all .35s;
	-webkit-transform: translate3d(0, 0, 0) scale(1.12);
	-webkit-transition: all .35s
}

.effect.effect-four:hover img {
	transform: translate3d(-20px, 0, 0) scale(1);
	-webkit-transform: translate3d(-20px, 0, 0) scale(1);
	opacity: .5
}
</style>

 
   
   
<section class="wrapper-full tab-container effectTab-header text-center center-align" id="style_4">
<div class="tab-item">
  <div class="row">
    <div class="tab">
      <div class="row">

        <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
          <div class="effect effect-four">
            <img src="https://www.omnicommander.com/assets/genStorage/ex1.jpg" class="img-fluid">
            <div class="tab-text">
              <h2>Three column 4</h2>
              <p>Designed to help you complete your layout designing</p>
              <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
            </div>
          </div>
        </div>
        <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
          <div class="effect effect-four">
            <img src="https://www.omnicommander.com/assets/genStorage/ex2.jpg" class="img-fluid">
            <div class="tab-text">
              <h2>Three column 4</h2>
              <p>Designed to help you complete your layout designing</p>
              <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
            </div>
          </div>
        </div>
        <div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
          <div class="effect effect-four">
            <img src="https://www.omnicommander.com/assets/genStorage/ex3.jpg" class="img-fluid">
            <div class="tab-text">
              <h2>Three column 4</h2>
              <p>Designed to help you complete your layout designing</p>
              <div class="icons-block"> <a href="#" class="social-icon-1"><i class="fa fa-facebook-official"></i></a> <a href="#" class="social-icon-2"><i class="fa fa-twitter-square"></i></a> <a href="#" class="social-icon-3"><i class="fa fa-youtube-square"></i></a> </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</div>
</section>


`;