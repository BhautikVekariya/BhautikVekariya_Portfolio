import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    const boxStyle = {
        background: "rgba(255,255,255,0.08)",
        padding: "30px",
        borderRadius: "15px",
        width: "450px",
        boxShadow: "0px 0px 12px rgba(0,0,0,0.4)",
        color: "white",
        height: "393px",
        marginBottom: "105px",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "15px",
        fontSize: "17px",
    };

    return (
        <div style={{ padding: "40px", marginTop: "40px" }}>
            {/* PAGE TITLE */}
            <h1 className="text-white contact-title" style={{ textAlign: "center" }}>
                Contact Me
            </h1>

            <p className="text-white contact-content" style={{ textAlign: "center" }}>
                Feel free to reach out via email, phone, or connect on social platforms.
            </p>

            {/* SIDE-BY-SIDE WRAPPER */}
            <div className="box-gap"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "50px",
                    flexWrap: "wrap",
                    marginTop: "40px",
                }}
            >
                {/* LEFT FORM */}
                <form action="https://formspree.io/f/xwpgqzov" className="form-contact" method="POST" style={boxStyle}>
                    <div style={{ marginBottom: "15px" }} >
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            className="form-control "

                            style={{
                                padding: "12px",
                                borderRadius: "8px",
                                border: "none",
                                width: "100%",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            className="form-control"
                            style={{
                                padding: "12px",
                                borderRadius: "8px",
                                border: "none",
                                width: "100%",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message"
                            className="form-control"
                            style={{
                                padding: "12px",
                                borderRadius: "8px",
                                border: "none",
                                width: "100%",
                            }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            borderRadius: "8px",
                            border: "1px solid white",
                            background: "rgb(107 10 205)",
                            color: "white",
                            transition: "0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = "#b57aff";
                            e.target.style.transform = "scale(1)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = "#9966cc";
                            e.target.style.transform = "scale(1)";
                        }}
                    >
                        Send Message
                    </button>
                </form>

                {/* RIGHT SIDE – CONNECT WITH ME */}

                <div style={boxStyle} className="connect-contact">
                    <div>
                        <h2
                            className="text-white"
                            style={{
                                textAlign: "center",
                                marginBottom: "25px",
                                marginTop: "45px",
                                display: "flex"
                            }}
                        >
                            Connect with Me
                        </h2>
                        <a
                            href="https://github.com/BhautikVekariya"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                        >
                            <FaGithub size={20} /> BhautikVekariya
                        </a>

                        <a
                            href="https://www.linkedin.com/in/bhautikvekariya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                        >
                            <FaLinkedin size={20} /> Bhautik Vekariya
                        </a>

                        <a href="mailto:vekariyabhavtik3209@gmail.com" style={linkStyle}>
                            <FaEnvelope size={20} /> vekariyabhavtik3209@gmail.com
                        </a>

                        <a href="tel:+917201957351" style={linkStyle}>
                            <FaPhone size={20} /> +91 7201957351
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
