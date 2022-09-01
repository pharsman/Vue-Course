<script>
import compVue from './components/comp.vue'
import newCompVue from './components/newComp.vue'
export default {
    components: {
        compVue,
        newCompVue
    },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    email: 'manuel@localhost.com',
                    phone: '01234 5678 991',
                    isFavorite: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    email: 'julie@localhost.com',
                    phone: '09843 1568 135',
                    isFavorite: false
                }
            ],
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const identFriend = this.friends.find(friend => friend.id === friendId)
            identFriend.isFavorite = !identFriend.isFavorite
        },
        addContactFriend(name, phone, email) {
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false
            }
            this.friends.push(newFriendContact)
        },
        deleteContact(friendId) {
            this.friends = this.friends.filter((friend) => friend.id !== friendId)
        }
    },
}
</script>

<template>
    <header>
        <h1>Friend List</h1>
    </header>
    <section>
        <newCompVue @add-contact="addContactFriend" />
        <ul class="ul">
            <compVue v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name"
                :phone-number="friend.phone" :email-address="friend.email" :is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact" />
        </ul>
    </section>
    <h1 class="empty" v-if="friends.length === 0">List is Empty :(</h1>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    list-style-type: none;
}

.empty {
    font-weight: bold;
    font-size: 50px;
    color: purple;
}

header {
    width: 700px;
    padding: 50px 60px;
    background-color: #520144;
    border-radius: 43px 43px 43px 43px;
    box-shadow: 0px 0px 42px -10px rgba(0, 0, 0, 0.75);
    margin: 50px auto;
}

header h1 {
    color: #ffffff;
    font-weight: bold;
    font-size: 50px;
}

.ul {
    width: 700px;
    margin: 40px auto;
}
</style>