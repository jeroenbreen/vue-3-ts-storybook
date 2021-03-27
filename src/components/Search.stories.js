import Search from './Search.vue';

export default {
    title: 'Search',
    component: Search
};

const Template = (args) => ({
    components: { Search },
    props: Object.keys(args),
    template: '<Search/>',
});


export const Default = Template.bind({});
Default.args = {

};
