<template>
    <div class="Search">
        <input v-model="search"/>
        <SearchResults
            v-if="displayResults"
            :results="filteredUsers"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import SearchResults from "./SearchResults.vue";
    @Component({
        components: {SearchResults}
    })

    export default class Search extends Vue {
        get search(): string {
            return this.$store.state.ui.searchString;
        }
        set search(value: string) {
            this.$store.commit('ui/setSearchString', value)
        }

        get displayResults(): boolean {
            return this.search.length > 0;
        }

        get filteredUsers(): Array<string> {
            return this.$store.state.users.all.filter((u:string) => u.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
        }
    }
</script>

<style scoped lang="scss">
    .Search {
        position: relative;
        width: 200px;

        input {
            background: #ddd;
            border: 0;
            outline: 0;
            height: 32px;
            width: 100%;
            padding: 8px;
            font-size: 18px;
        }

        .SearchResults {
            position: absolute;
            left: 0;
            top: 100%;
        }
    }
</style>
