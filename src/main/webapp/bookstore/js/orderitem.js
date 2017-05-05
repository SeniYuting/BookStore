$(function() {

	$("#save").click(function(e) {
		var orderid = $("input[name='orderid']").val();
		var bookid = $("input[name='bookid']").val();
		var amount = $("input[name='amount']").val();
		console.log(orderid, bookid, amount);

		var dataset = e.currentTarget.dataset;
		var id = dataset.id;

		if (id != "") { // Edit
			jQuery.ajax({
				url : 'updateOrderitemPro',
				processData : true,
				dataType : "text",
				data : {
					id : id,
					orderid : orderid,
					bookid : bookid,
					amount : amount
				},
				success : function(data) {
					console.log(id);
					bootbox.alert({
						message : '修改成功，注：若关联外键不存在，则不修改',
					 callback : function() {
					 location.reload();
					 }
					});
				}
			});
		} else { // Add
			jQuery.ajax({
				url : 'addOrderitemPro',
				processData : true,
				dataType : "text",
				data : {
					orderid : orderid,
					bookid : bookid,
					amount : amount
				},
				success : function(data) {
					bootbox.alert({
						message : '添加成功，注：若关联外键不存在，则不添加',
						callback : function() {
							location.reload();
						}
					});
				}
			})
		}

		$('#modal').modal('hide');
	});

	$(".delete").click(function(e) {
		bootbox.confirm({
			buttons : {
				confirm : {
					label : '删除'
				},
				cancel : {
					label : '取消'
				}
			},
			message : '确认删除？',
			callback : function(result) {
				if (result) {

					var dataset = e.currentTarget.dataset;
					var id = dataset.id;
					jQuery.ajax({
						url : 'deleteOrderitemPro',
						processData : true,
						dataType : "text",
						data : {
							id : id
						},
						success : function(data) {
							console.log(id);
							bootbox.alert({
								message : '删除成功，注：若关联外键存在，则不删除',
							 callback : function() {
									location.reload();
								}
							});
						}
					});

				}
			}
		});
	});

	$("#add").click(function(e) {
		$('#modalTitle').html("Add");

		$("input[name='orderid']").val("");
		$("input[name='bookid']").val("");
		$("input[name='amount']").val("");

		$("#save").attr("data-id", "");
		$('#modal').modal('show');
	});

	$(".edit").click(function(e) {
		$('#modalTitle').html("Edit");
		var dataset = e.currentTarget.dataset;
		var id = dataset.id;
		console.log(id);

		$("input[name='orderid']").val(dataset.orderid);
		$("input[name='bookid']").val(dataset.bookid);
		$("input[name='amount']").val(dataset.amount);

		$("#save").attr("data-id", dataset.id);
		$('#modal').modal('show');
	});

});
