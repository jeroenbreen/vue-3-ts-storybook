import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';

@Module({namespaced: true, name: 'users'})

class Users extends VuexModule {
    public all: Array<string> = ['Jan', 'Piet', 'Joris', 'Corneel'];

}

export default Users
