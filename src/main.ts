import Adress from "./entity/adress";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

// criando relaçao de agregados
// relaçao - 1 de ID
let customer = new Customer("123", "mateus");
const addres = new Adress("rua dois", 2, "sinop-mt", "lote 2");
customer.Adres = addres;
customer.activate();

//  essa realaçao é de OBJETO-Entidade
const item1 = new OrderItem("1", "item1", 11, "item2", 2);
const item2 = new OrderItem("2", "item2", 13, "item3", 2);
const order = new Order("1", "122", [item1, item2]);
