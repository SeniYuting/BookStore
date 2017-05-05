package action;

import java.util.List;

import model.Order;
import service.AppService;

public class AllOrdersAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private AppService appService;

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		List<Order> orders = appService.getAllOrders();

		if (orders.size() == 0)
			request().setAttribute("noOrder", "true");

		request().setAttribute("orders", orders);

		return SUCCESS;
	}
}
