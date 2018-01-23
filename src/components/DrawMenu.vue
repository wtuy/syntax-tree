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
                    <h5 class="head">Part of Speech</h5>
                    <div id="posButton">
                      <b-row>
                        <b-col cols="3">
                          noun:
                        </b-col>
                        <b-col>
                        <b-button-group v-for="(data,index) in thPartofSpeechs">
                          <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index<6"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                          </b-button>
                        </b-button-group>
                        </b-col>
                      </b-row>

                      <b-row >
                        <b-col cols="3">
                            pronoun:
                        </b-col>
                        <b-col>
                        <b-button-group v-for="(data,index) in thPartofSpeechs">
                          <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=6&&index<10"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                          </b-button>
                        </b-button-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          verb:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=10&&index<13"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          auxiliary:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=13&&index<18"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          determiner:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=18&&index<27"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row >
                        <b-col cols="3">
                          adverb:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=27&&index<31"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          classifier:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=31&&index<36"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          conjunction:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=36&&index<39"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          proposition:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index==39"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          interjection:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index==40"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          prefix:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>40&&index<43"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          ending:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index>=43&&index<45"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          negator:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index==45"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>

                      <b-row>
                        <b-col cols="3">
                          punctuation:
                        </b-col>
                        <b-col>
                      <b-button-group v-for="(data,index) in thPartofSpeechs">
                        <b-button v-bind:class="{'btn-outline-danger': posShowDel , 'btn-outline-primary' : showPos}" v-if="index==46"  inlined size="sm" variant="outline-success" v-on:click="posOpr(index)">{{data.POS}}
                          <!--b-badge v-show="show" variant="danger" class="del-icon" v-on:click="deletePos(index)">x</b-badge-->
                        </b-button>
                      </b-button-group>
                    </b-col>
                      </b-row>
                    </div>

                        <!-- `greet` is the name of a method defined below -->



                      <div>
                        <b-btn v-b-modal.modal1 class="add-del-btn">+</b-btn>
                        <b-btn :pressed.sync="posShowDel" class="add-del-btn">x</b-btn>
                        <b-modal id="modal1" title="Part of Speech" ref="modal">
                          <b-form @submit="addPos">
                          <b-row>
                            <b-col sm="4">
                              <label>Part of speech:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input type="text" v-model="newNode.pos"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col sm="4">
                              <label>Description:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input type="text" v-model="newNode.description"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-button type="submit" variant="primary">Submit</b-button>
                          </b-row>
                        </b-form>
                        </b-modal>
                      </div>





                      <hr>
                      <div style="padding-left: 15px;">
                        <div class="desscription" v-for="data in thPartofSpeechs" style="display:inline;">
                          {{data.POS}}:{{data.Description}}
                        </div>
                      </div>

                  </b-col>

                  <b-col cols="5">
                    <h5 class="head">Phrase</h5>


                      <b-button-group v-for="(data,index) in phrases">
                        <b-button v-bind:class="{'btn-outline-danger': showDel , 'btn-outline-primary' : showPhrase}" size="sm" v-on:click="phraseOpr(index)">{{data.Phrase}}
                        </b-button>
                      </b-button-group>
                      <div id="phButton">
                      </div>

                      <div>
                        <b-btn v-b-modal.modal2 class="add-del-btn">+</b-btn>
                        <!--b-btn :pressed.sync="showPhrase" class="add-del-btn" v-on:click="deleteNode">x</b-btn-->
                        <b-btn class="add-del-btn" v-on:click="deleteNode">x</b-btn>
                        <!-- Modal Component -->
                        <b-modal id="modal2" title="Part of Speech" ref="modal">
                          <b-form @submit="addPhrase">
                          <b-row>
                            <b-col sm="4">
                              <label>Phrase:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input type="text" v-model="newNode.phrase"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col sm="4">
                              <label>Description:</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input type="text" v-model="newNode.description"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-button type="submit" variant="primary">Submit</b-button>
                          </b-row>
                        </b-form>
                        </b-modal>
                      </div>

                      <br>
                      <hr>

                      <div class="desscription" v-for="data in phrases">
                        {{data.Phrase}}:{{data.Description}}
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
                      <b-button v-on:click="onSuggest" variant="primary" size="sm">Suggestion</b-button>
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
      sentenceIn: '',
      newNode: {
        pos: '',
        description: '',
        phrase: ''
      },
      thPartofSpeechs: pof,
      phrases: phrase,
      show: false,
      showPhrase: true,
      showDel: false,
      posShowDel: false,
      showPos: true
    }
  },
  methods: {
        addPos: function (e) {
          // `this` inside methods points to the Vue instance
           e.preventDefault();
           var  newPosButton = document.createElement("button");
           newPosButton.classList.add('btn','btn-outline-success','btn-sm');
           var newPosText = document.createTextNode(this.newNode.pos.toUpperCase());
           //var newPosText = newText.toUpperCase();
           newPosButton.appendChild(newPosText);
           document.getElementById("posButton").appendChild(newPosButton);
           this.$refs.modal.hide();
           this.clearNode();
           //console.log(JSON.stringify(this.newNode));
         },
         onSuggest: function(e){
           e.preventDefault();
           console.log(this.sentenceIn);
         },
         posOpr: function(index) {
           if(this.posShowDel){
             this.thPartofSpeechs.splice(index,1);
          }
          else{
            console.log(this.thPartofSpeechs[index].POS);
          }
         },
         addPhrase: function(e){
           e.preventDefault();
           var  newPhButton = document.createElement("button");
           newPhButton.classList.add('btn','btn-outline-primary','btn-sm');
           var newPhText = document.createTextNode(this.newNode.phrase.toUpperCase());
           //var newPosText = newText.toUpperCase();
           newPhButton.appendChild(newPhText);
           document.getElementById("phButton").appendChild(newPhButton);
           this.$refs.modal.hide();
           this.clearNode();
         },
         phraseOpr: function(index){
           if(this.showDel){
             this.phrases.splice(index,1);
          }
          else{
            console.log(this.phrases[index].Phrase);
          }
         },
         deleteNode: function() {
           //var x = document.getElementsByClassName("phrase").classList.toggle("outline-danger");
           this.showDel=!this.showDel;
           this.showPhrase=!this.showPhrase;
         },
         clearNode: function() {
           this.newNode.pos = '';
           this.newNode.description = '';
           this.newNode.phrase = '';
         }
    }
}
</script>
<style>
  .drawer{
    border: 1px solid black;
    margin-bottom: 10px;
    height: 457px;
  }
  ul{

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
  .head{
    text-align: center;
  }
  .desscription{
    display: inline;
    font-size: 12px;
  }
  .row{
    padding-left: 15px;
    padding-right: 15px;
  }
  button:hover{
    cursor: pointer;
  }
  .modal-footer{
    display: none;
  }
  .add-del-btn{
    border-radius:50%;
    background-color:#e7e7e7;
    color: black;
    border: none;
  }
  .del-icon{
    border-radius: 50%;
    top: -5px !important;
    right: -6px;
    position: absolute !important;
    z-index: 1;
  }


</style>
