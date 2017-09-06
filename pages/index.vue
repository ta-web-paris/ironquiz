<template>
  <section>
    <h1>
      Ironquiz
    </h1>
    <h2>
      Realtime quiz application for bootcamps
    </h2>
    <h3>Testing Firebase realtime database</h3>
    <ul>
      <li
        v-for="el of collection"
        :key="el['.key']"
      >
        {{ el['.value'] }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  firebase() {
    return {
      collection: this.$fb.database().ref('collection')
    }
  }
}
</script>
