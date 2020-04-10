<template>
<v-app>
<div contents>
<v-container fluid grid-list-md>      
<v-layout justify-center >       
<v-flex xs10 sm10 offset-sm0>
  <v-data-table
    :headers="headers"
    :items="contents"
    :rows-per-page-items="[10,30,50]"                                         
    class="elevation-1"
    :pagination.sync="pagination"
    :current-page.sync="currentPage"
    rows-per-page-text="ページ"
  >
      <!-- <div class="my-2">
        <v-btn depressed small color="primary">Primary</v-btn>
      </div> -->

       <template  slot="items" slot-scope="props">        
          <td class="text-xs-right">{{ props.item.id }}</td>          
          <td class="text-xs-right">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.industory}}</td>
          <td class="text-xs-right">{{ props.item.timestamp}}</td>
          <td class="text-xs-right">{{ props.item.content}}</td>
          <td class="text-xs-right">    
            <!-- <router-link tag="v-btn" :to="{ name: 'PageDetail', params: { itemid: props.item.reservationId }}">詳細</router-link>            -->
            <router-link tag="v-btn" :to="{ name: 'Detail', params: { itemId: props.item.id }}">詳細へ</router-link>
            <!-- <router-link tag="v-btn" to="/detail">詳細</router-link> -->
          </td>     
                                                                                 
    </template>
  </v-data-table>

  <router-link tag="v-btn" to="/detail/1">HOMEへ</router-link>
        </v-flex>                          
    </v-layout>
  </v-container> 
</div>
</v-app>
</template>

<script>
  export default {
    name: 'Contents',
    data () {
      return {
        headers: [
          { text: '投稿ID', align: 'start', sortable: false, value: 'id' },          
          { text: '投稿者', align: 'start', sortable: false, value: 'name' },          
          { text: '業種', value: 'industory' },
          { text: '投稿日時', value: 'timestamp' },
          { text: '投稿内容', value: 'content' },          
          { text: '詳細を見る',sortable: false, align:'left'}        
        ],
        rowsPerPageItems: [10, 20, 30],
        pagination: {
          rowsPerPage: 10
        },
        currentPage: 1,
        contents: [
          { 
            id: 1,
            name: '田中　徹',
            industory: 'タクシー',
            timestamp: '2020/4/2 17:30',
            content: '困っています。収入が１２万円まで減りました。'
            // more: '詳細',
          },
          {
            id: 2,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 3,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 4,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 5,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 6,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 7,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          },
          {
            id: 8,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            // more: '詳細',
          },
          {
            id: 9,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            // more: '詳細',
          },
          {
            id: 10,
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト'
            // more: '詳細',
          }
        ],    
      }
    },
  }
</script>

<style scoped>
 h2{
  margin-top:40px;
  margin-bottom:30px;
  color:rgba(0,0,0,.87);
  font-weight: 500;  
  font-size: 20px!important;
}

table.v-table tbody td{      
    font-size: 11px;
}

.elevation-1 {
    margin-top: 20px;
}

.v-btn{
  margin:0px;
  font-size: 12px;
}

tr{
 font-size: 12px!important;

}


td.text-xs-right{
 padding:0 6px!important;
 font-size: 12px!important;
}

th.column.text-xs-center{
  font-size: 12px!important;
}

table.v-table.tbody.td {
    font-size: 12px!important;
}


</style>
