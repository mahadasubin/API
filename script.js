$(document).ready(
		function() {
			var person={};
			$('#update').click(function(){
				$("#resume").text("");
			
			//$("#resume").text($('#name').val()+'\n'+$('#position').val()+'\n'+$('#location').val()+'\n'+$('#desc').val()) ;});
				$("input").each(function(){
					if($(this).val()!=""){
				var temp = $(this).attr("id");	
					 person[temp] = $(this).val();
					}
				});
				$.each(person,function(k,v){
				$("#resume").append(k+" :        "+v+'\n');
				});
				});
			$('#tojson').click(function(){
				 var jstring = JSON.stringify(person);
				$("#resume").text(jstring);});
			

			$('li#exp').click(function() {
				frm='frm2';
				$("#frm1").css("display", "none");
				$("#frm2").css("display", "inline");
				$("#frm3").css("display", "none");
			});
			
			$('li#edu').click(function() {
				frm='frm3';
				$("#frm1").css("display", "none");
				$("#frm2").css("display", "none");
				$("#frm3").css("display", "inline");
			});
		
           
			
});
