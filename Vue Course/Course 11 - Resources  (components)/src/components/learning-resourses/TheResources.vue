<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResources')" :mode="storedResButton">Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('AddResources')" :mode="addResButtonMode">Add Resources</BaseButton>
    </BaseCard>
    
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResources from './AddResources.vue'

export default {
    components: {
        StoredResources,
        AddResources
    },
    data() {
        return {
            selectedTab: 'StoredResources',
            storedResorces: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    desc: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org/'
                },
                {
                    id: 'google',
                    title: 'Google',
                    desc: 'Learn Google.',
                    link: 'https://google.com/'
                },
            ]
        }
    },
    computed: {
        storedResButton() {
            return this.selectedTab === 'StoredResources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'AddResources' ? null : 'flat'
        },
    },
    provide() {
        return {
            resourses: this.storedResorces,
            addResource: this.addResource,
            removeResources: this.removeResources
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                desc: description,
                link: url
            }
            this.storedResorces.unshift(newResource)
            this.selectedTab = 'StoredResources'
        },
        removeResources(resId) {
            const resIndex = this.storedResorces.findIndex(res => res.id == resId)
            this.storedResorces.splice(resIndex, 1)
        },
    },
}
</script>
