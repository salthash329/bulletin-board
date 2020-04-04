<template>
  <div id="app">  
    <v-app>
      <Header/>

      <v-content>
        <Index/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Index from './components/Index';
import Header from './components/Header'

export default {
  name: 'App',  

  components: {
    Index,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
