package action;

import model.User;
import service.AppService;

public class AddUserAction extends BaseAction {

	private static final long serialVersionUID = 1L;

	private String username;
	private String password;
	private String role;

	private AppService appService;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setAppService(AppService appService) {
		this.appService = appService;
	}

	@Override
	public String execute() throws Exception {

		User user = new User(username, password, role);
		appService.addUser(user);

		return SUCCESS;
	}

}
