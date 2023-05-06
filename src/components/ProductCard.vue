<template>
    <div v-for="(item, index) in contentData" :key="item.index">
        <div class="card" style="width: 18rem;">
            <small class="d-none">{{ index }}</small>
            <img :src="item.src" class="card-img-top" :alt="item.title">
            <div class="card-body">
                <p class="card-text">{{ item.title }}</p>
            </div>
            <div :title="item.description">
                <div class="card-overlay" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
                    <div class="card-overlay-text">
                        <p class="card-overlay-title">{{ item.title }}</p>
                        <div class="card-overlay-description">{{ item.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        contentData: {},
    },
    data() {
        return {
            showTooltip: false,
        };
    },
};
</script>

<style scoped>
.card:hover,
img:hover {
    opacity: 0.6;
}

.card-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.card-overlay:hover {
    opacity: 1;
}

.card-overlay-text {
    overflow-y: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--white-color);
    width: 100%;
    height: calc(100% - 3rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
}

.card-overlay-title {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
}

.card-overlay-description {
    margin: 0;
    max-height: 150px; /* ou qualquer valor que você achar adequado */
    overflow-y: auto;

}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0;
}
</style>
