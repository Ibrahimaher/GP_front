<template>
  <link rel="stylesheet" href="adminpage.css" />
  <nav class="my-nav">
    <router-link style="text-decoration: none" to="/deletepage"
      ><div class="delete">Delete user</div></router-link
    >

    <router-link style="text-decoration: none" to="/contentmoderationpage"
      ><div class="content">Content moderation</div></router-link
    >

    <router-link style="text-decoration: none" to="/"
      ><div class="logout">Log out</div></router-link
    >
  </nav>
</template>

<style scoped>
.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #1e427f;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #1e427f;
}
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #1e427f;
}
</style>
