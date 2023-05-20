import { CreateComponent } from "./components/create.component";
import { FavoriteComponent } from "./components/favorite.component";
import { HeaderComponent } from "./components/header.component";
import { LoaderComponent } from "./components/loader.component";
import { NavigationComponent } from "./components/navigation.component"
import { PostsComponent } from "./components/posts.component";


const header = new HeaderComponent('header') //id = header
const navigation = new NavigationComponent('navigation') //'navigation' - id from html
const loader = new LoaderComponent('loader')             //'loader' - id from html

const favorite = new FavoriteComponent('favorite', {loader})
const posts = new PostsComponent('posts', {loader}) //{loader: loader}
const create = new CreateComponent('create')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])