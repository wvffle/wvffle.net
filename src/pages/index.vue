<template>
    <div class="grid grid-cols-3 min-h-[100vh] shadow-lg bg-white relative z-1">
        <div class="flex items-center justify-center">
            <img src="../assets/logo.svg" />
        </div>
        <div class="relative overflow-hidden col-span-2 flex items-center justify-center">
            <div class="transform -skew-x-4 bg-[#a7561e] translate-x-8 absolute inset-0 -z-1" />
            <div class="transform -skew-x-4 bg-[#ffa621] shadow-2xl translate-x-12 absolute inset-0 -z-1" />
            <div class="w-full bg-gray-700 rounded-md max-w-2xl mx-auto overflow-hidden">
                <div class="flex border-b border-gray-500">
                    <div @click="tab = 'wvffle.vue'" :class="tab === 'wvffle.vue' ? 'text-[#ffa621] bg-gray-600' : 'text-gray-400'" class=" py-2 px-4 flex items-center cursor-pointer">
                        <img src="../assets/vue.png" class="h-[2ch] mr-2 block" />
                        <div class="mr-2">
                            wvffle.vue
                        </div>
                        <div class="h-4 w-4 rounded-full cursor-pointer hover:(bg-gray-500 text-white) text-gray-500 flex items-center justify-center">&times;</div>
                    </div>

                    <div @click="tab = 'projects.md'" :class="tab === 'projects.md' ? 'text-[#ffa621] bg-gray-600' : 'text-gray-400'" class=" py-2 px-4 flex items-center cursor-pointer">
                        <img src="../assets/md.png" class="h-[2ch] mr-2 block" />
                        <div class="mr-2">
                            projects.md
                        </div>
                        <div class="h-4 w-4 rounded-full cursor-pointer hover:(bg-gray-500 text-white) text-gray-500 flex items-center justify-center">&times;</div>
                    </div>
                </div>
                <pre class="text-sm text-white p-2 px-4 shadow-xl"><code v-html="tabs[tab]" /></pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const devSFC = `<script setup>
    import { computed, readonly, reactive } from 'vue'

    const currentYear = new Date().getFullYear()
    const experience = computed(() => currentYear - 2010)

    const skills = reactive([
        'vue', 'windicss', 'graphql',
        'javascript', 'java', 'python',
        'docker', 'haproxy', 'cloudflare'
    ])

    const tools = reactive([
        'archlinux', 'neovim', 'intellij idea',
        'yarn', 'vite', 'git'
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

console.log(prism.languages)
const tabs = {
    'wvffle.vue': prism.highlight(devSFC, prism.languages.html, 'html'),

    // TODO: Add prism for markdown
    'projects.md': `# my projects

#### 2021
- [pb.wvffle.net](https://pb.wvffle.net)
- [bosohandmade.pl](https://bosohandmade.pl)
- [radon2 maven plugin](https://github.com/wvffle/radon2-maven-plugin)

#### 2020
- [wspinanie.bialystok.pl](https://wspinanie.bialystok.pl)
- [wyjebalo.net](https://wyjebalo.net)

#### 2019
- [waffy](https://github.com/wvffle/waffy)
- [panda-lang.org](https://panda-lang.org/)

#### 2018
- [rehabilitacja-dzieci.com.pl](https://rehabilitacja-dzieci.com.pl)

#### 2017
- [wvffle.net](https://wvffle.net) 

#### 2016
- [vimterm](https://github.com/wvffle/vimterm)
- [css waffle](https://codepen.io/wvffle/pen/EyJxwa)
- [css coffee cup](https://codepen.io/wvffle/pen/xOZbpX)

#### 2015
- [waff-query](https://github.com/wvffle/waff-query)` 
}
const tab = ref(Object.keys(tabs)[0])
</script>
