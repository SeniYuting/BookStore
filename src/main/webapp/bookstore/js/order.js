$(function() {

	$("#save").click(function(e) {
		var userid = $("#userid").val();
		var date = $("input[name='date']").val();
		console.log(userid, date);

		var dataset = e.currentTarget.dataset;
		var id = dataset.id;

		if (id != "") { // Edit
			jQuery.ajax({
				url : 'updateOrderPro',
				processData : true,
				dataType : "text",
				data : {
					id : id,
					userid : userid,
					date : date
				},
				success : function(data) {
					console.log(id);
					bootbox.alert({
						message : 'Modify Successfully! '
							+ 'PS: No change if foreign key does not exist!',
					    callback : function() {
							location.reload();
						}
					});
				}
			});
		} else { // Add
			jQuery.ajax({
				url : 'addOrderPro',
				processData : true,
				dataType : "text",
				data : {
					userid : userid,
					date : date
				},
				success : function(data) {
					bootbox.alert({
						message : 'Add Successfully! '
							+ 'PS: No change if foreign key does not exist!',
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
					label : 'Delete'
				},
				cancel : {
					label : 'Cancel'
				}
			},
			message : 'Sure to delete?',
			callback : function(result) {
				if (result) {

					var dataset = e.currentTarget.dataset;
					var id = dataset.id;
					jQuery.ajax({
						url : 'deleteOrderPro',
						processData : true,
						dataType : "text",
						data : {
							id : id
						},
						success : function(data) {
							console.log(id);
							bootbox.alert({
								message : 'Delete Successfully! '
									+ 'PS: No change if foreign key does not exist!',
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

		$("#userid").val("");
		$("input[name='date']").val("");

		$("#save").attr("data-id", "");
		$('#modal').modal('show');
	});

	$(".edit").click(function(e) {
		$('#modalTitle').html("Edit");
		var dataset = e.currentTarget.dataset;
		var id = dataset.id;
		console.log(id);

		$("#userid").val(dataset.userid);
		$("input[name='date']").val(dataset.date);

		$("#save").attr("data-id", dataset.id);
		$('#modal').modal('show');
	});

});
