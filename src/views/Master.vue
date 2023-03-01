<template>
    <header-section></header-section>

    <router-view></router-view>

    <footer-section></footer-section>
</template>

<script>
import HeaderSection from '../components/frontend/Header.vue'
import FooterSection from '../components/frontend/Footer.vue'
export default {
    components: { HeaderSection, FooterSection },
    name: 'Master',
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    },
}
</script>