<template>
	<q-page class="column items-center justify-center text-center">

		<q-card>
			<q-card-section class="text-white text-weight-thin text-uppercase" style="font-size:2em">
				Graduations
			</q-card-section>
			<q-card-section class="text-weight-light text-white text-center">
				Solo Graduation Photos (In-Studio): $80/hr <q-space/>
				<div class="text-weight-bold">Includes:</div><q-space/>
				30 edited pictures <q-space/>
				2 outfits changes<q-space/>
			</q-card-section>
			<q-card-section class="text-weight-light text-white text-center">
				Solo Graduation Photos (On-Campus): $120/hr <q-space/>
				<div class="text-weight-bold">Includes:</div><q-space/>
				30 edited pictures <q-space/>
				2 outfits minimum<q-space/>
			</q-card-section>
			<q-card-section class="text-white text-weight-light">
				Family Graduation Photos (In-Studio): $150/hr <q-space/>
				<div class="text-weight-bold">Includes:</div><q-space/>
				50 edited pictures <q-space/>
			</q-card-section>
			<q-card-section class="text-white text-weight-light">
				Family Graduation Photos (On-Campus): $200/hr <q-space/>
				<div class="text-weight-bold">Includes:</div><q-space/>
				50 edited pictures <q-space/>
			</q-card-section>
		</q-card>
		<q-card class="card-style mobile-only"> 
			<img src="statics/graduation2.jpg"/>
			<img src="statics/graduation8.jpg"/>
			<img src="statics/graduation9.jpg"/>
			<img src="statics/graduation7.jpg"/>
			<img src="statics/graduation3.jpg"/>
			<img src="statics/graduation6.jpg"/>
			<img src="statics/graduation11.jpg"/>

			<img src="statics/graduation4.jpg"/>
			<img src="statics/graduation5.jpg"/>
			<img src="statics/graduation14.jpg"/>
			<img src="statics/graduation13.jpg"/>

			<img src="statics/graduation15.jpg"/>
			<img src="statics/graduation16.jpg"/>
			
			<img src="statics/graduation17.jpg"/>
			<img src="statics/graduation18.jpg"/>
		</q-card>
		<q-card class="row items-center justify-center desktop-only">
			<q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height:25rem; width:50rem; ">
				<div class="row no-wrap">
					<img class="img-style" src="statics/graduation2.jpg"/>
					<img class="img-style" src="statics/graduation8.jpg"/>
					
					<img class="img-style" src="statics/graduation9.jpg"/>
					<img class="img-style" src="statics/graduation7.jpg"/>

					<img class="img-style" src="statics/graduation3.jpg"/>
					<img class="img-style" src="statics/graduation6.jpg"/>
					<img class="img-style" src="statics/graduation11.jpg"/>
				</div>
			</q-scroll-area>
		</q-card>
		<q-card class="desktop-only">
			<q-card-section>
				<img class="img-style" src="statics/graduation14.jpg"/>
				<img class="img-style" src="statics/graduation4.jpg"/>
				<img class="img-style" src="statics/graduation5.jpg"/>
				<img class="img-style" src="statics/graduation13.jpg"/>
			</q-card-section>
		</q-card>
		<q-card class="row items-center justify-center desktop-only">
			<q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height:25rem; width:50rem; ">
				<div class="row no-wrap">
					<img class="img-style" src="statics/graduation15.jpg"/>
					<img class="img-style" src="statics/graduation16.jpg"/>
					
					<img class="img-style" src="statics/graduation17.jpg"/>
					<img class="img-style" src="statics/graduation18.jpg"/>
				</div>
			</q-scroll-area>
		</q-card>
	</q-page>
</template>

<script>
	import { ref } from 'vue'
	
	export default {
		setup () {
			return{
				thumbStyle: {
			        right: '4px',
			        borderRadius: '5px',
			        backgroundColor: '#027be3',
			        width: '5px',
			        opacity: 0.75
			      },

			      barStyle: {
			        right: '2px',
			        borderRadius: '9px',
			        backgroundColor: '#027be3',
			        width: '9px',
			        opacity: 0.2
			      }
			}
		}
	}
</script>

<style>
body {
  background: linear-gradient(270deg, black 87%, gray);
}
.card-style {
	max-width:15rem;
}
.img-style {
	height: 22.5rem;
}
.q-card{
	background: #fff0;
}
</style>