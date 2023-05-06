<template>
    <div v-for="(item, index) in contentData"
         :key="item.index">

        <div class="card" style="width: 18rem;">
            <small class="d-none">{{ index }}</small>
            <img :src="item.src" class="card-img-top" :alt="item.title">
            <div class="card-body">
                <p class="card-text">{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductCard',
    props: {
        contentData: {}
    }
}
</script>