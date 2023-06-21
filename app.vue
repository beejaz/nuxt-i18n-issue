<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="sv">sv</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
