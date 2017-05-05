package dao;

import java.util.List;

import model.Book;

public interface BookDao {

	public Integer save(Book book);

	public void delete(Book book);

	public void update(Book book);

	public Book getBookById(int id);

	public List<Book> getAllBooks();

}