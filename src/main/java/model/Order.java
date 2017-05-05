package model;

import java.sql.Date;

public class Order {

	private int id;
	private int userid;
	private Date date;

	public Order() {
	}

	public Order(int userid, Date date) {
		this.userid = userid;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
