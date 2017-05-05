package action;

import model.Orderitem;
import service.AppService;

public class DeleteOrderitemAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private int id;

	private AppService appService;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		Orderitem orderitem = appService.getOrderitemById(id);
		appService.deleteOrderitem(orderitem);

		return SUCCESS;
	}

}
