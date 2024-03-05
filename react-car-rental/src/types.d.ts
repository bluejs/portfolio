type ProductPorps = {
    name: string;
    price: number;
    offPrice: number;
    desc: string;
    image: any;
    id: number;
    passengers: number;
    bags: number;
    qty?: number;
    find?: any;
}

type CartProps = {
    cart?: Array;
    total: number;
}

type AddTodCartProps = (product: ProductPorps) => void;

type ActionDispatchProps = {
    action: string;
    state: ProductPorps
}

type actionProps = {
    payload: object;
    type: string;
}