<template>
  <div>
    <div>
    <!-- <h1>page1</h1>
     <p>{{msg}}</p>-->

    <router-link to="/page1/phone">phone</router-link>
    <router-link to="/page1/computer">computer</router-link>
  </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {

}
</script>
