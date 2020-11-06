import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    model(){
        const items = [
            {
                name : "Item1",
                price : 100
            },
            {
                name : "Item2",
                price : 400
            }
        ];
        return items;
    }
    setupController(controller, model){
       super.setupController(controller,model);
        let subtotal = 0;
        model.forEach(element => {
            subtotal = subtotal+element.price;
        });
        controller.set('cartSubTotal' , subtotal);
    }
}
