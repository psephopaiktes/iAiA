<template>
    <div id="home">
        <button @click="login">Googleアカウントでログイン</button>
        <router-link to="/dice">ログインせずに試す</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component

export default class Home extends Vue {
    // methods
    public login() {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .catch((reason) => { alert(reason); });
    }
}
</script>
