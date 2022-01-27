<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <h3>FCM Test</h3>

    <div id="example-2">
      <!-- `greet`는 메소드 이름으로 아래에 정의되어 있습니다 -->
      <button v-on:click="gettoken">Get Token</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
      gettoken: function () {
        console.log(this.$messaging)

        this.messaging().getToken({ vapidKey: "BDQjD0qScSM0TEHgEsjIUXHLJT0kgIGSN7OjS0m0PkH0jwVKvi8eujKoOQoqsTsO9as4THjWXmXlEye7u55zCes" })
        .then((currentToken) => {
          if (currentToken) {
            console.log('client token', currentToken)
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        })

      }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
