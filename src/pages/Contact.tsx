import React, { useRef, useState } from "react";
import { TitleCard } from "../components";
import connect from "../assets/images/connexion.png";
import Chat from "../components/chat/Chat";

const Contact = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);

    function handleSubmit() {
        setName(refName.current?.value);
        setEmail(refEmail.current?.value);
        setMessage(refMessage.current?.value);
    }

    console.log(name, email, message);
    return (
        <div>
            <TitleCard title="Contact" />
            <section className="z-20">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img src={connect} className="position-absolute my-4" alt="Sample" />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            {/* Form start */}
                            <form>
                                <div className="mb-6">
                                    <input
                                        ref={refName}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        ref={refEmail}
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                  <textarea
                                      ref={refMessage}
                                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                      id="exampleFormControlTextarea1"
                                      rows={+5}
                                      placeholder="Message"
                                  ></textarea>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        onClick={() => {
                                            handleSubmit();
                                        }}
                                        type="button"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {/* Form ended */}
                        </div>
                    </div>
                </div>
            </section>
            <Chat/>
        </div>
    );
};

export default Contact;



