const menu = {
    _meal:'',
  
    _price:0,
  
    set meal(mealToCheck){
     if (typeof mealToCheck === 'string'){ return this._meal = mealToCheck}
    },
  
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){return this._price = priceToCheck}
    },
  
    get todaySpecial(){
      if (this._meal && this._price){ return `Today's speical is ${this._meal} for ${this._price}`
        }
        else {return 'Meal or price was not set correctly!'}
      }
    }
  
  
  menu._meal = 'pizza'
  menu._price = 8
  
  console.log(menu.todaySpecial)