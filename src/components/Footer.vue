<template>
<div footer>
  <!-- <v-container fluid> -->
  <v-card>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue lighten-1 text-center"
      >
        <v-card-text>
    
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>中小企業向け コロナウイルス対策掲示板</strong>
        </v-card-text>
      </v-card>

  <!-- <router-link tag="v-btn" 
              :to="{ name: 'Pageform', 
                query: { room_id:
                  props.item.roomId, 
                  day: props.item.day, 
                  from_time: props.item.fromTime, 
                  to_time: props.item.toTime, 
                  room_name: props.item.roomName,
                  fromDay: fromDay,
                  toDay: toDay,
                  roomId: roomId,
                  page: pagination.page,
                  number: number }}">
            予約申請</router-link> -->
      <!-- <router-link tag="v-btn"
          :to="{ name: 'Form'}" > 
      </router-link> -->
           <!-- <router-link  to="/forget">パスワードをお忘れの場合</router-link> -->
         <!-- <router-link
          to="/"
          tag="v-btn"
              absolute
              dark
              fab
              top
              right
              color="blue"                        
         > 
         <v-icon>mdi-plus</v-icon>
          </router-link>          -->
          <v-btn
              to="/form"
              absolute
              dark
              fab
              top
              right
              color="pink"              
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>  
    </v-footer>

    <v-row
      align="center"
      justify="center"
      class="ma-12"
    >
      <v-col
        cols="12"
        md="8"
      >  
      </v-col>      
    </v-row>        
  </v-card>
<!-- </v-container>   -->
</div>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'absolute',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>