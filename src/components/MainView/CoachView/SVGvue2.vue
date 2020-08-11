<template>
     <span class="tra-whe-one" v-if="getCoachPosition2==temperature.IntCoachPosition"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 139.54 33" style="enable-background:new 0 0 139.54 33;" xml:space="preserve">
<rect x="3.04" y="13" class="st0" width="136" height="5"/>

<path class="st1" v-if="temperature.is_Alarm" style="fill:#ff1e1e;stroke:#af0000;stroke-miterlimit:10;" d="M128.5,10h8.07c1.36,0,2.46,1.1,2.46,2.46v6.07c0,1.36-1.1,2.46-2.46,2.46h-8.07"/>
<path class="st1" v-if="!temperature.is_Alarm" d="M128.5,10h8.07c1.36,0,2.46,1.1,2.46,2.46v6.07c0,1.36-1.1,2.46-2.46,2.46h-8.07"/>
<path class="st1" d="M11.04,10H2.96C1.6,10,0.5,11.1,0.5,12.46v6.07C0.5,19.9,1.6,21,2.96,21h8.07"/>
<g>
	<g>
		<polygon class="st2" points="11.54,25.6 11.54,6.4 19.54,4.62 19.54,27.38 		"/>
		<path class="st3" d="M19.04,5.25v21.51l-7-1.56V6.8L19.04,5.25 M20.04,4l-9,2v20l9,2V4L20.04,4z"/>
	</g>
	<g>
		<polygon class="st2" points="19.54,27.71 19.54,4.32 27.54,0.77 27.54,32.15 		"/>
		<path class="st3" d="M27.04,1.54V31.3l-7-3.89V4.65L27.04,1.54 M28.04,0l-9,4v24l9,5V0L28.04,0z"/>
	</g>
	<path class="st1" d="M40.04,25.33V7.67c0-1.47-1.2-2.67-2.67-2.67h-2.66c-1.47,0-2.67,1.2-2.67,2.67v1.24v16.41H40.04z"/>
	<line class="st1" x1="40.54" y1="9.5" x2="32.04" y2="9.5"/>
	<line class="st1" x1="40.54" y1="12.5" x2="32.04" y2="12.5"/>
</g>
<g>
	<g>
		<polygon class="st2" points="120.04,4.62 128.04,6.4 128.04,25.6 120.04,27.38 		"/>
		<path class="st3" d="M120.54,5.25l7,1.56v18.4l-7,1.56V5.25 M119.54,4v24l9-2V6L119.54,4L119.54,4z"/>
	</g>
	<g>
		<polygon class="st2" points="112.04,0.77 120.04,4.32 120.04,27.71 112.04,32.15 		"/>
		<path class="st3" d="M112.54,1.54l7,3.11v22.76l-7,3.89V1.54 M111.54,0v33l9-5V4L111.54,0L111.54,0z"/>
	</g>
	<path class="st1" d="M99.54,25.33V7.67c0-1.47,1.2-2.67,2.67-2.67h2.66c1.47,0,2.67,1.2,2.67,2.67v1.24v16.41H99.54z"/>
	<line class="st1" x1="99.04" y1="9.5" x2="107.54" y2="9.5"/>
	<line class="st1" x1="99.04" y1="12.5" x2="107.54" y2="12.5"/>
</g>
</svg>
</span>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    
    props:['temperature'],
    computed:{
      ...mapGetters(['getCoachPosition1','getCoachPosition2']),
    },
}
</script>
<style scoped>

</style>