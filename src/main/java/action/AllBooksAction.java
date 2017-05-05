package action;

import java.util.List;

import model.Book;
import service.AppService;

public class AllBooksAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private AppService appService;

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		List<Book> books = appService.getAllBooks();

		if (books.size() == 0)
			request().setAttribute("noBook", "true");

		request().setAttribute("books", books);

		return SUCCESS;
	}
}
