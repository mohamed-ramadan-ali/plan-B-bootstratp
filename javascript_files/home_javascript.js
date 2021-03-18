$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});


$(".login-btn").click(function(){
    $(".login").fadeIn(300)
});

$(".Signup-btn").click(function(){
    $(".signup").fadeIn(300)
});

$(".x").click(function(){
    $(".login").fadeOut(300),
    $(".signup").fadeOut(300)
});


$("#acc").click(function(){
    $(".profile").html(` <h2>Profile Info</h2>
    <div class="row  ">

      <div class="col-lg-7">
        <form action="">

          <label class="mt-3" for="">Full Name</label> <br>
          <input class="   w-100 py-2   brdr-raduise" type="text" name="" id="">

          <label class="mt-3" for="">Email</label> <br>
          <input class="w-100 brdr-raduise py-2" type="email" name="" id="">

          <label class="mt-3" for="">Password</label> <br>
          <input class="   w-100 py-2   brdr-raduise" type="password" name="" id="">


          <button type="submit" class=" btn px-4 btn-more w-100  mt-5 brdr-raduise ">Edit Info</button>

        </form>
      </div>


    </div>`)
   
});



$("#corss").click(function(){
    $(".profile").html(`       <div class="row">
    <div class="col-lg-6 my-2">
      <a href="../singl page course/singleCourse.html">
        <div class="post ">
          <div class="main ">
            <img class="img-fluid " src="../imgs/course 6.jpg" alt="">
            <h4 class="crs-name1"> ادارة الاعمال </h4>
            <div class="layer">
              <h3>محتويات الكورس</h3>
              <H5>بناء علامات تجارية قوية -</H5>
              <h5>صياغة عروض السوق -</h5>
              <h5> المدرب: محمد على</h5>
              <h5> 500 EGP </h5>
              <button class="btn"> اشترك الأن</button>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="col-lg-6 my-2">
      <a href="../singl page course/singleCourse.html">
        <div class="post ">
          <div class="main ">
            <img class="img-fluid " src="../imgs/course 6.jpg" alt="">
            <h4 class="crs-name1"> ادارة الاعمال </h4>
            <div class="layer">
              <h3>محتويات الكورس</h3>
              <H5>بناء علامات تجارية قوية -</H5>
              <h5>صياغة عروض السوق -</h5>
              <h5> المدرب: محمد على</h5>
              <h5> 500 EGP </h5>
              <button class="btn"> اشترك الأن</button>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="col-lg-6 my-2">
      <a href="../singl page course/singleCourse.html">
        <div class="post ">
          <div class="main ">
            <img class="img-fluid " src="../imgs/course 6.jpg" alt="">
            <h4 class="crs-name1"> ادارة الاعمال </h4>
            <div class="layer">
              <h3>محتويات الكورس</h3>
              <H5>بناء علامات تجارية قوية -</H5>
              <h5>صياغة عروض السوق -</h5>
              <h5> المدرب: محمد على</h5>
              <h5> 500 EGP </h5>
              <button class="btn"> اشترك الأن</button>
            </div>
          </div>
        </div>
      </a>
    </div>


    <div class="col-lg-6 my-2">
      <a href="../singl page course/singleCourse.html">
        <div class="post ">
          <div class="main ">
            <img class="img-fluid " src="../imgs/course 6.jpg" alt="">
            <h4 class="crs-name1"> ادارة الاعمال </h4>
            <div class="layer">
              <h3>محتويات الكورس</h3>
              <H5>بناء علامات تجارية قوية -</H5>
              <h5>صياغة عروض السوق -</h5>
              <h5> المدرب: محمد على</h5>
              <h5> 500 EGP </h5>
              <button class="btn"> اشترك الأن</button>
            </div>
          </div>
        </div>
      </a>
    </div>



  </div>`)
   
});



$("#cart").click(function(){
    $(".cart").css("right","0px")
});


$(".cartHide").click(function(){
    $(".cart").css("right","-300px")
});




