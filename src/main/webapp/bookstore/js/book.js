$(function() {

	$("#save").click(function(e) {
		var title = $("input[name='title']").val();
		var author = $("input[name='author']").val();
		var price = $("input[name='price']").val();
		var publisher = $("input[name='publisher']").val();
		var date = $("input[name='date']").val();
		console.log(title, author, price, publisher, date);

		var dataset = e.currentTarget.dataset;
		var id = dataset.id;

		if (id != "") { // Edit
			jQuery.ajax({
				url : 'updateBookPro',
				processData : true,
				dataType : "text",
				data : {
					id : id,
					title : title,
					author : author,
					price : price,
					publisher : publisher,
					date : date
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
				url : 'addBookPro',
				processData : true,
				dataType : "text",
				data : {
					title : title,
					author : author,
					price : price,
					publisher : publisher,
					date : date
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
						url : 'deleteBookPro',
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

		$("input[name='title']").val("");
		$("input[name='author']").val("");
		$("input[name='price']").val("");
		$("input[name='publisher']").val("");
		$("input[name='date']").val("");

		$("#save").attr("data-id", "");
		$('#modal').modal('show');
	});

	$(".edit").click(function(e) {
		$('#modalTitle').html("Edit");
		var dataset = e.currentTarget.dataset;
		var id = dataset.id;
		console.log(id);

		$("input[name='title']").val(dataset.title);
		$("input[name='author']").val(dataset.author);
		$("input[name='price']").val(dataset.price);
		$("input[name='publisher']").val(dataset.publisher);
		$("input[name='date']").val(dataset.date);

		$("#save").attr("data-id", dataset.id);
		$('#modal').modal('show');
	});

});
