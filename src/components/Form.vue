<template>
<v-app>
  <div form>
    <v-container fluid grid-list-md>
      <v-layout justify-center >     
        <v-flex xs10 sm10 offset-sm0>
          <h2>投稿フォーム</h2>          
           <v-form
              ref="form"
              id="form"
              v-model="valid"
              lazy-validation
           >     
            <h5 ref="radio" class="headline" >カテゴリー ※業界を選択してください </h5>
            <v-radio-group v-model="category" row >        
              <v-radio color="indigo" label="タクシー" value="タクシー" checked="category === 'タクシー'"></v-radio>
              <v-radio color="indigo" label="物流" value="物流" checked="category === '物流'"></v-radio>               
            </v-radio-group>   

          <h5 class="avaliable" >
            タイトル            
          </h5>
            <v-text-field
              v-model="eventName"
              :rules="nameRules"
              :counter="30"
              label="タイトル"
              required
            ></v-text-field>    

          <h5 class="avaliable" >
            説明
          </h5>        

            <v-textarea v-model="note" rows="2">
              <template v-slot:label>
                  コメント 
              </template>
            </v-textarea>

              <template>
                <div class="text-xs-center">
                  <v-dialog v-model="dialog" width="400">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" class="v-btn theme--light">
                        {{buttonName}}
                      </v-btn>

                       <router-link tag="v-btn" :to="{ name: 'PageFind', params: {back: 1
                                    , fromDay: $route.query.fromDay
                                    , toDay: $route.query.toDay
                                    , number: $route.query.number
                                    , page : $route.query.page
                                    , roomId: $route.query.roomId}}">
                                戻る</router-link>
                    </template>

                    <v-card>
                      <v-card-text>
                        入力した内容で予約申請しますか？
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <button @click="apply" class="dark v-btn theme--light" flat>はい</button>
                         <v-spacer></v-spacer>
                        <button @click="dialog = false" class="dark v-btn theme--light" flat>いいえ</button>
                         <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template>
          </v-form>
        </v-flex>
      </v-layout>     
    </v-container>
  </div>  
</v-app>  
</template>


<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'  
// import axios from 'axios'
// const moment = require('moment-timezone');
// const momentcal = require('moment');

export default {
  name: 'Form',
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },
    data: function() {
      return {
        room_id : this.$route.query.room_id,
        room_name : this.$route.query.room_name,
        init_day : this.$route.query.day,
        init_from_time : this.$route.query.from_time,
        init_to_time : this.$route.query.to_time,
        category : '社外の出席あり',
        participants: false,
        eventName:'',
        reservedFrom : '',
        responsible_person : '',
        reserved_person: '',
        contact_information : '',
        facilities: '',
        ipad:false,
        clicker:false,
        tv:false,
        box:false,
        key:false,
        facilityItems: [
          '希望する',
          '希望しない'
        ],
        catering : '',
        cateringItems :[
          'あり',
          'なし'
        ],
        supplier: '',
        note : '',
        digitalContribution : true,
        allowSpaces: false,
        match: 'Foobar',
        max: 0,
        model: 'Foobar',
        type:'', 
        reservation: null,
        buttonName: "登録する",
        nameRules: [
          v => !!v || '会議・イベント名を入力してください',
          v => v.length <= 30 || '30文字以下で入力してください'
        ],   
        responsible_person_rules: [
          v => !!v || '窓口担当者を入力してください',
          v => v.length <= 30 || '30文字以下で入力してください'
        ],
        dialog: false,
        validations: {
          eventName: { required },
          responsible_person: { required },        
        },   
        valid: false,
      }},
}
</script>
