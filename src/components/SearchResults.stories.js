import SearchResults from './SearchResults.vue';

export default {
    title: 'SearchResults',
    component: SearchResults
};

const Template = (args) => ({
    components: { SearchResults },
    props: Object.keys(args),
    template: '<SearchResults :results="results" />',
});


export const Default = Template.bind({});
Default.args = {
    results: ['Amsterdam', 'Kopenhagen', 'Madrid', 'Rome']
};
