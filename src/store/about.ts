import { Store } from '../core/heropy'

interface State {
    photo: string
    name: string
    email: string
    blog: string
    github: string
    repository: string
}

export default new Store<State>({
    photo: 'http://',
    name: 'CHAN / ParkChanYoung',
    email: 'thesecon@gmail.com',
    blog: 'https://white1614@naver.com',
    github: 'https://github.com/chanyoungcoding',
    repository: 'https://github.com/chanyoungcoding/Movie-App'
})