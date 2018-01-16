console.log('index.js');


new Vue({
  el: '#app',
  data: {
    title: "Test"
  },
  methods: {
    changeTitle: function(event){
      this.title = event.target.value;
    }
  }
});
