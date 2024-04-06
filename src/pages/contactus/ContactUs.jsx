import React from "react";
import CommentAttach from "../../components/scrollPages/CommentAttach";

function ContactUs() {
  return (
    <>
      <div className="section-container py-10">
        <div className="md:flex space-y-6">
          <div className="md:w-[35%] space-y-5">
            <h1 className="md:text-xl text-sm font-bold">
              Need a direct line?
            </h1>
            <div className="">
              <span className="text-sm">
                Cras massa et odio donec faucibus in. Vitae pretium massa dolor
                ullamcorper lectus elit quam.
              </span>
            </div>
            {/*  */}
            <div className="">
              <div className="flex gap-4 items-center">
                <span>
                  <img src="/images/home/img/call.png" alt="phone" />
                </span>
                <div className="flex text-sm flex-col">
                  <span className="">Phone</span>
                  <span className="font-semibold">(123) 456 7890</span>
                </div>
              </div>
              {/* message */}
              <div className="flex gap-4 items-center">
                <span>
                  <img src="/images/home/img/msg.png" alt="message" />
                </span>
                <div className="flex text-sm flex-col">
                  <span className="">Email</span>
                  <span className="font-semibold">contact@thimpress.com</span>
                </div>
              </div>
            </div>
          </div>
          {/* googlr map */}
          <div className="md:w-[70%] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d244.16742532390043!2d75.69347637271136!3d11.717146531229163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d11.7171325!2d75.6935953!4m3!3m2!1d11.7171121!2d75.6935743!5e0!3m2!1sen!2sin!4v1712396775749!5m2!1sen!2sin"
              width=""
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl shadow-md w-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>
        <div className="">
            <CommentAttach/>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
