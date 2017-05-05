package dao;

import java.util.List;

import model.Order;

public interface OrderDao {

	public Integer save(Order order);

	public void delete(Order order);

	public void update(Order order);

	public Order getOrderById(int id);

	public List<Order> getAllOrders();

}