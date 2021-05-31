Vue.component('vue-directives', {
    template: `<div class="mt-5">
                    <h4>{{ title }}</h4>
                    <hr />
                    <p v-text="text"></p>
                    <a class="link-success" :href="link.url" :title="link.title" v-text="link.text" target="_blank"></a>
                    <directive-html></directive-html>
               </div>`,
    data() {
        return {
            title: 'Directives',
            text: 'If you have not used AngularJS before, you probably don’t know what a directive is. Essentially, a directive is some special token in the markup that tells the library to do something to a DOM element. In Vue.js, the concept of directive is drastically simpler than that in Angular.',
            link: {
                text: 'More info',
                url: 'https://vuejs.org/v2/api/#Directives',
                title: 'Vue.js Directives API'
            }
        }
    },
    components: {
        'directive-html': DirectiveHtml
    }
})
