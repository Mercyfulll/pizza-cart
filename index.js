document.addEventListener("alpine:init", () => {
    Alpine.data("calculations", () => ({
        total: 0,
        count: 0,
        count2: 0,
        count3:0,
        message:'',
        amount: 0,
        smallAdd() {
            this.count += 29
        },
        smallMinus() {
            this.count -= 29
            if (this.count < 0) {
                this.count = 0;
            }
        },
        mediumAdd() {
            this.count2 += 89
        },
        mediumMinus() {
            this.count2 -= 89
            if (this.count2 < 0) {
                this.count2 = 0;
            }
        },
        largeAdd() {
            this.count3 += 130
        },
        largeMinus() {
            this.count3 -= 130
            if (this.count3 < 0) {
                this.count3 = 0;
                openLarge == false
            }
        },
        cost (){
            this.total = this.count + this.count2 + this.count3
        },
        paid() {
            if (this.amount < this.total) {

                this.message = "Sorry - that is not enough money!"
                setTimeout(function(){
                    this.message = ''
                  },3000);
            }
            if (this.amount >= this.total) {
                this.message = "Enjoy your pizzas"


            }
        },
        clearCart() {
           
            if(this.count2 <= -1){
                this.openMedium = false
            }
            if(this.count3 <= -1)
                this.openLarge = false
        }
        }))
})