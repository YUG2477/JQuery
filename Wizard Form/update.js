$(document).ready(function(){
   
    var currentTab = 0; 
    showTab(currentTab);
    var firstName, lastName, gender, email, phone, dob, game, abtu, radio ;
    var count =0;
    
    $("#formSubmit").validate({
      rules: {
          fname: {
              required: true,
              minlength: 3,
              maxlength: 30,
          },
          lname: {
              required: true,
              minlength: 3,
              maxlength: 30,
          },
          email: {
              required: true,
              email: true,
          },
          contact: {
              required: true,
              minlength: 10,
              maxlength: 10,
          },
          userdob: {
              required: true,
          },
          fsports: {
              required: true,
          },
          message: {
              required: true,
              minlength: 10,
          },
          // tandc: {
          //     required: true,
    
          // },
      },
      messages: {
        fname: {
              required: "<br>Please enter your firstname",
              minlength: "<br>Your first name must consist atleast 3 characters",
          },
          lname: {
              required: "<br>Please enter your lastname",
              minlength: "<br>Your last name must consist atleast 3 characters",
          },
          email: {
              required: "<br>Please enter your email",
              email: "<br>Please enter valid email",
          },
          contact: {
              required: "<br>Please enter contact number",
              minlength: "<br>Contact number must be of 10 digits",
              maxlength: "<br>Please enter no more than 10 digits",
          },
          userdob: {
              required: "Please enter your date of birth.",
          },
          fsports: {
              required: "Please select your favourite sport",
          },
          message: {
              // required: "<br>Please tell about yourself", 
              minlength: "<br>Please write atleast 10 words",
          },
          // tandc: 
          //    "Please accept our T&C",
         
        },
    
    });
    
    function showTab(n) {
     
      var x = document.getElementsByClassName("tab");
      x[n].style.display = "block";
     
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
        // document.getElementById("nextBtn").css("display:none;")
        // $("#nextBtn").css("display", "none");
        // $("#submitBtn").css("display", "flex");
    
    
    
    
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
     
      fixStepIndicator(n)
    }
    
    
    
    $("#nextBtn").click(function(){
      var n =1;
    
      console.log("next")
      var x = document.getElementsByClassName("tab");
    
      if (n == 1 
        && !validateForm()
      ) return false;
    
      x[currentTab].style.display = "none";
      
    
      currentTab = currentTab + n;
      count= count+1;
     
      if (currentTab >= x.length) {
        
        // document.getElementById("formSubmit").submit();
        return false;
      }
    
    showTab(currentTab);
    console.log(count);
    // if(count>=2){
    //   submitting()
    // }
    });
    
    $("#prevBtn").click(function(){
      var n =-1;
      console.log("prev");
      var x = document.getElementsByClassName("tab");
    
      if (n == 1 
        && !validateForm()
        ) return false;
    
      x[currentTab].style.display = "none";
    
      currentTab = currentTab + n;
      if (currentTab >= x.length) {
        // document.getElementById("formSubmit").submit();
        // return false;
        console.log("yugal")
      }
    
      showTab(currentTab);
    });
    
    
    //form validation here
    
    
    function validateForm() {
     
      var x, y, i, valid = true;
      x = document.getElementsByClassName("tab");
      y = x[currentTab].getElementsByTagName("input");
      for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
          // alert("Valid Input");
          y[i].className += " invalid";
          valid = false;
        }
      }
      if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
      }
      return valid; 
    }
    
    
    function fixStepIndicator(n) {
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      x[n].className += " active";
    }
    
    
    function valuecheck() {
      firstName = $("#firstname").val();
      lastName = $("#lastname").val();
      gender = $("input[name='gender']:checked").val();
      email = $("#useremail").val();
      phone = $("#usernumber").val();
      dob = $("#userdob").val();
      game = $("#sports").val();
      abtu = $("#aboutuser").val();
      radio = $("#checkbox").is(":checked");
      array = [firstName, lastName, gender, email, phone, dob, game, abtu, radio];
      console.log(array);
    }
    // function submitdata() {
    //   addData = "<tr>";
    //   for (var i = 0; i < array.length; i++) {
    //       addData += "<td>" + array[i] + "</td>";
    //   }
    //   addData += "</tr>";
    //   console.log("hdsjj");
    //   console.log(addData);
    //   $("#record").append(addData);
    // }
    
    function submitting(){
      console.log("submitting...")
      // $("#nextBtn").click(function () {
        firstName = $("#firstname").val();
        lastName = $("#lastname").val();
        gender = $("input[name='gender']:checked").val();
        email = $("#useremail").val();
        phone = $("#usernumber").val();
        dob = $("#userdob").val();
        game = $("#sports").val();
        abtu = $("#aboutuser").val();
        radio = $("#checkbox").is(":checked");
        array = [firstName, lastName, gender, email, phone, dob, game, abtu, radio];
        addData = "<tr>"; 
        for (var i = 0; i < array.length; i++) {
            addData += "<td>" + array[i] + "</td>";
        }
        addData += "</tr>";
        console.log("hdsjj");
        console.log(addData);
        $("#record").append(addData);
        // currentTab.hide();
        // currentTab = 0;  
        // document.form1.reset();
        // showTab(currentTab);
        // $("#nextBtn").css("display", "block");
        // $("#submitBtn").css("display", "none");
    
      // });
    }

   
    if($("#nextBtn").html() = "Submit"){
        submitting()
      }
    
    
    
    
    
    // $("#nextBtn").click(function () {
    //   valuecheck();
    //   console.log(array); 
    //   if(document.getElementById("nextBtn").innerHTML =="Submit"){
    //   // submitdata();
    //   if ($("#formSubmit").valid()) {
    //     submitdata();
    //   document.form1.reset();
    // } else {
    //   $("#formSubmit").validate()
    // }
    // };
    
    // });
    
    
    // if (count==2) {
    //   $("#submitBtn").click(function () {
    //     console.log("submit");
    //     valuecheck();
    //     if ($("#formSubmit").valid()) {
    //         submitdata();   
    //     } else {
    //         $("#formSubmit").validate()
    //     }
    //     count=0;
    //     console.log(count);
    //   });
    
    
    // } 
    
    
    
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // function validateForm() {
     
    //   var x, y, i, valid = true;
    //   x = document.getElementsByClassName("tab");
    //   y = x[currentTab].getElementsByTagName("input");
    //   for (i = 0; i < y.length; i++) {
    //     if (y[i].value == "") {
    //       y[i].className += " invalid";
    //       valid = false;
    //     }
    //   }
    //   if (valid) {
    //     document.getElementsByClassName("step")[currentTab].className += " finish";
    //   }
    //   return valid; 
    // }
    
    
    // function fixStepIndicator(n) {
    //   var i, x = document.getElementsByClassName("step");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].className = x[i].className.replace(" active", "");
    //   }
    //   x[n].className += " active";
    // }
    
    
    