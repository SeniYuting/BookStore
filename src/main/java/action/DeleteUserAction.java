package action;

import model.User;
import service.AppService;

public class DeleteUserAction extends BaseAction {

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

		User user = appService.getUserById(id);
		appService.deleteUser(user);

		return SUCCESS;
	}

}
