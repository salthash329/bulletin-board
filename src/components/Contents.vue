<template>
<div>
  <v-data-table
    :headers="headers"
    :items="contents"
    :items-per-page="10"
    class="elevation-1"
    :pagination.sync="pagination"
    :current-page.sync="currentPage"
    rows-per-page-text="ページ"
  >
      <!-- <div class="my-2">
        <v-btn depressed small color="primary">Primary</v-btn>
      </div> -->

       <template  slot="items" slot-scope="props">                   
          <!-- <td class="text-xs-right">{{ props.item.fromTime | formatDate() }} ~ {{ props.item.toTime | formatDate() }}</td>                                                    
          <td class="text-xs-right">{{ props.item.category }}</td>
          <td class="text-xs-right">{{ props.item.eventName}}</td>
          <td class="text-xs-right">{{ props.item.roomName}}</td>
          <td class="text-xs-right">{{ props.item.responsiblePerson}}</td>
          <td class="text-xs-right">{{ props.item.facilities}}</td>
          <td class="text-xs-right">{{ props.item.catering}}</td>
          <td class="text-xs-right">{{ props.item.note}}</td>                                                
          <td class="text-xs-right">{{ props.item.reservationTime | formatDateLL() }}</td>                                                                             -->
          <td class="text-xs-right">               
            <router-link tag="v-btn" :to="{ name: 'Index', params: { itemid: props.item.reservationId }}">詳細</router-link>
          </td>                                                                            
    </template>
  </v-data-table>

</div>

</template>

<script>
  export default {
    name: 'Contents',
    data () {
      return {
        headers: [
          {
            text: '投稿者',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '業種', value: 'industory' },
          { text: '投稿日時', value: 'timestamp' },
          { text: '投稿内容', value: 'content' },          
          { text: '詳細をみる', value: 'more' }          
        ],
        contents: [
          {
            name: '田中　徹',
            industory: 'タクシー',
            timestamp: '2020/4/2 17:30',
            content: '困っています。収入が１２万円まで減りました。',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },
          {
            name: '匿名ユーザー',
            industory: 'タクシー',
            timestamp: '2020/4/2 18:30',
            content: 'テキストテキストテキストテキストテキストテキストテキスト',
            more: '詳細',
          },

        ],
      }
    },
  }
</script>