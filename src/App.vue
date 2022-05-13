<template>
  <div id="app">
    <Header/>
    <section id="content"> 
      <div class="container">
          <div class="row">
              <div class="span12">
                <div class="row">
                  <router-view></router-view>
                </div>
              </div>
          </div>
      </div>
    </section>
  <Footer/> 
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
