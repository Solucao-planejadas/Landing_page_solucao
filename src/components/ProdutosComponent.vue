<template>
    <div class="container mt-10">
        <nav class="d-flex justify-center">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">

                <div v-for="button in buttons" :key="button.buttonName">
                    <ButtonTabComponent :buttonName="button.buttonName" :isButtonActive="button.isButtonActive"/>
                </div>

            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">

            <ProductsCardGroup :content-data-pronta-entrega="contentDataProntaEntrega"
                               :nav="'nav-home'"
                               :aria-labelledby="'nav-home-tab'"
                               :is-button-active="true"
            />
            <ProductsCardGroup :content-data-pronta-entrega="contentDataSobMedida"
                               :nav="'nav-profile'"
                               :aria-labelledby="'nav-profile-tab'"
                               :is-button-active="false"
            />


        </div>

    </div>

</template>

<script>

import ButtonTabComponent from '@/components/ButtonTabComponent.vue';
import ProductsCardGroup from "@/components/ProductsCardGroup.vue";

export default {
    name: "ProdutosComponent",
    components: {ProductsCardGroup, ButtonTabComponent},
    data: () => ({
        buttons: [
            {buttonName: 'PRONTA-ENTREGA', isButtonActive: true},
            {buttonName: 'SOB-MEDIDA', isButtonActive: false},
        ],
        contentDataProntaEntrega: [
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'PRONTA-ENTREGA', src: 'https://picsum.photos/500/300?image=20'},
        ],
        contentDataSobMedida: [
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
            {title: 'SOB-MEDIDA', src: 'https://picsum.photos/500/300?image=20'},
        ],
    }),
};
</script>
