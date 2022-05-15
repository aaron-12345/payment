(document).ready(function()
{
 $("#alertSuccess").hide();
 $("#alertError").hide();
});
  $(document).on("click", "#btnSave", function(event)
{
});
$("#alertSuccess").text("");
$("#alertSuccess").hide();
$("#alertError").text("");
$("#alertError").hide();
var status = validateItemForm();
// If not valid
if (status != true)
{
 $("#alertError").text(status);
 $("#alertError").show();
return;
}
var student = getStudentCard($("#txtName").val().trim(),
 $('input[name="rdoGender"]:checked').val(),
 $("#ddlYear").val());
$("#colStudents").append(student);
$("#alertSuccess").text("Saved successfully.");
$("#alertSuccess").show();

$("#formStudent")[0].reset();

$(document).on("click", "#btnSave", function(event)
{
// Clear status msges-------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation----------------
var status = validateItemForm();
// If not valid-------------------
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid-----------------------
 // Generate the card and append
var student = getStudentCard($("#txtName").val().trim(),
 $('input[name="rdoGender"]:checked').val(),
 $("#ddlYear").val());
 $("#colStudents").append(student);

 $("#alertSuccess").text("Saved successfully.");
 $("#alertSuccess").show();

 $("#formStudent")[0].reset();
});
 8
Step 4.3: Client-Model: Validate form 











