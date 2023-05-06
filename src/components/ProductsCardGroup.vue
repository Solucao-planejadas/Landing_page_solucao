<template>
    <div class="tab-pane fade" :class="{'show active': isButtonActive}" :id="nav" role="tabpanel" :aria-labelledby="ariaLabelledby">
        <div class="card-group d-flex justify-center align-center mt-3 gap-4" :class="{'flex-column': $vuetify.display.xs || windowWidth < 768 }">
            <ProductCard :contentData="contentDataProntaEntrega"/>
        </div>
    </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue"

export default {
    name: 'ProductsCardGroup',
    components: {ProductCard},
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    props: {
        contentDataProntaEntrega: {},
        nav: {},
        ariaLabelledby: {},
        isButtonActive: {}
    }
}
</script>