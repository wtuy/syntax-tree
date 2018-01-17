<template>
        <div>
          <!--b-container-->
            <b-row style="margin-left: 50px; margin-right:50px;">
              <b-col cols="9">
                <!--Drawer-->
                <div class="drawer">
                  <b-embed
                    type="iframe"
                    src=""
                    id="drawer">
                  </b-embed>
                </div>
                <b-row>
                  <b-col>
                    <h5>Part of Speech</h5>
                    <b-button-group size="sm">
                      <b-row>
                      <div v-for="data in thPartofSpeechs">
                        <b-button inlined size="sm" variant="outline-success" v-on:click="newNode">{{data.POS}}</b-button>
                      </div>
                    </b-row>
                    </b-button-group>

                      <div v-for="data in thPartofSpeechs">
                        {{data.Description}}
                      </div>

                  </b-col>

                  <b-col>
                    <h5>Phrase</h5>
                    <b-button-group size="sm">
                      <b-row>
                      <div v-for="data in phrases">
                        <b-button size="sm" variant="outline-primary" v-on:click="newNode">{{data.Phrase}}</b-button>
                      </div>
                      </b-row>
                      </b-button-group>

                      <div v-for="data in phrases">
                        {{data.Description}}
                      </div>
                  </b-col>
                </b-row>
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

              </b-col>
            </b-row>
          <!--/b-container-->
        </div>
</template>

<script>
import pof from './json/thpof.json'
import phrase from './json/phase.json'
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
    margin-bottom: 10px;
  }
  ul{

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
