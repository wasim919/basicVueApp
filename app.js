new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function (event) {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
    },
    attack: function () {
      this.monsterHealth -= this.getDamage(3, 10);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    specialAttack: function () {
      this.monsterHealth -= this.getDamage(10, 20);
      this.checkWin();

      this.monsterAttacks();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    getDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    monsterAttacks: function () {
      this.playerHealth -= this.getDamage(5, 12);
      this.checkWin();
    },
  },
});
