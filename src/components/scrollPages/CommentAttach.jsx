import React from 'react'

function CommentAttach() {
  return (
    <div className="w-full py-10 space-y-5">
              <div className="">
                <h1 className="text-xl font-semibold ">Leave A Command</h1>
              </div>
              <div>
                <span>
                  Your email address will not be published. Required fields are
                  marked *
                </span>
              </div>
              <div className="">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="border p-2 w-full rounded-md outline-none border-1 mr-2 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className="border p-2 w-full rounded-md outline-none border-1 mr-2 mb-2"
                  />
                </div>
                <textarea
                  placeholder="Comment"
                  rows={4}
                  className="border p-2 w-full rounded-md outline-none border-1 flex-grow mr-2 mb-2"
                ></textarea>
              </div>
              <div className="">
                <input type="checkbox" name="terms" id="terms" required /> 
               <span className="ms-2"> Save my name, email in this brower for the next time I comment</span>
              </div>
              <button className="p-3 text-white bg-primary font-semibold text-sm rounded-3xl">Post Comment</button>
            </div>
  )
}

export default CommentAttach