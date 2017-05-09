package action;

import java.util.List;

import model.Book;
import model.Order;
import model.Orderitem;
import service.AppService;

public class AllOrderitemsAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private AppService appService;

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		List<Orderitem> orderitems = appService.getAllOrderitems();
		request().setAttribute("orderitems", orderitems);

		List<Order> orders = appService.getAllOrders();
		request().setAttribute("orders", orders);

		List<Book> books = appService.getAllBooks();
		request().setAttribute("books", books);

		return SUCCESS;
	}
}
