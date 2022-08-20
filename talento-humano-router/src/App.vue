<template>
  <div id="nav">
    
    <router-link to="/"><h1 class="title">Talento<span>Humano</span></h1></router-link> 
    <router-link to="/" class="title1">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/blog">Blog</router-link>
    
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: -0.6%;
  color: black;

}
.title{
  display: inline;
   padding-right: 650px;
   color: black;
}
span{
  color: green;
}

#nav {
  padding: 30px;
  background: rgb(231, 112, 112);
  text-align: right;
  
 

}

#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 2rem;
  color: black;

  
}

#nav a.router-link-exact-active {
    color: rgb(4, 75, 51);
}
#nav title1.router-link-exact-active {
}
.title1:hover{
    box-shadow: 0px 2px 0px 0px green;

}
</style>
