package action;

import model.Orderitem;
import service.AppService;

public class UpdateOrderitemAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private int id;
	private int orderid;
	private int bookid;
	private int amount;

	private AppService appService;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public int getBookid() {
		return bookid;
	}

	public void setBookid(int bookid) {
		this.bookid = bookid;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		Orderitem orderitem = appService.getOrderitemById(id);
		orderitem.setOrderid(orderid);
		orderitem.setBookid(bookid);
		orderitem.setAmount(amount);
		appService.updateOrderitem(orderitem);

		return SUCCESS;
	}

}
