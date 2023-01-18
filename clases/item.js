
class Item {
    product_id;
    id;
    code;
    detail;
    sold;

    constructor ( product_id, id, code, detail ) {
        this.product_id = product_id
        this.id = id
        this.code = code
        this.detail = detail
        this.sold = false
    }
}