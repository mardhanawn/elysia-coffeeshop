import Elysia, { t } from "elysia";
import { coffeeService,  } from "../services/coffeeService";

export const coffeeController = new Elysia({ prefix: '/coffee' })
    .get('/', () => coffeeService.getAllCoffeeShops())
    .post('/', ({ body }) => {
    return coffeeService.addShop(body);
}, {
    body: t.Object({
        name: t.String(),
        description: t.String(),
        location: t.String()
    })
}).patch('/:id', ({ params, body }) => {
    return coffeeService.updateShop(params.id, body);
}, {
    body: t.Partial(t.Object({
        name: t.String(),
        description: t.String(),
        location: t.String()
    }))
})