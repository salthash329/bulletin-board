<template>
  <v-container>
    <Carousel />
    <v-row class="text-center"> 
      <v-col class="mb-4">    

        <Contents/>
        <p class="subheading font-weight-regular">
            コロナウイルスでお困りの事業者様、課題の投稿をお待ちしております                                                    
          <br>Githubでソースコードを公開しています
          <a
            href="https://github.com/salthash329/bulletin-board"
            target="_blank"
          >Github</a>
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import Carousel from './Carousel';
  import Contents from './Contents';
  export default {
    name: 'Index',
    components:{
      Carousel,
      Contents
    },
    data: () => ({  
  
    }),
  }
</script>
