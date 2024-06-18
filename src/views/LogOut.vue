<template>
  <link rel="stylesheet" href="logout.css" />
  <nav class="my-nav">
    <RouterLink style="text-decoration: none; color: #1e427f" to="/deletepage">
      <div class="delete">Delete user</div>
    </RouterLink>

    <RouterLink style="text-decoration: none; color: #1e427f" to="/Content">
      <div class="content">Content moderation</div>
    </RouterLink>

    <RouterLink style="text-decoration: none" to="/logout">
      <button class="logout">Log out</button>
    </RouterLink>
  </nav>
</template>
