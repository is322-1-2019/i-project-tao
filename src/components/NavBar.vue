<template>
  <div class="card-content">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Landing</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/login' }">Login</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ex01' }">Main1</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ex02' }">Main2</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/logout' }">Logout</b-navbar-item> 
      </template>
    </b-navbar>
    <!-- {{ $v.form.username.required }} -->
  </div>
</template>
