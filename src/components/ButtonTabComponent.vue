<template>
    <div>
        <button v-if="isButtonActive"
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
        >
            {{ buttonName }}
        </button>

        <button v-if="!isButtonActive"
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
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
    }
  }
};
</script>