<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
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
        desserts: [
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