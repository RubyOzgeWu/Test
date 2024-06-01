<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
      <q-btn flat to="/login" label="login" />
      <!-- <q-btn flat label="logout" @click="logout" /> -->
      <q-item clickable class="GL__menu-link-logout" @click="logout">
        <q-item-section>Logout</q-item-section>
      </q-item>
      <p v-if="isDirector">我是主管</p>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> 這邊放 Side bar </q-item-label>

        <EssentialLink />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useUserStore } from "../stores/user.js";
import { storeToRefs } from "pinia";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(true);

/* 登出 */
const user = useUserStore();
const { logout } = user;

/* 判斷身份 */
const { isDirector } = storeToRefs(user);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
