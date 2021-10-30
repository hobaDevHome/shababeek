import React from 'react';

function ContactUs() {
  return (
    <div className="section my-5 py-5">
      <div className="container">
        <div className="well well-sm">
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27513.549096902378!2d31.170912049950225!3d30.458953023924053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2sBanha%2C%20Qism%20Banha%2C%20Banha%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1635513400749!5m2!1sen!2seg"
              width="600"
              height="450"
              allowfullscreen
              style={{
                border: '0',
                width: '100%',
                height: '316px',
                frameborder: '0',
              }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-md-5">
            <h3 className="mb-3">
              <strong>Contact Us</strong>
            </h3>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button type="submit" class="btn btn-primary mt-3">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
