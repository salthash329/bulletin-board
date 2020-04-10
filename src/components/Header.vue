<template>
 <div header>
    <v-layout row>
      <v-flex xs12 sm12 offset-sm0>
        <v-card>        
          <v-toolbar color="blue lighten-1">            
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>          
              <div class="title" v-resize-text>
                <router-link tag="v-toolbar-title" to="/form"> 中小企業向け コロナウイルス対策掲示板
                </router-link>
              </div>
            <v-spacer></v-spacer>                    
              <!-- <button v-if="loginStatus" @click.prevent="signOut" class="v-tab">ログアウト</button> -->
              <!-- <router-link v-else v-resize-text tag="v-tab" to="/login">ログイン</router-link> -->
          </v-toolbar>
        </v-card>
        
      </v-flex>
    </v-layout>

  <!-- Navigation Bar -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
 
        <v-list class="pa-1" v-if="userInfo">
          <v-list-tile avatar>          
            <v-list-tile-avatar v-show="headerPreviewImageSrc">
              <img :src="headerPreviewImageSrc">
            </v-list-tile-avatar>
            <v-list-tile-avatar color="#20be60" v-show="!headerPreviewImageSrc">
              <div class="non-avatar" v-text="headerLastName"></div>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-text="headerUserName"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

        <!-- 過去の利用履歴 -->
          <!-- <v-list-tile v-if="loginStatus">       
            <v-list-tile-action>
              <v-icon>{{ icon1 }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>        
              <router-link tag="v-list-tile-title" :to="`${url1}`">{{ title1 }}</router-link>
            </v-list-tile-content>
          </v-list-tile>   -->

        <!-- 利用ガイド -->
          <v-list-tile>       
            <v-list-tile-action>
              <v-icon>{{ icon2 }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>        
              <router-link tag="v-list-tile-title" :to="`${url2}`">{{ title2 }}</router-link>
            </v-list-tile-content>
          </v-list-tile>  

        <!-- アカウント設定 -->
          <!-- <v-list-tile v-if="loginStatus">       
            <v-list-tile-action>
              <v-icon>{{ icon3 }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>        
              <router-link tag="v-list-tile-title" :to="`${url3}`">{{ title3 }}</router-link>
            </v-list-tile-content>
          </v-list-tile>     -->
        </v-list>
      </v-navigation-drawer>

  </div>  
</template>



<script>
  export default {
    name: 'Header',
      data:()=>({
        drawer: false,
        title1:'過去の利用履歴',
        icon1: 'list',
        url1:  '/history',
        title2:'利用ガイド',
        icon2: 'help_outline',
        url2:  '/guide',
        title3:'アカウント設定',
        icon3: 'https',
        url3:  '/settings',
        tabs: null,
        is_admin: false,
    }),
  }
</script>

<style>
.title{
  margin: 15px;
  font-size: 1.0rem!important;
  color: #fff;
}
.v-toolbar-title{
  font-size: 1.0rem!important;
  margin-left: 5px!important;
}
a.router-link-exact-active {
  color: #fff;
}

a.v-tabs__item{
  color:#fff!important;
  font-size: 1.2rem;
  opacity:1!important;
  padding: 10px!important;
}
h5.headline{
    font-size: 14px!important;
    font-weight: 500;
    text-align: left;
    color: #42A5F5;
    padding-right: 20px;
}

button.v-tab{
  font-size: 16px!important;
  padding-top:2px;
}

.non-avatar{
  color: #fff; 
}

</style>