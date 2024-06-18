<template>
  <link rel="stylesheet" href="contentmoderation.css" />
  <nav class="my-nav">
    <RouterLink style="text-decoration: none; color: #1e427f" to="/deletepage">
      <div class="delete">Delete user</div>
    </RouterLink>

    <RouterLink style="text-decoration: none; color: #1e427f" to="/Content">
      <div>
        <button class="content">Content moderation</button>
      </div>
    </RouterLink>

    <RouterLink style="text-decoration: none; color: #1e427f" to="/logout">
      <div class="logout">Log out</div>
    </RouterLink>
  </nav>
</template>
