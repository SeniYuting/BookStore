package model;

import java.sql.Date;

public class Book {

	private int id;
	private String title;
	private String author;
	private double price;
	private String publisher;
	private Date date;

	public Book() {
	}

	public Book(String title, String author, double price, String publisher,
			Date date) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.publisher = publisher;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
