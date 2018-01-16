<template>
        <div>
          <b-container>
            <b-row>
              <b-col cols="9" class="drawer">
                <!--Drawer-->
              </b-col>
              <b-col cols="3">
                <b-row>
                  <b-form>
                    <b-col cols="10">
                      <b-form-input
                      v-model="sentenceIn"
                      type="text"
                      placeholder="Enter sentence">
                      </b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <b-button :pressed.sync="suggestion" v-on:click="onSuggest" variant="primary" size="sm">Suggestion</b-button>
                    </b-col>
                  </b-form>
                </b-row>
                <b-row>
                  <b-col>
                    <h5>Part of Speech</h5>
                    <ul >
                      <li v-for="data in thPartofSpeechs">
                        <b-button size="sm" variant="outline-success" v-on:click="newNode">{{data.POS}}</b-button>
                        <br />
                        {{data.Description}}
                      </li>
                    </ul>
                  </b-col>

                  <b-col>
                    <h5>Phrase</h5>
                    <ul>
                      <li v-for="data in phrases">
                        <b-button size="sm" variant="outline-primary" v-on:click="newNode">{{data.Phrase}}</b-button>
                        <br />
                        {{data.Description}}
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </div>
</template>

<script>
import pof from '/Users/pechladaseenual/rsyntaxtree/src/json/thpof.json'
import phrase from '/Users/pechladaseenual/rsyntaxtree/src/json/phase.json'
export default {
  name : 'DrawMenu',
  data() {
    return {
      thPartofSpeechs: pof,
      phrases: phrase,
      sug:'hi',
      suggestion: true,
      submit: true
    }
  },
  methods: {
        newNode: function(e) {
          console.log(e.target.innerHTML);
        },
        onSuggest: function(e){
          e.preventDefault();
          console.log(this.sentenceIn);
        }

    }
}
</script>
<style>
  .drawer{
    border: 1px solid black;
  }
  ul{
    list-style-type: none;
    text-align: left;
  }
  .padding{
    margin: 15px;
  }
  .text-left{
    text-align: left;
  }
  button{
    margin: 5px;
  }
  input{
    margin:5px;
  }
</style>
