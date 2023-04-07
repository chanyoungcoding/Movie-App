import { Component } from '../core/heropy';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
    constructor() {
        super()
        movieStore.subscribe('movies', () => {
            this.render()
        })
        movieStore.subscribe('loading', () => {
            this.render()
        })
        movieStore.subscribe('message', () => {
            this.render()
        })
    }
    render() {
        this.el.classList.add('movie-list')
        this.el.innerHTML = /*html*/`
            ${movieStore.state.message
                ? `<div class="message">${movieStore.state.message}</div>`
                : '<div class="movies"></div>'}
            <div class="the-loader hide"></div>
        `

        const moviesEl = this.el.querySelector('.movies')
        moviesEl?.append(
            ...movieStore.state.movies.map(movie => {
                return new MovieItem({ movie }).el
                //movie: movie 일때 :movie 생략 가능
                // ... 한것은 map 으로 하면 배열이 되기 때문이다.
            })                                    
        )

        const loaderEl = this.el.querySelector('.the-loader')
        movieStore.state.loading
            ? loaderEl.classList.remove('hide')
            : loaderEl.classList.add('hide')
    }
}