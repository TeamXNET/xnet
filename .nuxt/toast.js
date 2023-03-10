import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"bottom-right","keepOnHover":true})

const globals = [{"name":"update","message":payload => payload.message,"options":{"position":"top-center","icon":"autorenew","theme":"bitwave","className":"","type":"update-toast","action":{"text":"update","class":"update-toast","onClick":( e, toast ) => {
              console.log( 'Reloading the page to update to latest version of bitwave.' );
              toast.goAway(0);
              window.location.reload();
            }}}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
