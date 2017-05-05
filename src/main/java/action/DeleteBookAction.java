package action;

import model.Book;
import service.AppService;

public class DeleteBookAction extends BaseAction {

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

		Book book = appService.getBookById(id);
		appService.deleteBook(book);

		return SUCCESS;
	}

}
