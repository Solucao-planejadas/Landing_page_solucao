<template>
    <CarouselCard ref="carouselCardRef" :interval="3000" :autoplay="true" height="260px" pause-on-hover="" type="card" arrow="hover">
        <CarouselCardItem class="bg-transparent" v-for="i in 6" :key="i" :name="`cc_${i}`">
            <img class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAK80nyUvD3O-2NYEbRYLi0imoXL7sK2lJxFil_lHp_gtKRNgGt_ebXqQOmyTehdBGZGE&usqp=CAU" alt="">
        </CarouselCardItem>
    </CarouselCard>

</template>
<script>

import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'
export default {
    name: 'CarouselEmpresas',
    components: { CarouselCard, CarouselCardItem }
}
</script>

<style>
.carousel-card-mask {
    background: none !important;
}
</style>

