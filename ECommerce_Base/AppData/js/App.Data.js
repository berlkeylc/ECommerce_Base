var AppData = {
    Init: function () {
        var tables = $('table');
        if (tables.length >= 1) {
            for (var i = 0; i < tables.length; i++) {
                var $this = $(tables[i]);
                dataTableId = $this.attr('id')
                if (typeof dataTableId != 'undefined') {
                    switch (dataTableId) {
                        case "CategoriesTable":
                            SaveModals.GetCategories();
                            break;
                        case "ProductsTable":
                            SaveModals.GetProducts();
                            break;
                        case "UsersTable":
                            SaveModals.GetUsers();
                            break;
                        case "OrdersTable":
                            SaveModals.GetOrders();
                            break;
                        case "OrderDetailsTable":
                            SaveModals.GetOrderDetails();
                            break;
                    }
                }

            }
        }
    }

}