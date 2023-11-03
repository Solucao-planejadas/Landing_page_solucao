<template>
  <div>
    <button
        :class="{'active': isButtonActive}"
        class="nav-link"
        :id="id +'-tab'"
        data-bs-toggle="tab"
        :data-bs-target="'#' + id"
        type="button"
        role="tab"
        :aria-controls="id"
        aria-selected="true"
    >
      {{ buttonName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonTabComponent",
  props: {
    buttonName: {
      require: true,
      type: String
    },
    isButtonActive: {
      type: Boolean,
      require: false,
      default: false
    },
    contentData: {
      type: Object,
      require: true,
    },
    id: {
      type: String,
      require: true,
    }
  }
};
</script>