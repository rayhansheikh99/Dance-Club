import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
              
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Dance Club is a venue in the heart of Queens with a warm staff and an owner that takes a lot of pride in bringing you the absolute best for whatever the event may be! Wedding and other receptions, Baby showers, Sweet 16 parties, Birthday events, Holiday parties– Any event you’re celebrating, we’d love to be a part of!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Freestyle</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Salsa</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Robotics</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Hip Hop</a></li>
              <li><a href="http://scanfcode.com/category/android/">Pooping</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Contemporary</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by  Dance Club
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    );
};

export default Footer;