<script>
export default {
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            loggedMsgs: []
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = Math.floor(Math.random() * (15 - 5)) + 5
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.addLogMsg('player', 'attack', attackValue)
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (18 - 8)) + 8
            this.playerHealth -= attackValue
            this.addLogMsg('monster', 'attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = Math.floor(Math.random() * (20 - 10)) + 10
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.addLogMsg('player', 'special attack', attackValue)
        },
        healPlayer() {
            this.currentRound++
            const healValue = Math.floor(Math.random() * (20 - 8)) + 8
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.attackPlayer()
            this.addLogMsg('player', 'heal', healValue)
        },
        restart() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.winner = null
            this.currentRound = 0
            this.loggedMsgs = [
            ]
        },
        surrender() {
            this.winner = 'monster'
            this.playerHealth = 0
        },
        addLogMsg(who, what, value) {
            this.loggedMsgs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
    computed: {
        damageMonster() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        damgePlayer() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        },

    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    },
}
</script>


<template>
    <section>
        <header>
            <h1>Monster Slayer</h1>
        </header>
        <div class="div">
            <h2>Monster Health</h2>
            <div class="healthbar">
                <div class="healtbar__value" :style="damageMonster"></div>
            </div>
        </div>
        <div class="div">
            <h2>Your Health</h2>
            <div class="healthbar">
                <div class="healtbar__value" :style="damgePlayer"></div>
            </div>
        </div>
        <div class="container" v-if="winner">
            <h2>Game Over !</h2>
            <h3 v-if="winner === 'monster'">You Lost!</h3>
            <h3 v-else-if="winner === 'player'">You Won!</h3>
            <h3 v-else>It's a Draw</h3>
            <button class="button new" v-show="winner" @click="restart()">Start New Game</button>
        </div>
        <section v-if="!winner">
            <button class="button" @click="attackMonster()">ATTACK</button>
            <button :disabled="mayUseSpecialAttack" class="button two" @click="specialAttackMonster()">SPECIAL
                ATTACK</button>
            <br>
            <button class="button three" @click="healPlayer()">HEAL</button>
            <button class="button four" @click="surrender()">SURRENDER</button>
        </section>
        <div class="div">
            <h2>Battle Log</h2>
            <ul>
                <li v-for="item in loggedMsgs">
                    <span :class="{'log_player': item.actionBy === 'player', 'log_monster': item.actionBy ==='monster'}">{{ item.actionBy === 'player' ? 'Player' : 'Monster' }}</span>
                    <span v-if="item.actionType === 'heal'"> heals himself for <span class="heal">{{ item.actionValue }}</span></span>
                    <span v-else-if="item.actionType === 'special attack'"> special attacks and deals <span class="special-attack">{{ item.actionValue }}</span></span>
                    <span v-else> attacks and deals <span class="damage">{{ item.actionValue }}</span></span>  
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
@import './assets/base.css';

* {
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    list-style-type: none;
}
.special-attack{
    color: #001aff;
    font-weight: bold;
}
.log_player{
    color: rgb(255, 0, 255);
}
.log_monster{
    color: orange;
}
.heal{
    color: green;
    font-weight:bold;
}
.damage {
    color: red;
    font-weight: bold;
}
header {
    width: 100%;
    padding: 30px 15px;
    background-color: #8b0000;
}

h1 {
    font-size: 50px;
    color: #ffffff;
    font-weight: bold;
}

.container h2 {
    color: red
}

.container h3 {
    color: #91ff00;
    font-size: 40px;
    font-weight: bold;
}

h2 {
    color: #000000;
    font-weight: bold;
    font-size: 40px;
}

.healthbar {
    width: 620px;
    height: 50px;
    margin-top: 10px;
    border: 2px solid #000000
}

.healtbar__value {
    background-color: #009c41;
    width: 616px;
    height: 46px;
}

.div {
    border-radius: 20px;
    padding: 20px 40px;
    width: 700px;

    margin: 30px auto;
    box-shadow: 0px 0px 17px -10px rgba(0, 0, 0, 0.75);

}

.button {
    color: #ffffff;
    font-size: 15px;
    border-radius: 10px;
    padding: 15px 60px;
    background-color: #ff0edf;
    border: 0px;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.button:hover {
    background-color: #bd52ae;
}

.button:disabled {
    background-color: #ccc;
}

.two {
    padding: 15px 30px;
}

.three {
    padding: 15px 70px;
}

.four {
    padding: 15px 45px;
}

.new {
    background-color: #1100ff;
}

.new:hover {
    background-color: #1100ff7c;
}
</style>
