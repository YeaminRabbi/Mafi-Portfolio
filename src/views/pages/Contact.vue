<template>
   <div>
    <section class="probootstrap-cover overflow-hidden relative" style="background-image: url('/assets/images/bg_1.jpg');"
        data-stellar-background-ratio="0.5" id="section-home">
        <div class="overlay"></div>
        <div class="container">
            <div class="row align-items-center text-center">
                <div class="col-md">
                    <h2 class="heading mb-2 display-4 font-light probootstrap-animate">Contact</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="probootstrap_section bg-light" id="section-contact">
          <div class="container">
        
            <div class="row">
              <div class="col-md-6 probootstrap-animate">
                <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="probootstrap-contact-details">
                      <li>
                        <span class="text-uppercase"><span class="ion-paper-airplane"></span> Email</span>
                        you_mail@gmail.com
                      </li>
                      <li>
                        <span class="text-uppercase"><span class="ion-ios-telephone"></span> Phone</span>
                        +30 976 1382 9921
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="probootstrap-contact-details">
                      <li>
                        <span class="text-uppercase"><span class="ion-ios-telephone"></span> Fax</span>
                        +30 976 1382 9922
                      </li>
                      <li>
                        <span class="text-uppercase"><span class="ion-location"></span> Address</span>
                        San Francisco, CA <br>
                        4th Floor8 Lower  <br>
                        San Francisco street, M1 50F
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6  probootstrap-animate">
                <form action="#" method="post" class="probootstrap-form probootstrap-form-box mb60">
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="fname" class="sr-only sr-only-focusable">First Name</label>
                        <input type="text" class="form-control" id="fname" name="fname" placeholder="First Name">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lname" class="sr-only sr-only-focusable">Last Name</label>
                        <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="sr-only sr-only-focusable">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label for="message" class="sr-only sr-only-focusable">Message</label>
                    <textarea cols="30" rows="10" class="form-control" id="message" name="message" placeholder="Write your message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" class="btn btn-primary" id="submit" name="submit" value="Send Message">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <!-- END section -->

   </div>
    
</template>

<script>

// import { contentWayPoint } from '../../../public/assets/js/main.js'
// import $ from 'jquery';
// import waypoints from 'waypoints/lib/noframework.waypoints';
export default {
  name: 'Contact',
  mounted() {

    const script8 = document.createElement('script');
    script8.src = './assets/js/main.js';
    document.head.appendChild(script8);

     window.scrollTo(0, 0);
  }
  
}
</script>
