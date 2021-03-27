import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';

@Module({namespaced: true, name: 'ui'})

class Ui extends VuexModule {
    public searchString: string = '';

    @Mutation
    public setSearchString(value: string): void {
        this.searchString = value
    }
}

export default Ui
