<template>
  <div id="app">  
    <v-app>
       <Header/>
      <router-view/>
      <v-content>
        <Index/>
      </v-content>
      <!-- <AddContents/> -->
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Index from './components/Index';
import Header from './components/Header';
import Footer from './components/Footer';
// import AddContents from './components/atoms/AddContents';

export default {
  name: 'App',  

  components: {
    Index,
    Header,
    Footer,
    // AddContents
  },

  data: () => ({
    //
  }),
};
</script>
