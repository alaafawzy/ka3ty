import React from "react";
function Footer(){
    return (
        <footer className="footer bg-dark text-white py-5 ">
  <div className="container">
    <div className="row">
      <div className="col-md-6 "> {/* Your company info and social media */}
      <div className="footer-writes">
      <p className=" mb-0">&copy; Ka3ty 2024</p> <br/>
        <p className=" mb-0">G57: محمد عمادالدين - محمد اشرف - محمود رمضان - احمد على</p>
        <p className=" mb-0">احمد صابر - عمر ابراهيم - هشام عبدالحميد </p>
        </div>
      </div>
      <div className="col-md-6 "> {/* Copyright, team name, and address */}
        <div className="footer-social">
        <p>دكتورة مريم سامى</p>
        <p>المعهد العالى للتسويق و التجارة ونظم المعلومات</p>
        </div>
        {/* <p class=" mb-0"><i class="bi bi-geo-alt"></i> معهد كذا</p> */}
      </div>
    </div>
  </div>
</footer>
    );
}
export default Footer;