<script setup>
import { ref, reactive } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/themes/prism-tomorrow.css'

const devSFC = `<script setup lang="ts">
    import { computed, readonly, reactive } from 'vue'

    const currentYear = new Date().getFullYear()
    const experience = computed(() => currentYear - 2010)

    const skills = reactive([
        'vue', 'unocss', 'graphql', 'apollo',
        'typescript', 'javascript', 'python', 
        'java','docker', 'haproxy', 'cloudflare'
    ])

    const tools = reactive([
        'archlinux', 'neovim', 'git', 'gitpod',
        'intellij idea', 'pnpm', 'yarn', 'vite'
    ])

    // NOTE: A Vue 3 developer
    const developer = readonly({
        name: 'Kasper Seweryn',
        github: 'wvffle',
        experience,
        skills,
        tools
    })
&lt;/script>`.replace('&lt;', '<')

const projects = `# my projects
#### 2022
- [Funkwhale fronted](https://demo.funkwhale.audio)
- [Funkwhale components](https://ui.funkwhale.audio)

#### 2021
- [pb.wvffle.net](https://pb.wvffle.net)
- [bosohandmade.pl](https://bosohandmade.pl)
- [radon2 maven plugin](https://github.com/wvffle/radon2-maven-plugin)
- [wspinanie.bialystok.pl](https://wspinanie.bialystok.pl)

#### 2020
- [wspinanie.bialystok.pl](http://cwflash.surge.sh)
- [wyjebalo.net](https://wyjebalo.net)

#### 2019
- [waffy](https://github.com/wvffle/waffy)
- [panda-lang.org](https://panda-lang.org/)

#### 2018
- [rehabilitacja-dzieci.com.pl](https://rehabilitacja-dzieci.com.pl)
- [obsessionbielsko.surge.sh](http://obsessionbielsko.surge.sh)

#### 2017
- [wvffle.net](https://wvffle.net) 

#### 2016
- [vimterm](https://github.com/wvffle/vimterm)
- [css waffle](https://codepen.io/wvffle/pen/EyJxwa)
- [css coffee cup](https://codepen.io/wvffle/pen/xOZbpX)

#### 2015
- [waff-query](https://github.com/wvffle/waff-query)`

const contact = `# contact
#### matrix
- @waff:juniorjpdj.pl

#### telegram
- [wvffle](https://t.me/wvffle)

#### email
- admin[at]wvffle[dot]net`

const tabs = reactive({
    'wvffle.vue': Prism.highlight(devSFC, Prism.languages.html, 'html'),
    'projects.md': Prism.highlight(projects, Prism.languages.md, 'md'),
    'contact.md': Prism.highlight(contact, Prism.languages.md, 'md'),
    'nope': 'nope'
})

const current = ref(Object.keys(tabs)[0])

const close = tab => {
    const keys = Object.keys(tabs)
    const idx = keys.indexOf(tab)

    delete tabs[tab]

    if (current.value === tab) {
        current.value = idx === 0 
            ? keys[idx + 1]
            : keys[idx - 1] ?? keys[idx]
    }
}
</script>

<template>
    <div class="md:grid grid-cols-3 min-h-[100vh] overflow-hidden shadow-lg bg-white relative z-1">
        <div class="flex items-center justify-center p-12">
            <img src="../assets/logo.svg" />
        </div>
        <div class="relative col-span-2 flex items-center justify-center p-8">
            <div class="transform md:(-skew-x-4 translate-x-8) bg-[#a7561e] <md:(-skew-y-4 translate-y-8) absolute inset-0 -z-1" />
            <div class="transform md:(-skew-x-4 translate-x-12) bg-[#ffa621] shadow-2xl <md:(-skew-y-4 translate-y-12) absolute inset-0 -z-1" />
            <div class="w-full bg-gray-700 rounded-md max-w-2xl mx-auto overflow-hidden">
                <div class="flex border-b border-gray-500 h-[41px]">
                    <template v-for="(content, tab) in tabs" :key="content">
                    <div v-if="tab !== 'nope'" @click="current = tab" :class="current === tab ? 'text-[#ffa621] bg-gray-600' : 'text-gray-400'" class="py-2 px-4 flex items-center cursor-pointer">
                        <img v-if="tab.endsWith('.vue')" src="../assets/vue.png" class="h-[2ch] mr-2 block" />
                        <img v-if="tab.endsWith('.md')" src="../assets/md.png" class="h-[2ch] mr-2 block" />
                        <div class="mr-2">{{ tab }}</div>
                        <div @click.stop="close(tab)" class="h-4 w-4 rounded-full cursor-pointer hover:(bg-gray-500 text-white) text-gray-500 flex items-center justify-center">&times;</div>
                    </div>
                    </template>
                </div>
                <pre v-if="current !== 'nope'" class="text-sm text-white p-2 px-4 shadow-xl h-136 overflow-y-scroll"><code v-html="tabs[current]" /></pre>
                <div v-else class="text-lg font-bold flex items-center justify-center h-136 overflow-y-scroll text-gray-800 p-2 px-4 shadow-xl">
                    You've closed everything, eh?
                </div>
            </div>
        </div>
    </div>
</template>
