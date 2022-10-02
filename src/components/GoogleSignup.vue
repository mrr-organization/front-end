<template>
  <GoogleLogin :callback="callback" />
</template>

<script setup>
import { decodeCredential } from "vue3-google-login";
const callback = (response) => {
  const userData = decodeCredential(response.credential);
  console.log("Handle the userData", userData);
};
</script>