import SearchResult from './SearchResult.vue';

export default {
    title: 'SearchResult',
    component: SearchResult
};

const Template = (args) => ({
    components: { SearchResult },
    props: Object.keys(args),
    template: '<SearchResult :result="result" />',
});


export const Simple = Template.bind({});
Simple.args = { result: 'A simple result' };

export const LongText = Template.bind({});
LongText.args = { result: 'A result with a rather long label' };