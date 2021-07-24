<template>
  <div class="modal-ctnr">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("closeMe");
    },
  },
};
</script>

<style scoped>
.modal-ctnr {
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    width: 280px;
    height: 250px;
    background-color: white;
    box-shadow: 1px 1px 4px silver;
    border-radius: 10px;
}

</style>