let DirectiveHtml = {
    template: `<div class="mt-3">
                    <div v-for="directive in directives" class="alert alert-success">
                        <p><span class="badge bg-dark"><i>{{ directive.title }}</i></span></p>
                        <p v-html="directive.text"></p>
                        <button class="btn btn-light" v-if="directive.button" v-on:click="directive.mostrar = !directive.mostrar">Hide/Show <i v-show="directive.mostrar" class="lni lni-eye"></i></button>
                    </div>
               </div>`,
    data() {
        return {
            directives: [
                {
                    title: 'v-text',
                    text: 'Updates the element’s textContent. If you need to update the part of textContent, you should use <b>{{ Mustache }}</b> interpolations.'
                },
                {
                    title: 'v-html',
                    text: 'Updates the element’s <b>innerHTML</b>. Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates. If you find yourself trying to compose templates using v-html, try to rethink the solution by using components instead.'
                },
                {
                    title: 'v-show',
                    text: 'Toggles the element’s <b>display</b> CSS property based on the truthy-ness of the expression value. This directive triggers transitions when its condition changes. Click the following link to show/hide:</a>',
                    button: 'Toggles the element’s <b>display</b> CSS property based on the truthy-ness of the expression value. This directive triggers transitions when its condition changes. Click the following link to show/hide:</a>',
                    mostrar: false
                }
            ]
        }
    }
}
