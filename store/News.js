import { defineStore } from "pinia"

export const useNews = defineStore('news', {
    state: () => ({
        nav: '',
        news: ''
    }),
    actions: {
        setNav(nav) {
            this.nav = nav
        },
        setNews(news) {
            this.news = news
        },
        addNews(news) {
            this.news.push(news)
        }
    }
})