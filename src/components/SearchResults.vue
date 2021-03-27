<template>
    <div class="SearchResults">
        <SearchResult
            v-for="(result, index) in results"
            :key="index"
            :result="result"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import SearchResult from "./SearchResult.vue";
    @Component({
        components: {SearchResult}
    })
    export default class SearchResults extends Vue {
        @Prop({required: true})
        results: Array<string>
    }
</script>

<style scoped lang="scss">
    .SearchResults {
        width: 100%;
        max-height: 400px;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        border-radius: 2px;
    }
</style>
