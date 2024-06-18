<template>
  <link rel="stylesheet" href="history.css" />
  <div class="body">
    <p class="vid">Vidtext</p>
    <nav id="nav" class="my-nav">
      <router-link style="text-decoration: none; color: #797777" to="/home"
        ><p class="pp">Home</p></router-link
      >

      <router-link style="text-decoration: none; color: #797777" to="/profile"
        ><p class="pp">Profile</p></router-link
      >
      <router-link
        style="text-decoration: none; color: rgba(146, 44, 148, 1)"
        to="/history"
        ><p class="pp">History</p></router-link
      >
      <router-link style="text-decoration: none; color: #797777" to="/help"
        ><p class="pp">Help</p></router-link
      >
      <router-link
        style="text-decoration: none; color: #797777"
        to="/contact-us"
        ><p class="pp">Contact us</p></router-link
      >
    </nav>

    <div class="vide"></div>
    <div class="vide"></div>
    <div class="vide"></div>
    <div class="vide"></div>
  </div>
</template>
