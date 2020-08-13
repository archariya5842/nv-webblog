<template>
 <div>
 <div class="nv-navbar">
 <ul class="nav">
 <li><router-link :to="{name: 'blogs'}" >Blogs</router-link></li>
 <li><router-link :to="{name: 'users'}" >Users</router-link></li>
 <li><router-link :to="{name: 'comments'}" >Comments</router-link></li>
 <li><router-link :to="{name: 'login'}" >Login</router-link></li>
 <li><router-link :to="{name: 'blogs'}" >Blogs</router-link></li>
 </ul>
 <div class="clearfix"></div>
 </div>
 </div>
</template>
<style scoped>
 .nv-navbar {
 background-color:rgb(229, 188, 253);
 width: 100%;
 padding:10px 0px 10px 0px;
 }
 .nv-navbar .nav {
 list-style: none;
 margin:0;
 padding:0;
 float:left;
 }
 .nv-navbar .nav li {
 float:left;
 }
 .nv-navbar .nav li a {
 padding: 10px;
 text-decoration: none;
 color:rgb(29, 29, 29);
 font-weight: bold;
 }
 .nv-navbar .nav li a:hover {
 padding: 10px;
 text-decoration: none;
 color:rgb(80, 80, 80);
 }
 .nv-navbar .nav li a.router-link-active {
 background-color:rgb(170, 0, 162);
 color:darkslategrey;
 }
 .clearfix {
 clear: left;
 }
 </style>