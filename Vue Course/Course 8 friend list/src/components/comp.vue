<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'friendIsFavorite'
    // ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            // default: false, ---> if required is false
            // validator: function(value) {
            //     return value === 1 || value === 0
            // }
        },
        emits: ['toggle-favorite', 'delete']
        // emits: {
        //     'toggle-favorite': function (id) {
        //         if(id){
        //             return true
        //         }else{
        //             console.warn('Id is missing')
        //             return false
        //         }
        //     }
        // }
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        hideShow() {
            this.show = !this.show
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id)
        },
        deleteFriend(){
            this.$emit('delete',this.id) 
        }
    }
}
</script>

<template>
    <li class="head">
        <h1>{{ name }} {{ isFavorite === true ? '(Favorite)' : '' }}</h1>
        <hr>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <button v-if="show" @click="hideShow()">Hide Details</button>
        <button v-else @click="hideShow()">Show Details</button>
        <ul v-show="show">
            <li class="li"><span>Phone:</span> {{ phoneNumber }}</li>
            <li class="li"><span>Email:</span> {{ emailAddress }}</li>
        </ul>
        <br>
        <button @click="deleteFriend">Delete</button>
    </li>
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

.head {
    margin-top: 40px;
    background-color: #ffffff;
    border-radius: 43px;
    box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
    padding: 50px;
}



h1 {
    color: #520144;
    font-size: 50px;
    font-weight: bold;
}

hr {
    height: 10px;
    background-color: #ccc;
    border: none;
    border-radius: 10px;
}


.li {
    padding: 40px;
    background-color: #ffffff;
    border-radius: 43px;
    box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
    margin-top: 20px;
}

button {
    cursor: pointer;
    background-color: #ff0077;
    border: 2px solid black;
    color: #ffffff;
    padding: 8px 20px;
    margin-top: 20px;
}

span {
    font-weight: bold;
}
</style>