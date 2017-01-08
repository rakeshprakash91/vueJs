new Vue({
    el: "#app",
    data: {
        you: "You",
        monster: "Monster",
        mScore: 400,
        pScore: 400,
        isNewGame: true,
        gameOver: true,
        winner: "",
        showHeal: false
    },
    computed: {


    },
    watch: {

    },
    methods: {
        pAttack: function () {
            this.mScore = this.mScore - Math.ceil(Math.random() * 100);
            this.pScore = this.pScore - Math.ceil(Math.random() * 100);
            console.log(this.mScore, this.pScore, this.showHeal)
            this.checkStatus();
        },
        pHeal: function () {
            if (this.pScore < 300) {
                this.pScore = this.pScore + Math.ceil(Math.random() * 100) + 5 - (Math.ceil(Math.random() * 100 / 2));
                this.mScore = this.mScore - Math.ceil(Math.random() * 100) + 3;
            }
            this.checkStatus()
        },
        pBgStyle: function () {
            return {
                "width": this.pScore + "px"
            }
        },
        mBgStyle: function () {
            return {
                "width": this.mScore + "px"
            }
        },
        newGame: function () {
            this.mScore = 400;
            this.pScore = 400;
            this.isNewGame = false;
            this.gameOver = false;
            this.showHeal = false;
        },
        checkStatus: function () {
            if (this.pScore <= 200 || this.mScore <= 200) {
                if (this.pScore > this.mScore) {
                    this.winner = "You Win!!!"
                } else if (this.pScore < this.mScore) {
                    this.winner = "Monster Wins!!!"
                } else {
                    this.winner = "Draw match !!!"
                }
                this.gameOver = true;
                this.isNewGame = true;
            }
            if (this.pScore < 300) {
                this.showHeal = true;
            } else {
                this.showHeal = false;
            }
        }
    }
})