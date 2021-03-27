<template>
    <div class="SearchResult">
        {{result}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class SearchResult extends Vue {
        @Prop({required: true})
        readonly result: string

    }
</script>

<style scoped lang="scss">
    .SearchResult {
        padding: 8px;
        border-bottom: 1px solid #ddd;

        &:last-child {
            border-bottom: 0;
        }

        &:hover {
            background: #1ea7fd;
            color: #fff;
            cursor: pointer;
        }
    }
</style>
