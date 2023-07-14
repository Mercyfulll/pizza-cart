document.addEventListener("alpine:init", () => {
    Alpine.data("calculations", () => ({
        total: 0,
        count: 0,
        count2: 0,
        count3: 0,
        showSmall: true,
        showMedium: true,
        showLarge : true,
        smallAdd() {
            this.count += 29
        },
        smallMinus() {
            this.count -= 29
        },
        mediumAdd() {
            this.count2 += 89
        },
        mediumMinus() {
            this.count2 -= 89
        },
        largeAdd() {
            this.count3 += 130
        },
        largeMinus() {
            this.count3 -= 130
        },
        cost() {
            this.total = this.count + this.count2 + this.count3
        },
        paid(amount) {
            var message = ''
            if (this.amount > this.total) {
                message = "Enjoy your pizzas"
            }
            if (amount > this.total) {
                setTimeout(function(){
                    message = "Sorry - that is not enough money!"
                  },3000);
                
            }
        },
        clearCart() {
            if (this.count < 0) {
                this.showSmall= false 
            }
            if(this.count2 < 0){
                this.showMedium = false
            }
            if(this.count3 < 0)
                this.showLarge = false
        }
        }))
})